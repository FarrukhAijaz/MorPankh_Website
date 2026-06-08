# ─────────────────────────────────────────────────────────────
#  LUMIÈRE – dev launcher (Windows PowerShell)
#  Usage:
#    .\start.ps1              → build then start on port 3500
#    .\start.ps1 -NoBuild     → skip build, start directly
#    .\start.ps1 -Port 4000   → custom port
#  Press Ctrl+C to stop the server.
# ─────────────────────────────────────────────────────────────

param(
    [switch]$NoBuild,
    [int]$Port = 3500
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

# Set location to script directory
Set-Location $PSScriptRoot

# Color definitions
$colors = @{
    Red    = [System.ConsoleColor]::Red
    Green  = [System.ConsoleColor]::Green
    Yellow = [System.ConsoleColor]::Yellow
    Cyan   = [System.ConsoleColor]::Cyan
    White  = [System.ConsoleColor]::White
}

function Write-Header {
    Clear-Host
    Write-Host ""
    Write-Host "  ┌──────────────────────────────────┐" -ForegroundColor $colors.Cyan
    Write-Host "  │   LUMIÈRE  –  Restaurant Site    │" -ForegroundColor $colors.Cyan
    Write-Host "  └──────────────────────────────────┘" -ForegroundColor $colors.Cyan
    Write-Host ""
}

function Write-Step {
    param([string]$Message)
    Write-Host "▶ $Message" -ForegroundColor $colors.Cyan
}

function Write-Success {
    param([string]$Message)
    Write-Host "✓ $Message" -ForegroundColor $colors.Green
}

function Write-Error-Custom {
    param([string]$Message)
    Write-Host "✗ $Message" -ForegroundColor $colors.Red
}

function Write-Warning-Custom {
    param([string]$Message)
    Write-Host "⚡ $Message" -ForegroundColor $colors.Yellow
}

# ── Header ──────────────────────────────────────────────────────
Write-Header

# ── Build ───────────────────────────────────────────────────────
if (-not $NoBuild) {
    Write-Step "Building production bundle…"
    & npm run build
    if ($LASTEXITCODE -ne 0) {
        Write-Error-Custom "Build failed. Fix errors above, then retry."
        exit 1
    }
    Write-Success "Build complete."
    Write-Host ""
}
else {
    Write-Warning-Custom "Skipping build (-NoBuild)"
    Write-Host ""
}

# ── Get local IP ────────────────────────────────────────────────
$ipAddress = (Get-NetIPAddress -AddressFamily IPv4 -PrefixLength 24 | 
    Where-Object { $_.IPAddress -notmatch "127.0.0.1" } | 
    Select-Object -First 1).IPAddress

# ── Start ───────────────────────────────────────────────────────
Write-Step "Starting server on port $Port (all interfaces)…"
Write-Host ""

$env:PORT = $Port
& npm start -- -H 0.0.0.0

Write-Host ""
Write-Success "Server stopped."
exit 0
