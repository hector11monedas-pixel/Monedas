Add-Type -AssemblyName System.Drawing

function Create-CoinImage {
    param(
        [string]$imgSource,
        [string]$destPath,
        [int]$x1,
        [int]$y1,
        [int]$x2,
        [int]$y2,
        [int]$w,
        [int]$h
    )
    
    if (-not (Test-Path $imgSource)) { 
        Write-Warning "Source not found: $imgSource"
        return 
    }
    
    $dir = Split-Path $destPath
    if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }
    
    $srcImg = [System.Drawing.Image]::FromFile($imgSource)
    $destImg = New-Object System.Drawing.Bitmap(($w * 2), $h)
    $g = [System.Drawing.Graphics]::FromImage($destImg)
    $g.Clear([System.Drawing.Color]::White)
    
    $srcRect1 = New-Object System.Drawing.Rectangle($x1, $y1, $w, $h)
    $destRect1 = New-Object System.Drawing.Rectangle(0, 0, $w, $h)
    $g.DrawImage($srcImg, $destRect1, $srcRect1, [System.Drawing.GraphicsUnit]::Pixel)
    
    $srcRect2 = New-Object System.Drawing.Rectangle($x2, $y2, $w, $h)
    $destRect2 = New-Object System.Drawing.Rectangle($w, 0, $w, $h)
    $g.DrawImage($srcImg, $destRect2, $srcRect2, [System.Drawing.GraphicsUnit]::Pixel)
    
    $destImg.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    
    $g.Dispose()
    $destImg.Dispose()
    $srcImg.Dispose()
    Write-Output "Created: $destPath"
}

$baseDir = 'c:\APP- antigravity\Monedas\public\img\coins\spain\local'

# IMG_20260212_174253.jpg (Asturias / Santander)
$src1 = 'C:\Fotos monedas\IMG_20260212_174253.jpg'
Create-CoinImage -imgSource $src1 -destPath "$baseDir\asturias\50cts.jpg" -x1 450 -y1 350 -x2 1250 -y2 350 -w 600 -h 600
Create-CoinImage -imgSource $src1 -destPath "$baseDir\asturias\1pta.jpg" -x1 400 -y1 1000 -x2 1200 -y2 1000 -w 650 -h 650
Create-CoinImage -imgSource $src1 -destPath "$baseDir\asturias\2ptas.jpg" -x1 350 -y1 1700 -x2 1250 -y2 1700 -w 700 -h 700
Create-CoinImage -imgSource $src1 -destPath "$baseDir\santander\50cts.jpg" -x1 550 -y1 2520 -x2 1250 -y2 2520 -w 500 -h 500
Create-CoinImage -imgSource $src1 -destPath "$baseDir\santander\1pta.jpg" -x1 450 -y1 3100 -x2 1250 -y2 3100 -w 650 -h 650

# IMG_20260212_174305.jpg (Menorca / Euzkadi / L'Ametlla)
$src2 = 'C:\Fotos monedas\IMG_20260212_174305.jpg'
Create-CoinImage -imgSource $src2 -destPath "$baseDir\menorca\1pta.jpg" -x1 550 -y1 300 -x2 1450 -y2 300 -w 700 -h 700
Create-CoinImage -imgSource $src2 -destPath "$baseDir\euskadi\2ptas.jpg" -x1 500 -y1 1500 -x2 1450 -y2 1500 -w 750 -h 750
Create-CoinImage -imgSource $src2 -destPath "$baseDir\ametlla\1pta.jpg" -x1 550 -y1 2600 -x2 1400 -y2 2600 -w 800 -h 800

# IMG_20260212_174311.jpg (Arenys / Ibi)
$src3 = 'C:\Fotos monedas\IMG_20260212_174311.jpg'
Create-CoinImage -imgSource $src3 -destPath "$baseDir\arenys\1pta.jpg" -x1 400 -y1 350 -x2 1350 -y2 350 -w 700 -h 700
Create-CoinImage -imgSource $src3 -destPath "$baseDir\ibi\25cts.jpg" -x1 400 -y1 1750 -x2 1450 -y2 1750 -w 800 -h 800
