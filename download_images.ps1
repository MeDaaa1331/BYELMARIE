$dest = 'c:\Users\bican\Desktop\BYELMARIE\images'
New-Item -ItemType Directory -Force -Path $dest | Out-Null
$hdrs = @{
  'User-Agent' = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36';
  'Referer' = 'https://www.byelmarie.com/'
}

function Download-Image {
  param(
    [string]$url,
    [string]$filename
  )
  $out = Join-Path $dest $filename
  try {
    Invoke-WebRequest -Uri $url -OutFile $out -Headers $hdrs -TimeoutSec 20 -ErrorAction Stop
    $sz = (Get-Item $out).Length
    Write-Host "SUCCESS: $filename ($([math]::Round($sz/1KB, 1)) KB)"
  } catch {
    Write-Host "FAILED: $filename - $_"
  }
}

Write-Host "Downloading real product images from byelmarie.com..."
Download-Image 'https://cdn.myshoptet.com/usr/www.byelmarie.com/user/shop/big/66_1763282436-1f9d7469-5ea7-40cf-843e-9cef02e797bc.png?69198e37' 'serum-na-rasy.png'
Download-Image 'https://cdn.myshoptet.com/usr/www.byelmarie.com/user/shop/big/60-2_skoleni-a-pomucky-rollcupping.png?69199e75' 'skoleni-rollcupping.png'
Download-Image 'https://cdn.myshoptet.com/usr/www.byelmarie.com/user/shop/big/51_1763290399-f5f61af5-0984-4ac0-a1a9-9c8aae1d0983.png?6919adb4' 'skoleni-vibroslimfit.png'
Download-Image 'https://cdn.myshoptet.com/usr/www.byelmarie.com/user/shop/big/57-1_valecky-set.png?69725139' 'valecky-celslimroll.png'
Download-Image 'https://cdn.myshoptet.com/usr/www.byelmarie.com/user/shop/big/72_ems-prosuit.jpg?69ce38f6' 'ems-prosuit.jpg'
Download-Image 'https://cdn.myshoptet.com/usr/www.byelmarie.com/user/banners/2.png?69d767b0' 'ems-prosuit-banner.png'
