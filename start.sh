#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────
#  LUMIÈRE – dev launcher
#  Usage:
#    ./start.sh          → build then start on port 3500
#    ./start.sh --no-build  → skip build, start directly
#    ./start.sh --port 4000 → custom port
#  Binds to 0.0.0.0 — accessible on local network.
#  Press Ctrl+C to stop the server.
# ─────────────────────────────────────────────────────────────

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

PORT=3500
SKIP_BUILD=false

# ── Parse args ───────────────────────────────────────────────
while [[ $# -gt 0 ]]; do
  case "$1" in
    --no-build)  SKIP_BUILD=true; shift ;;
    --port)      PORT="$2"; shift 2 ;;
    *) echo "Unknown option: $1"; exit 1 ;;
  esac
done

# ── Colours ──────────────────────────────────────────────────
RED='\033[0;31m'; GREEN='\033[0;32m'; YELLOW='\033[1;33m'
CYAN='\033[0;36m'; BOLD='\033[1m'; RESET='\033[0m'

SERVER_PID=""

cleanup() {
  echo -e "\n${YELLOW}Shutting down LUMIÈRE…${RESET}"
  if [[ -n "$SERVER_PID" ]] && kill -0 "$SERVER_PID" 2>/dev/null; then
    kill "$SERVER_PID"
    wait "$SERVER_PID" 2>/dev/null || true
  fi
  echo -e "${GREEN}Server stopped. Goodbye!${RESET}"
  exit 0
}

trap cleanup INT TERM

# ── Header ───────────────────────────────────────────────────
echo -e "${BOLD}${CYAN}"
echo "  ┌──────────────────────────────────┐"
echo "  │   LUMIÈRE  –  Restaurant Site    │"
echo "  └──────────────────────────────────┘"
echo -e "${RESET}"

# ── Build ────────────────────────────────────────────────────
if [[ "$SKIP_BUILD" == false ]]; then
  echo -e "${CYAN}▶ Building production bundle…${RESET}"
  if ! npm run build; then
    echo -e "${RED}✗ Build failed. Fix errors above, then retry.${RESET}"
    exit 1
  fi
  echo -e "${GREEN}✓ Build complete.${RESET}\n"
else
  echo -e "${YELLOW}⚡ Skipping build (--no-build)${RESET}\n"
fi

# ── Detect local IP ─────────────────────────────────────────
LOCAL_IP=$(hostname -I 2>/dev/null | awk '{print $1}')

# ── Start ────────────────────────────────────────────────────
echo -e "${CYAN}▶ Starting server on port ${PORT} (all interfaces)…${RESET}"
PORT="$PORT" npm start -- -H 0.0.0.0 &
SERVER_PID=$!

# Give the server a moment to bind
sleep 2

if ! kill -0 "$SERVER_PID" 2>/dev/null; then
  echo -e "${RED}✗ Server failed to start.${RESET}"
  exit 1
fi

echo -e "${GREEN}✓ Server is running!${RESET}"
echo -e "  ${BOLD}→ Local:   http://localhost:${PORT}${RESET}"
if [[ -n "$LOCAL_IP" ]]; then
  echo -e "  ${BOLD}→ Network: http://${LOCAL_IP}:${PORT}${RESET}  ${YELLOW}(share this with devices on the same Wi-Fi)${RESET}"
fi
echo -e "\n  Press ${BOLD}Ctrl+C${RESET} to stop.\n"

# Wait until user interrupts
wait "$SERVER_PID"
