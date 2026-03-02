Add-Type -AssemblyName System.Drawing

function Crop-Image ($source, $dest, $x, $y, $w, $h) {
    $srcImg = [System.Drawing.Image]::FromFile($source)
    $destImg = New-Object System.Drawing.Bitmap($w, $h)
    $g = [System.Drawing.Graphics]::FromImage($destImg)
    $g.DrawImage($srcImg, (New-Object System.Drawing.Rectangle(0, 0, $w, $h)), (New-Object System.Drawing.Rectangle($x, $y, $w, $h)), [System.Drawing.GraphicsUnit]::Pixel)
    $destImg.Save($dest, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $g.Dispose()
    $destImg.Dispose()
    $srcImg.Dispose()
}

$source = 'C:\Fotos monedas\IMG_20260212_174253.jpg'
$outDir = 'c:\APP- antigravity\Monedas\public\img\coins\spain\local'

# Asturias 1 Pta (test)
Crop-Image $source "$outDir\asturias-1-peseta-1937-obv.jpg" 400 1000 600 600
Crop-Image $source "$outDir\asturias-1-peseta-1937-rev.jpg" 1200 1000 600 600
