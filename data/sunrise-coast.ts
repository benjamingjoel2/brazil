import type { SunriseStop } from "@/lib/types";
import { img } from "@/lib/media";

/** Following the sunrise south along the coast, one stop per state. */
export const sunriseCoast: SunriseStop[] = [
  {
    state: "Paraíba",
    place: "Ponta do Seixas, João Pessoa",
    coords: [-7.155, -34.7928],
    line: "Where the Americas wake up.",
    body: "The easternmost point of the mainland Americas is a quiet reef, a red cliff and a lighthouse. Locals come to watch the first light with coffee in a flask. Then the whole city goes for a swim in the warm, glassy sea.",
    destination: "joao-pessoa",
    image: img("ponta-do-seixas", "First light over the reef at Ponta do Seixas"),
  },
  {
    state: "Pernambuco",
    place: "Olinda",
    coords: [-8.0089, -34.8553],
    line: "The light climbs the hill before you do.",
    body: "Sunrise paints Olinda's churches orange one by one, starting with the highest. Below, Recife's reefs (the recifes that gave the city its name) catch the glow. Out at sea, Fernando de Noronha has had its sunrise already. Islands always cheat.",
    destination: "recife-olinda",
    image: img("olinda", "Colourful colonial houses and churches of Olinda"),
  },
  {
    state: "Bahia",
    place: "Boipeba",
    coords: [-13.6153, -38.9259],
    line: "No cars, no hurry, no shadow on the sand.",
    body: "On this car-free island, the tide decides your schedule. At dawn, fishermen push off from the beach and the natural pools at low tide turn the colour of sky. By the time breakfast arrives, you'll have forgotten what day it is.",
    destination: "salvador-bahia-coast",
    image: img("boipeba", "Palm-lined beach on Boipeba island at dawn"),
  },
  {
    state: "Rio de Janeiro",
    place: "Rio de Janeiro",
    coords: [-22.9519, -43.1658],
    line: "The sun rises behind Sugarloaf like it knows it's being watched.",
    body: "Early risers walk the Urca seawall or climb the Morro da Urca to watch the bay turn pink. Runners on Copacabana stop for a second, phones up. Rio claps for the sunset; at sunrise, it just quietly smiles.",
    destination: "rio-de-janeiro",
    image: img("rio", "Sugarloaf Mountain over Guanabara Bay at sunrise"),
  },
  {
    state: "Santa Catarina",
    place: "Florianópolis",
    coords: [-27.6044, -48.4361],
    line: "Surfers first, everyone else second.",
    body: "On the island of Santa Catarina, the dawn patrol is already in the water at Praia Mole when the sun comes up over the Atlantic. Behind them, lagoons, dunes and fishing villages wake up to fresh oysters and strong coffee.",
    destination: "florianopolis-south",
    image: img("florianopolis", "Surfers at dawn on a beach in Florianópolis"),
  },
];
