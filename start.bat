@echo off
REM ─────────────────────────────────────────────────────────────
REM  LUMIÈRE – dev launcher (Windows)
REM  Usage:
REM    start.bat              → build then start on port 3500
REM    start.bat --no-build   → skip build, start directly
REM    start.bat --port 4000  → custom port
REM  Press Ctrl+C to stop the server.
REM ─────────────────────────────────────────────────────────────

setlocal enabledelayedexpansion

cd /d "%~dp0"

set PORT=3500
set SKIP_BUILD=0

REM ── Parse args ───────────────────────────────────────────────
:parse_args
if "%~1"=="" goto args_done
if "%~1"=="--no-build" (
    set SKIP_BUILD=1
    shift
    goto parse_args
)
if "%~1"=="--port" (
    set PORT=%~2
    shift
    shift
    goto parse_args
)
echo Unknown option: %~1
exit /b 1

:args_done

REM ── Header ───────────────────────────────────────────────────
cls
echo.
echo   ┌──────────────────────────────────┐
echo   │   LUMIÈRE  –  Restaurant Site    │
echo   └──────────────────────────────────┘
echo.

REM ── Build ────────────────────────────────────────────────────
if %SKIP_BUILD% equ 0 (
    echo ▶ Building production bundle…
    call npm run build
    if !errorlevel! neq 0 (
        echo ✗ Build failed. Fix errors above, then retry.
        exit /b 1
    )
    echo ✓ Build complete.
    echo.
) else (
    echo ⚡ Skipping build (--no-build)
    echo.
)

REM ── Get local IP ────────────────────────────────────────────
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| find "IPv4"') do (
    set LOCAL_IP=%%a
    goto ip_found
)
:ip_found
if defined LOCAL_IP set LOCAL_IP=!LOCAL_IP:~1!

REM ── Start ───────────────────────────────────────────────────
echo ▶ Starting server on port %PORT% (all interfaces)…
echo.

set PORT=%PORT%
call npm start -- -H 0.0.0.0

echo.
echo ✓ Server stopped.
exit /b 0
