param([int]$Port = 8123, [string]$Root = "c:\Users\danoc\Documents\projects\WebSites\AnnaPh")
$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Web
$mime = @{
  ".html"="text/html; charset=utf-8"; ".htm"="text/html; charset=utf-8";
  ".css"="text/css; charset=utf-8"; ".js"="application/javascript; charset=utf-8";
  ".json"="application/json; charset=utf-8"; ".xml"="application/xml; charset=utf-8";
  ".txt"="text/plain; charset=utf-8"; ".jpg"="image/jpeg"; ".jpeg"="image/jpeg";
  ".png"="image/png"; ".gif"="image/gif"; ".webp"="image/webp"; ".svg"="image/svg+xml";
  ".mp4"="video/mp4"; ".ico"="image/x-icon"
}
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")
$listener.Start()
Write-Host "Serving $Root on http://localhost:$Port/"
while ($listener.IsListening) {
  try {
    $ctx = $listener.GetContext()
    $rel = [System.Web.HttpUtility]::UrlDecode($ctx.Request.Url.AbsolutePath).TrimStart("/")
    if ([string]::IsNullOrEmpty($rel)) { $rel = "index.html" }
    $path = Join-Path $Root $rel
    if (Test-Path $path -PathType Leaf) {
      $ext = [System.IO.Path]::GetExtension($path).ToLower()
      $ct = $mime[$ext]; if (-not $ct) { $ct = "application/octet-stream" }
      $bytes = [System.IO.File]::ReadAllBytes($path)
      $ctx.Response.ContentType = $ct
      $ctx.Response.ContentLength64 = $bytes.Length
      $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
      $ctx.Response.StatusCode = 404
      $b = [System.Text.Encoding]::UTF8.GetBytes("404: $rel")
      $ctx.Response.OutputStream.Write($b, 0, $b.Length)
    }
    $ctx.Response.OutputStream.Close()
  } catch { }
}
