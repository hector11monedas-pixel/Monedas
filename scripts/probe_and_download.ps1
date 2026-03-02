$ecbBase = "https://www.ecb.europa.eu/euro/coins/comm/img"
$coins = @(
    # 2007 Issues
    @{ Name = "monaco_2007"; Target = "c:\APP- antigravity\Monedas\public\img\coins\2007\monaco.jpg"; Candidates = @("comm_2007_mc.jpg", "comm_2007_mc_grace.jpg", "comm_2007_mc_kelly.jpg") },
    @{ Name = "germany_2007_tor"; Target = "c:\APP- antigravity\Monedas\public\img\coins\2007\treaty_germany.jpg"; Candidates = @("comm_2007_tor_de.jpg", "comm_2007_treaty_de.jpg", "comm_2007_de_tor.jpg", "comm_2007_de_treaty.jpg") },
    
    # 2008 Issues
    @{ Name = "germany_2008"; Target = "c:\APP- antigravity\Monedas\public\img\coins\2008\germany.jpg"; Candidates = @("comm_2008_de.jpg", "comm_2008_de_hamburg.jpg") },
    @{ Name = "belgium_2008"; Target = "c:\APP- antigravity\Monedas\public\img\coins\2008\belgium.jpg"; Candidates = @("comm_2008_be.jpg") },
    @{ Name = "finland_2008"; Target = "c:\APP- antigravity\Monedas\public\img\coins\2008\finland.jpg"; Candidates = @("comm_2008_fi.jpg") },
    @{ Name = "italy_2008"; Target = "c:\APP- antigravity\Monedas\public\img\coins\2008\italy.jpg"; Candidates = @("comm_2008_it.jpg") },
    @{ Name = "luxembourg_2008"; Target = "c:\APP- antigravity\Monedas\public\img\coins\2008\luxembourg.jpg"; Candidates = @("comm_2008_lu.jpg") },
    @{ Name = "portugal_2008"; Target = "c:\APP- antigravity\Monedas\public\img\coins\2008\portugal.jpg"; Candidates = @("comm_2008_pt.jpg") },
    @{ Name = "sanmarino_2008"; Target = "c:\APP- antigravity\Monedas\public\img\coins\2008\san_marino.jpg"; Candidates = @("comm_2008_sm.jpg") },
    @{ Name = "slovenia_2008"; Target = "c:\APP- antigravity\Monedas\public\img\coins\2008\slovenia.jpg"; Candidates = @("comm_2008_si.jpg") },
    @{ Name = "vatican_2008"; Target = "c:\APP- antigravity\Monedas\public\img\coins\2008\vatican.jpg"; Candidates = @("comm_2008_va.jpg") },
    @{ Name = "france_2008"; Target = "c:\APP- antigravity\Monedas\public\img\coins\2008\france.jpg"; Candidates = @("comm_2008_fr.jpg") }
)

# Ensure directory exists
if (!(Test-Path "c:\APP- antigravity\Monedas\public\img\coins\2008")) {
    New-Item -ItemType Directory -Force -Path "c:\APP- antigravity\Monedas\public\img\coins\2008"
}

foreach ($coin in $coins) {
    Write-Host "Probing for $($coin.Name)..."
    $found = $false
    foreach ($candidate in $coin.Candidates) {
        $url = "$ecbBase/$candidate"
        try {
            $req = Invoke-WebRequest -Uri $url -Method Head -ErrorAction Stop
            if ($req.StatusCode -eq 200) {
                Write-Host "  FOUND: $url"
                Invoke-WebRequest -Uri $url -OutFile $coin.Target
                $found = $true
                break
            }
        }
        catch {
            Write-Host "  Miss: $candidate"
        }
    }
    if (-not $found) {
        Write-Host "  FAILED to find image for $($coin.Name)"
    }
}
