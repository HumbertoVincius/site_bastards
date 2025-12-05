# Script para baixar imagens do site original
$ErrorActionPreference = "Continue"

# URLs base do site
$baseUrl = "https://bastardsbrewery.com.br"

# Criar pastas se nao existirem
$folders = @(
    "public\images\cervejas",
    "public\images\fundadores",
    "public\images\pubs",
    "public\images\outros"
)

foreach ($folder in $folders) {
    if (-not (Test-Path $folder)) {
        New-Item -ItemType Directory -Path $folder -Force | Out-Null
    }
}

Write-Host "`n=== Download de Imagens do Site Original ===" -ForegroundColor Cyan
Write-Host "`nEste script tentara baixar imagens do site original." -ForegroundColor Yellow
Write-Host "Se algumas URLs nao funcionarem, voce pode baixar manualmente usando:" -ForegroundColor Yellow
Write-Host "1. https://extract.pics/ (cole: $baseUrl)" -ForegroundColor White
Write-Host "2. DevTools do navegador (F12 -> Network -> Img)" -ForegroundColor White
Write-Host "`nTentando baixar imagens comuns...`n" -ForegroundColor Green

# Funcao para baixar imagem
function Download-Image {
    param(
        [string]$url,
        [string]$outputPath
    )
    
    try {
        $outputDir = Split-Path $outputPath -Parent
        if (-not (Test-Path $outputDir)) {
            New-Item -ItemType Directory -Path $outputDir -Force | Out-Null
        }
        
        Invoke-WebRequest -Uri $url -OutFile $outputPath -ErrorAction Stop
        Write-Host "OK Baixado: $outputPath" -ForegroundColor Green
        return $true
    }
    catch {
        Write-Host "ERRO ao baixar: $url" -ForegroundColor Red
        return $false
    }
}

# Lista de possiveis URLs de imagens
$images = @(
    @{url = "$baseUrl/wp-content/uploads/logo.png"; path = "public\images\logo.png"},
    @{url = "$baseUrl/images/logo.png"; path = "public\images\logo.png"},
    @{url = "$baseUrl/assets/logo.png"; path = "public\images\logo.png"}
)

$downloaded = 0
$failed = 0

foreach ($img in $images) {
    if (Download-Image -url $img.url -outputPath $img.path) {
        $downloaded++
    } else {
        $failed++
    }
}

Write-Host "`n=== Resumo ===" -ForegroundColor Cyan
Write-Host "Baixadas: $downloaded" -ForegroundColor Green
Write-Host "Falhas: $failed" -ForegroundColor Red
Write-Host "`nPara baixar mais imagens, use https://extract.pics/ e cole: $baseUrl" -ForegroundColor Yellow
