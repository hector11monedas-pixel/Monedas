Add-Type -AssemblyName System.Drawing

function Create-CoinImage ($imgSource, $destPath, $x1, $y1, $x2, $y2, $w, $h) {
    if (-not (Test-Path $imgSource)) { return }
    $srcImg = [System.Drawing.Image]::FromFile($imgSource)
    # Create a 2x1 grid image
    $destImg = New-Object System.Drawing.Bitmap($w * 2, $h)
    $g = [System.Drawing.Graphics]::FromImage($destImg)
    $g.Clear([System.Drawing.Color]::White)
    
    # Draw Obverse
    $g.DrawImage($srcImg, (New-Object System.Drawing.Rectangle(0, 0, $w, $h)), (New-Object System.Drawing.Rectangle($x1, $y1, $w, $h)), [System.Drawing.GraphicsUnit]::Pixel)
    # Draw Reverse
    $g.DrawImage($srcImg, (New-Object System.Drawing.Rectangle($w, 0, $w, $h)), (New-Object System.Drawing.Rectangle($x2, $y2, $w, $h)), [System.Drawing.GraphicsUnit]::Pixel)
    
    $destImg.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $g.Dispose()
    $destImg.Dispose()
    $srcImg.Dispose()
    Write-Output "Created: $destPath"
}

$outDir = 'c:\APP- antigravity\Monedas\public\img\coins\spain\local'
if (-not (Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir -Force }

# IMG_20260212_174253.jpg (Asturias / Santander)
$src1 = 'C:\Fotos monedas\IMG_20260212_174253.jpg'
# Asturias 50 Cts
Create-CoinImage $src1 "$outDir\asturias-50-centimos-1937.jpg" 450 350 1250 350 600 600
# Asturias 1 Peseta
Create-CoinImage $src1 "$outDir\asturias-1-peseta-1937.jpg" 400 1000 1200 1000 650 650
# Asturias 2 Pesetas
Create-CoinImage $src1 "$outDir\asturias-2-pesetas-1937.jpg" 350 1700 1250 1700 700 700

# Santander 50 Cts
Create-CoinImage $src1 "$outDir\santander-50-centimos-1937.jpg" 550 2520 1250 2520 500 500
# Santander 1 Peseta
Create-CoinImage $src1 "$outDir\santander-1-peseta-1937.jpg" 450 3100 1250 3100 650 650

# IMG_20260212_174305.jpg (Menorca / Euzkadi / L'Ametlla)
$src2 = 'C:\Fotos monedas\IMG_20260212_174305.jpg'
# Menorca (Representative crop - using for 1 Pta/2.50 Ptas placeholder)
Create-CoinImage $src2 "$outDir\menorca-1-pta-1937.jpg" 550 300 1450 300 700 700
# Euzkadi 2 Pesetas (representative)
Create-CoinImage $src2 "$outDir\euskadi-2-pesetas-1937.jpg" 500 1500 1450 1500 750 750
# L'Ametlla (representative)
Create-CoinImage $src2 "$outDir\ametlla-1-pta.jpg" 550 2600 1400 2600 800 800

# IMG_20260212_174311.jpg (Arenys / Ibi)
$src3 = 'C:\Fotos monedas\IMG_20260212_174311.jpg'
# Arenys (representative)
Create-CoinImage $src3 "$outDir\arenys-1-pta.jpg" 400 350 1350 350 700 700
# Ibi 25 Cts (representative)
Create-CoinImage $src3 "$outDir\ibi-25-cts-1937.jpg" 400 1750 1450 1750 800 800
