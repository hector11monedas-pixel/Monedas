$baseUrl = "https://en.numista.com/catalogue/photos"
$destDir = "c:\APP- antigravity\Monedas\public\img\coins\2007"
$userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"

# Ensure directory exists
if (-not (Test-Path -Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir -Force
}

$coins = @(
    @{ Name="monaco_2007_grace"; Url="https://en.numista.com/catalogue/photos/monaco/1093-original.jpg"; Output="monaco.jpg" },
    @{ Name="san_marino_2007_garibaldi"; Url="https://en.numista.com/catalogue/photos/san_marin/447-original.jpg"; Output="san_marino.jpg" },
    @{ Name="finland_2007_tor"; Url="https://en.numista.com/catalogue/photos/finlande/2205-original.jpg"; Output="treaty_finland.jpg" },
    @{ Name="greece_2007_tor"; Url="https://en.numista.com/catalogue/photos/grece/2206-original.jpg"; Output="treaty_greece.jpg" },
    @{ Name="luxembourg_2007_tor"; Url="https://en.numista.com/catalogue/photos/luxembourg/2212-original.jpg"; Output="treaty_luxembourg.jpg" },
    @{ Name="slovenia_2007_tor"; Url="https://en.numista.com/catalogue/photos/slovenie/2208-original.jpg"; Output="treaty_slovenia.jpg" },
    @{ Name="germany_2007_tor"; Url="https://en.numista.com/catalogue/photos/allemagne/2162-original.jpg"; Output="treaty_germany.jpg" }
)

foreach ($coin in $coins) {
    $outputPath = Join-Path -Path $destDir -ChildPath $coin.Output
    Write-Host "Downloading $($coin.Name) to $outputPath..."
    try {
        Invoke-WebRequest -Uri $coin.Url -OutFile $outputPath -UserAgent $userAgent
        Write-Host "Success!" -ForegroundColor Green
    }
    catch {
        Write-Host "Failed to download $($coin.Name) from $($coin.Url). Error: $_" -ForegroundColor Red
        # Try alternative folder names/IDs if needed (e.g. english)
        if ($coin.Url -match "finlande") {
            $altUrl = $coin.Url -replace "finlande", "finland"
            Write-Host "Trying alternative: $altUrl"
            try { Invoke-WebRequest -Uri $altUrl -OutFile $outputPath -UserAgent $userAgent; Write-Host "Success!" -ForegroundColor Green } catch { Write-Host "Failed." }
        }
        if ($coin.Url -match "grece") {
            $altUrl = $coin.Url -replace "grece", "greece"
            Write-Host "Trying alternative: $altUrl"
            try { Invoke-WebRequest -Uri $altUrl -OutFile $outputPath -UserAgent $userAgent; Write-Host "Success!" -ForegroundColor Green } catch { Write-Host "Failed." }
        }
    }
}
