#!/usr/bin/env bash
# Encode a background video for the web: silent, looping, small.
#   scripts/encode-video.sh <input> <name> [start-seconds] [max-seconds]
# Writes public/media/video/<name>-720.mp4 (desktop), <name>-540.mp4 (mobile)
# and <name>.jpg (poster, first frame of the clip).
set -euo pipefail
in="$1"; name="$2"; start="${3:-0}"; dur="${4:-12}"
out="$(dirname "$0")/../public/media/video"
mkdir -p "$out"
common=(-ss "$start" -t "$dur" -i "$in" -an -c:v libx264 -preset slow -profile:v high -pix_fmt yuv420p -movflags +faststart -g 48 -y)
ffmpeg -nostdin -loglevel error "${common[@]:0:6}" -vf "scale=1280:-2,fps=24" "${common[@]:6}" -crf 30 -maxrate 1000k -bufsize 2000k "$out/$name-720.mp4"
ffmpeg -nostdin -loglevel error "${common[@]:0:6}" -vf "scale=960:-2,fps=24" "${common[@]:6}" -crf 32 -maxrate 550k -bufsize 1100k "$out/$name-540.mp4"
ffmpeg -nostdin -loglevel error -ss "$start" -i "$in" -frames:v 1 -vf "scale='min(1920,iw)':-2" -q:v 4 -y "$out/$name.jpg"
ls -l "$out/$name"-*.mp4 "$out/$name.jpg" | awk '{printf "%s %dKB\n", $9, $5/1024}'
