Add-Type -AssemblyName System.Drawing
$ErrorActionPreference = "Stop"
$srcRoot = "c:\Users\danoc\Documents\projects\WebSites\AnnaPh\assets"
$dstRoot = "c:\Users\danoc\Documents\projects\WebSites\AnnaPh\assets\web"
$folders = "portrait-women","portrait-men","portrait-men-art","art","outdoor","family","children","pregnancy","lovestory"
$maxEdge = 1600
$quality = 78L

$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
$ep = New-Object System.Drawing.Imaging.EncoderParameters 1
$ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, $quality)

function Apply-Exif($img){
  try{
    if($img.PropertyIdList -contains 274){
      $o = $img.GetPropertyItem(274).Value[0]
      switch($o){
        3 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipNone) }
        6 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipNone) }
        8 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipNone) }
      }
    }
  }catch{}
}

$count = 0
foreach($f in $folders){
  $sd = Join-Path $srcRoot $f
  $dd = Join-Path $dstRoot $f
  New-Item -ItemType Directory -Force -Path $dd | Out-Null
  Get-ChildItem $sd -File | Where-Object { $_.Extension -match '(?i)\.(jpg|jpeg)' } | ForEach-Object {
    $img = [System.Drawing.Image]::FromFile($_.FullName)
    Apply-Exif $img
    $w = $img.Width; $h = $img.Height
    $scale = [Math]::Min(1.0, $maxEdge / [Math]::Max($w,$h))
    $nw = [int][Math]::Round($w*$scale); $nh = [int][Math]::Round($h*$scale)
    $bmp = New-Object System.Drawing.Bitmap $nw, $nh
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.DrawImage($img, 0, 0, $nw, $nh)
    $outPath = Join-Path $dd $_.Name
    $bmp.Save($outPath, $codec, $ep)
    $g.Dispose(); $bmp.Dispose(); $img.Dispose()
    $count++
  }
  Write-Host "done $f"
}
Write-Host "TOTAL $count images"
