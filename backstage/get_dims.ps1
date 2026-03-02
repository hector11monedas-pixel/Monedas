Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile('C:\Fotos monedas\IMG_20260212_174253.jpg')
Write-Output "WIDTH:$($img.Width)"
Write-Output "HEIGHT:$($img.Height)"
$img.Dispose()
