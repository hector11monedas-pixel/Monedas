import os
import hashlib
import requests
import urllib.parse

# Mapping of Target File Name in our App -> Wikimedia File Name
COINS = {
    "finland.png": "Moeda_comemorativa_2_euros_2004,_Finlândia.png",
    "greece.jpg": "Moeda_Comemorativa_2_euros_2004,_Grécia.jpg",
    "san_marino.png": "Moeda_comemorativa_2_euros_2004,_San_Marino.png",
    "vatican.png": "Moeda_comemorativa_2_euros_2004,_Vaticano.png",
    "luxembourg.png": "2_€_commemorativo_Lussemburgo_2004.png",
    "italy.png": "2_€_commemorativo_Italia_2004.png" 
}

# Updates for specific tricky ones if the above fail or are wrong files
# Italy might be: '2_euro_dedicated_to_50th_anniversary_of_WFP.png' (Standard English name)
# Let's try the Portuguese/Italian series consistency first as they seemed to exist in previous searches.

BASE_DIR = r"public/img/coins/2004"
os.makedirs(BASE_DIR, exist_ok=True)

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
}

def get_wikimedia_url(filename):
    # Wikimedia Commons URL structure: https://upload.wikimedia.org/wikipedia/commons/a/ab/Filename.ext
    # Hash is MD5 of the filename (spaces replaced by underscores? No, usually spaces are underscores in the name already)
    # The filename in the URL is URL-encoded.
    
    # Ensure underscores for spaces just in case
    safe_name = filename.replace(" ", "_")
    
    # Calculate MD5
    m = hashlib.md5(safe_name.encode('utf-8')).hexdigest()
    path_part = f"{m[0]}/{m[0:2]}"
    
    # Special case: Italy might be in 'it' wikipedia locally? The search suggested it.
    # But usually 'commons' has everything. Let's try commons first.
    
    encoded_name = urllib.parse.quote(safe_name)
    url = f"https://upload.wikimedia.org/wikipedia/commons/{path_part}/{encoded_name}"
    return url

print("Starting download of real images...")

for local_name, wiki_name in COINS.items():
    url = get_wikimedia_url(wiki_name)
    save_path = os.path.join(BASE_DIR, local_name)
    
    print(f"Downloading {local_name} from {url}...")
    
    try:
        r = requests.get(url, headers=HEADERS, timeout=10)
        if r.status_code == 200:
            with open(save_path, 'wb') as f:
                f.write(r.content)
            print(f"✅ Success: {local_name}")
        else:
            print(f"❌ Failed ({r.status_code}): {url}")
            # Fallback for Italy if main fails, try the WFP English name
            if local_name == "italy.png":
                alt_name = "2_euro_dedicated_to_50th_anniversary_of_WFP.png"
                print(f"   Retrying Italy with {alt_name}...")
                url = get_wikimedia_url(alt_name)
                r = requests.get(url, headers=HEADERS)
                if r.status_code == 200:
                    with open(save_path, 'wb') as f:
                        f.write(r.content)
                    print(f"   ✅ Success (Alt): {local_name}")

    except Exception as e:
        print(f"❌ Error: {e}")

print("Done.")
