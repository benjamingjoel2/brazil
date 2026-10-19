import map from "@/data/brazil-map.json";

/** Projects [lat, lng] to the SVG coordinate space of data/brazil-map.json. */
export function project(lat: number, lng: number): [number, number] {
  const { bounds, k, scale } = map;
  return [(lng - bounds.west) * k * scale, (bounds.north - lat) * scale];
}

export const brazilMap = map;
