// Builds data/brazil-map.json: Brazil outline (Natural Earth 1:50m, public domain,
// via world-atlas) and simplified biome regions (hand-drawn approximations of the
// IBGE biome boundaries, clipped to the outline in the browser with a clipPath).
import { readFileSync, writeFileSync } from "node:fs";
import { feature } from "topojson-client";

const topo = JSON.parse(readFileSync(new URL("../node_modules/world-atlas/countries-50m.json", import.meta.url)));
const brazil = feature(topo, topo.objects.countries).features.find((f) => f.id === "076");

// Equirectangular projection with cos(mid-latitude) correction.
const B = { west: -74.2, east: -34.6, north: 5.4, south: -33.9 };
const k = Math.cos((-14 * Math.PI) / 180);
const W = 1000;
const scale = W / ((B.east - B.west) * k);
const H = Math.round((B.north - B.south) * scale);
const project = ([lng, lat]) => [+((lng - B.west) * k * scale).toFixed(1), +((B.north - lat) * scale).toFixed(1)];
const ringPath = (ring) => "M" + ring.map(project).map((p) => p.join(",")).join("L") + "Z";

const polys = brazil.geometry.type === "Polygon" ? [brazil.geometry.coordinates] : brazil.geometry.coordinates;
// Keep the mainland and sizeable islands (Marajó, Noronha etc. are tiny at this scale but keep a few).
const outline = polys.map((p) => ringPath(p[0])).join("");

// [lng, lat] approximations. Order matters: later layers paint over earlier ones.
const biomes = {
  amazon: [[-75,6],[-40,6],[-44.3,-2.4],[-44.5,-3],[-46,-4.5],[-47.5,-6.5],[-49,-8],[-50.5,-10],[-52.5,-11.5],[-55,-12],[-57,-13],[-58.5,-13.5],[-60.5,-14],[-61.5,-15],[-75,-15]],
  cerrado: [[-61.5,-15],[-60.5,-14],[-58.5,-13.5],[-57,-13],[-55,-12],[-52.5,-11.5],[-50.5,-10],[-49,-8],[-47.5,-6.5],[-46,-4.5],[-44.5,-3],[-44.3,-2.4],[-42.8,-1.8],[-42.4,-3.5],[-42.5,-5],[-42.5,-7.5],[-43.5,-9.5],[-44.5,-10.5],[-44,-13],[-43.5,-15.5],[-44.5,-17.5],[-45,-19.5],[-46.5,-21],[-48,-22.5],[-50.5,-23],[-53,-22.5],[-55.5,-22.8],[-55.8,-24.5],[-58.2,-24],[-58,-22.5],[-58.4,-19],[-60,-16.2]],
  caatinga: [[-42.8,-1.8],[-36,-1.5],[-34,-4.6],[-35.6,-5.4],[-35.8,-6.5],[-36,-8.5],[-36.8,-9.8],[-38.5,-11.5],[-39.8,-13.5],[-40.5,-15],[-42,-16],[-43.5,-15.5],[-44,-13],[-44.5,-10.5],[-43.5,-9.5],[-42.5,-7.5],[-42.5,-5],[-42.4,-3.5]],
  "atlantic-forest": [[-34,-4.6],[-30,-4.6],[-30,-31],[-50,-30.2],[-51.5,-30],[-54,-29.6],[-56.8,-28.8],[-57,-27.5],[-55,-26.5],[-54.6,-25.5],[-54.3,-24],[-55.5,-22.8],[-53,-22.5],[-50.5,-23],[-48,-22.5],[-46.5,-21],[-45,-19.5],[-44.5,-17.5],[-43.5,-15.5],[-42,-16],[-40.5,-15],[-39.8,-13.5],[-38.5,-11.5],[-36.8,-9.8],[-36,-8.5],[-35.8,-6.5],[-35.6,-5.4]],
  pampa: [[-58.5,-28.8],[-56.8,-28.8],[-54,-29.6],[-51.5,-30],[-50,-30.2],[-48,-35],[-58.5,-35]],
  pantanal: [[-58.1,-16.1],[-56.8,-15.6],[-55.6,-16.4],[-55.2,-17.6],[-54.9,-19.2],[-55.6,-20.6],[-57,-22.1],[-57.9,-21.6],[-57.8,-20.2],[-58.2,-18.6]],
};
const biomePaths = Object.fromEntries(Object.entries(biomes).map(([k, ring]) => [k, ringPath(ring)]));

writeFileSync(
  new URL("../data/brazil-map.json", import.meta.url),
  JSON.stringify({ width: W, height: H, bounds: B, k, scale, outline, biomes: biomePaths, source: "Outline: Natural Earth 1:50m (public domain). Biome regions: simplified approximation of IBGE boundaries." }),
);
console.log("ok", W, H, outline.length);
