Add-Type -AssemblyName System.Drawing

$sourceDir = "public\img\coins\2004"
$targetWidth = 300

# Using explicit path joining and filter
$files = Get-ChildItem -Path $sourceDir | Where-Object { $_.Extension -match "\.(png|jpg|jpeg)" }

if ($files.Count -eq 0) {
    Write-Host "No files found in $sourceDir"
}

foreach ($file in $files) {
    $path = $file.FullName
    Write-Host "Optimizing $file..."
    
    try {
        # Load image (lock it)
        $bytes = [System.IO.File]::ReadAllBytes($path)
        $ms = New-Object System.IO.MemoryStream(, $bytes)
        $img = [System.Drawing.Image]::FromStream($ms)
        
        # Calculate new size
        $rate = $targetWidth / $img.Width
        $newHeight = [int]($img.Height * $rate)
        
        # Create new bitmap
        $newImg = new-object System.Drawing.Bitmap($targetWidth, $newHeight)
        $graph = [System.Drawing.Graphics]::FromImage($newImg)
        $graph.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graph.DrawImage($img, 0, 0, $targetWidth, $newHeight)
        
        # Dispose original so we can overwrite file
        $img.Dispose()
        $ms.Dispose()
        
        # Save
        if ($file.Extension -eq ".png") {
            $newImg.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
        }
        else {
            $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
            $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 85)
            $jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
            $newImg.Save($path, $jpegCodec, $encoderParams)
        }
        
        $newImg.Dispose()
        $graph.Dispose()
        Write-Host "✅ Done: $($file.Name)"
    }
    catch {
        Write-Host "❌ Error optimizing $($file.Name): $_"
    }
}
