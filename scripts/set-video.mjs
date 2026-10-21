// Point a video key in data/media.json at self-hosted files from scripts/encode-video.sh.
//   node scripts/set-video.mjs <key> <name> [credit] [page] [alt]
import { readFileSync, writeFileSync } from "node:fs";
const [key, name, credit, page, alt] = process.argv.slice(2);
const file = new URL("../data/media.json", import.meta.url);
const m = JSON.parse(readFileSync(file, "utf8"));
const prev = m.videos[key] ?? {};
m.videos[key] = {
  ...prev,
  src: `/media/video/${name}-720.mp4`,
  srcMobile: `/media/video/${name}-540.mp4`,
  poster: `/media/video/${name}.jpg`,
  ...(credit ? { credit } : {}),
  ...(page ? { page } : {}),
  ...(alt ? { alt } : {}),
};
writeFileSync(file, JSON.stringify(m, null, 1) + "\n");
console.log(key, "->", m.videos[key].src);
