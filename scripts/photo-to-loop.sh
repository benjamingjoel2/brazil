#!/usr/bin/env bash
# Turn a still photo into a gentle, seamless background loop (slow zoom or pan,
# played forward then backward), then encode it with encode-video.sh.
#   scripts/photo-to-loop.sh <image> <name> [zoom|pan-right|pan-left] [crop-y 0..1] [seconds-each-way]
set -euo pipefail
img="$1"; name="$2"; mode="${3:-zoom}"; cy="${4:-0.5}"; secs="${5:-7}"
here="$(cd "$(dirname "$0")" && pwd)"
tmp="$(mktemp -d)"; trap 'rm -rf "$tmp"' EXIT
frames=$((secs * 24))
# Work at 4K so the sub-pixel motion stays smooth, then let zoompan output 1080p.
base="scale=3840:-2,crop=3840:2160:0:(ih-2160)*${cy}"
case "$mode" in
  zoom)      zp="zoompan=z='1+0.10*on/${frames}':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)'" ;;
  pan-right) zp="zoompan=z=1.14:x='(iw-iw/zoom)*on/${frames}':y='ih/2-(ih/zoom/2)'" ;;
  pan-left)  zp="zoompan=z=1.14:x='(iw-iw/zoom)*(1-on/${frames})':y='ih/2-(ih/zoom/2)'" ;;
  *) echo "unknown mode $mode" >&2; exit 1 ;;
esac
ffmpeg -nostdin -loglevel error -loop 1 -i "$img" \
  -vf "${base},${zp}:d=${frames}:s=1920x1080:fps=24,setsar=1" \
  -frames:v "$frames" -c:v libx264 -crf 14 -preset veryfast -pix_fmt yuv420p -y "$tmp/fwd.mp4"
ffmpeg -nostdin -loglevel error -i "$tmp/fwd.mp4" -vf reverse -c:v libx264 -crf 14 -preset veryfast -pix_fmt yuv420p -y "$tmp/rev.mp4"
printf "file '%s'\nfile '%s'\n" "$tmp/fwd.mp4" "$tmp/rev.mp4" > "$tmp/list.txt"
ffmpeg -nostdin -loglevel error -f concat -safe 0 -i "$tmp/list.txt" -c copy -y "$tmp/loop.mp4"
"$here/encode-video.sh" "$tmp/loop.mp4" "$name" 0 $((secs * 2))
