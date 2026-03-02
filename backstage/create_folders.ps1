$base = 'c:\APP- antigravity\Monedas\public\img\coins\spain\local'
$councils = 'asturias', 'euskadi', 'santander', 'menorca', 'nulles', 'olot', 'arenys', 'ibi', 'lora', 'arahal', 'marchena', 'puebla', 'cazalla', 'segarra', 'ametlla'

if (-not (Test-Path $base)) {
    New-Item -ItemType Directory -Path $base -Force
}

foreach ($c in $councils) {
    $path = Join-Path $base $c
    if (-not (Test-Path $path)) {
        New-Item -ItemType Directory -Path $path -Force
        Write-Host "Created: $path"
    }
    else {
        Write-Host "Already exists: $path"
    }
}
