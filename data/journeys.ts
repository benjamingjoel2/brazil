import type { Journey } from "@/lib/types";
import { img } from "@/lib/media";

/**
 * Sample private journeys. Prices are per person, sharing, excluding international flights.
 * `internalFlights` counts the domestic flights the itinerary needs, including the hop
 * to or from a main international gateway (Rio or São Paulo) where one is required.
 */
export const journeys: Journey[] = [
  {
    slug: "first-brazil",
    title: "First Brazil: Rio, Iguaçu & Bahia",
    tagline: "The mountains, the waterfalls and the drums. A first taste that leaves you hungry for more.",
    summary:
      "Begin in Rio, where the city and the forest share the same hillsides. Fly to Iguaçu to stand in the spray of the world's widest waterfall from both the Brazilian and Argentine sides, then finish in Bahia: Salvador's music and food, and a car-free island for barefoot days.",
    nights: 12,
    priceFromUSD: 6900,
    biomes: ["atlantic-forest"],
    season:
      "Lovely from April to November, when Rio is warm rather than sticky. Bahia is sunniest from September to March; Iguaçu is fullest from December to March.",
    howYouTravel:
      "Brazil is enormous, and this journey crosses a good part of it. You fly Rio to Iguaçu (about two hours), then Iguaçu to Salvador, which usually means a connection in São Paulo and most of a day. From Salvador, Boipeba is reached by road and boat, around four hours door to door, or by a 30-minute small plane. A final flight takes you back to São Paulo for your international connection. Every transfer is private, and someone is always waiting with your name.",
    internalFlights: 3,
    days: [
      {
        day: "Day 1",
        title: "Hello, Rio",
        body: "A driver meets you at the airport and takes the coast road into the city. Settle into your hillside room in Santa Teresa, then wander down for a first cold coconut with the bay below you.",
        place: "rio-de-janeiro",
      },
      {
        day: "Days 2–4",
        title: "Mountains, forest and the beach in between",
        body: "Go up Sugarloaf early, before the cable cars fill. Walk the Tijuca Forest with a naturalist, swim at Ipanema, and spend an evening in a Lapa samba bar where the band sits around a table and the whole room sings along.",
        place: "rio-de-janeiro",
      },
      {
        day: "Day 5",
        title: "The Brazilian side of Iguaçu",
        body: "Fly south to Foz do Iguaçu. In the afternoon, follow the trail along the gorge as the view widens, until you are out on the walkway with the falls on three sides and spray in your hair.",
        place: "iguacu",
      },
      {
        day: "Day 6",
        title: "Across the border to the Devil's Throat",
        body: "Cross into Argentina with your guide and take the catwalks out over the river to the Garganta del Diablo. The ground hums. The water vanishes. You will talk about it for years.",
        place: "iguacu",
      },
      {
        day: "Day 7",
        title: "North to Salvador",
        body: "A travel day, via São Paulo. Arrive in Salvador for a slow dinner of moqueca in the old town, still bubbling in its clay pot.",
        place: "salvador-bahia-coast",
      },
      {
        day: "Days 8–9",
        title: "Salvador's rhythm",
        body: "Walk the Pelourinho with a local historian, cook Bahian food with a family who has been doing it for generations, and watch a capoeira roda come alive to the twang of the berimbau.",
        place: "salvador-bahia-coast",
      },
      {
        day: "Days 10–12",
        title: "Boipeba, at tide speed",
        body: "Cross to Boipeba, where the only traffic is the odd tractor. Swim in the natural pools at low tide, eat grilled lobster on the sand at Moreré, and let the hammock decide the afternoon.",
        place: "salvador-bahia-coast",
      },
      {
        day: "Day 13",
        title: "Até logo",
        body: "Back to Salvador by boat and road, then onward to São Paulo for your flight home. Sandy feet are allowed.",
        place: "salvador-bahia-coast",
      },
    ],
    stays: ["casa-santa-teresa", "pousada-coqueiral"],
    experiences: ["iguacu-both-sides", "cooking-bahian-food", "capoeira", "samba-forro-nights"],
    destinations: ["rio-de-janeiro", "iguacu", "salvador-bahia-coast"],
    image: img("rio", "Rio de Janeiro's mountains and bay seen from above"),
    goodFor: ["First-timers", "Couples", "Food lovers", "Music lovers"],
  },
  {
    slug: "jaguars-pantanal",
    title: "Jaguars & the Pantanal",
    tagline: "Big cats in daylight, macaws at breakfast, and rivers so clear you float with the fish.",
    summary:
      "Track jaguars by boat along the rivers of the northern Pantanal, then ride, walk and canoe from a working fazenda in the quieter south. Finish in Bonito, drifting face-down through crystal springs.",
    nights: 12,
    priceFromUSD: 8900,
    biomes: ["pantanal", "cerrado"],
    season:
      "July to October, the dry season, is the time for jaguars: water gathers in the rivers and so do the animals. August and September are the peak months for sightings.",
    verify: true,
    verifyNote: "Jaguar-boat season dates and Porto Jofre access depend on that year's water levels.",
    howYouTravel:
      "You fly from São Paulo to Cuiabá, then drive the Transpantaneira, a dirt road of more than a hundred wooden bridges, about four to five hours to Porto Jofre at its end, with plenty of stops for wildlife. Moving from the northern to the southern Pantanal means driving back to Cuiabá and flying to Campo Grande, then two to four hours by road to the fazenda, so that day is a long one. Bonito is around three hours from the southern fazenda by road. You fly home from Bonito's small airport when schedules allow, or from Campo Grande, four hours' drive away.",
    internalFlights: 3,
    days: [
      {
        day: "Days 1–2",
        title: "Onto the Transpantaneira",
        body: "Land in Cuiabá and head south past Poconé, where the tarmac gives way to red dirt and the first jabiru storks stand in the ditches like they own the place. Two nights at a fazenda: dawn walks, evening drives, and a spotlight on the eyes of a hundred caimans.",
        place: "pantanal",
      },
      {
        day: "Days 3–5",
        title: "Jaguar country",
        body: "Continue to Porto Jofre at the end of the road. Each day, a small boat takes you along the Cuiabá river and its side channels with an expert guide, looking for jaguars resting on the banks or swimming across. Giant otters are a very good consolation prize.",
        place: "pantanal",
      },
      {
        day: "Day 6",
        title: "North to south",
        body: "Back up the Transpantaneira to Cuiabá, a short flight to Campo Grande, and on by road to the southern Pantanal. It's a long day, with a cold drink waiting on the veranda at the end of it.",
        place: "pantanal",
      },
      {
        day: "Days 7–9",
        title: "Life on a working fazenda",
        body: "Ride out with the pantaneiro cowboys, canoe a quiet river, and walk at dawn for hyacinth macaws and giant anteaters. In the evening, the cook fires up the grill and the frogs start up the chorus.",
        place: "pantanal",
      },
      {
        day: "Days 10–12",
        title: "Bonito's clear water",
        body: "Drive to Bonito and slip into the Rio da Prata, floating over shoals of dourado through water as clear as glass. Add a sinkhole full of red macaws and a blue cave lake, and let the town's early nights win you over.",
        place: "bonito",
      },
      {
        day: "Day 13",
        title: "Homeward",
        body: "Transfer to the airport for your flight home via São Paulo, binoculars still round your neck.",
        place: "bonito",
      },
    ],
    stays: ["fazenda-tuiuiu", "fazenda-ipe-amarelo"],
    experiences: ["jaguar-safaris", "snorkelling-bonito"],
    destinations: ["pantanal", "bonito"],
    image: img("jaguar", "Jaguar walking along a riverbank in the Pantanal"),
    goodFor: ["Wildlife lovers", "Photographers", "Birders", "Repeat visitors"],
  },
  {
    slug: "amazon-by-water",
    title: "Amazon by Water",
    tagline: "Two rivers, two lodges, and a forest that changes shape with the seasons.",
    summary:
      "Start in Manaus, then travel up the black-water Rio Negro to the islands of the Anavilhanas. Fly west to the Mamirauá reserve, where you stay on the water in flooded forest and the people who live there are your guides.",
    nights: 10,
    priceFromUSD: 7400,
    biomes: ["amazon"],
    season:
      "Year-round. High water, roughly April to July, means canoeing through the treetops of the flooded forest. Low water, roughly September to December, reveals white-sand river beaches and forest trails.",
    verify: true,
    verifyNote: "River levels, Manaus–Tefé flight schedules and Mamirauá lodge seasonal closures.",
    howYouTravel:
      "Reaching Manaus from Rio or São Paulo is a four-hour domestic flight. From Manaus it's about three hours by road, across the Rio Negro bridge, to Novo Airão and your lodge in the Anavilhanas. For Mamirauá you fly Manaus to Tefé (just over an hour, and not every day) and then take a boat for about an hour and a half. Everything after that moves by canoe, at the speed of the river.",
    internalFlights: 4,
    days: [
      {
        day: "Day 1",
        title: "Manaus",
        body: "Arrive in the forest's big city. Visit the opera house built on rubber money and the Adolpho Lisboa market, where fish the size of children lie gleaming on ice.",
        place: "amazon",
      },
      {
        day: "Days 2–5",
        title: "The Anavilhanas archipelago",
        body: "Road and boat to your river lodge among hundreds of forested islands. Paddle the black-water channels at dawn, look for pink river dolphins, walk the forest with a guide who grew up here, and swim in water the colour of strong tea.",
        place: "amazon",
      },
      {
        day: "Day 6",
        title: "West to Mamirauá",
        body: "Back to Manaus, a short flight to Tefé, then a boat upriver into the reserve. By evening you are sleeping on the water, and the forest is louder than any city.",
        place: "amazon",
      },
      {
        day: "Days 7–9",
        title: "The flooded forest",
        body: "Glide through várzea forest with local guides, looking for red-faced uakari monkeys, sloths and the three-toed kind of patience. Visit a riverside community that co-manages the reserve, and learn how pirarucu fishing went from collapse to comeback.",
        place: "amazon",
      },
      {
        day: "Day 10",
        title: "Back to Manaus",
        body: "Boat and plane back to Manaus for a last night with a proper bed and a plate of grilled tambaqui.",
        place: "amazon",
      },
      {
        day: "Day 11",
        title: "Meeting of the Waters",
        body: "Before your flight, take a boat to where the dark Rio Negro and the milky Solimões run side by side for kilometres without mixing. Then onward home.",
        place: "amazon",
      },
    ],
    stays: ["casa-rio-negro", "flutuante-mamiraua"],
    experiences: ["amazon-river-lodges"],
    destinations: ["amazon"],
    image: img("amazon-flooded-forest", "Canoe gliding through flooded Amazon forest"),
    goodFor: ["Nature lovers", "Slow travellers", "Wildlife lovers"],
  },
  {
    slug: "dunes-lagoons-north",
    title: "Dunes & Lagoons of the North",
    tagline: "Catch the first sunrise in the Americas, then follow the wind west across the dunes.",
    summary:
      "Begin at Ponta do Seixas, the easternmost tip of the American mainland, then fly to Jericoacoara for sandy streets and sunset dunes. Cross the Rota das Emoções by 4x4 and boat to the Lençóis Maranhenses, where rainwater lagoons fill the hollows between white dunes.",
    nights: 12,
    priceFromUSD: 6200,
    biomes: ["atlantic-forest", "caatinga", "cerrado"],
    season:
      "June to September, when the Lençóis lagoons are usually at their fullest and Jeri's winds are picking up. Late June can also catch the São João festivals.",
    verify: true,
    verifyNote: "Lagoon levels vary with each year's rains; confirm before booking.",
    howYouTravel:
      "This is a coast-hugging road trip with flights at either end. You fly into João Pessoa (usually via São Paulo or Recife), then fly to Fortaleza and drive about four to five hours to Jericoacoara; the last stretch is by 4x4 over the dunes. From Jeri, the Rota das Emoções runs west by 4x4, road and boat through the Parnaíba Delta to Barreirinhas or Atins, over two unhurried days. You finish with a four-hour drive to São Luís and a flight home via São Paulo or Brasília.",
    internalFlights: 3,
    days: [
      {
        day: "Day 1",
        title: "João Pessoa",
        body: "Arrive in an easy, green city by the sea. At sunset, head to Praia do Jacaré, where a saxophonist plays Ravel's Boléro from a boat as the sun goes down.",
        place: "joao-pessoa",
      },
      {
        day: "Day 2",
        title: "The first sunrise",
        body: "An early start, and worth it: watch the sun rise at Ponta do Seixas, the first place on the American mainland it touches. Later, swim in the reef pools offshore at low tide.",
        place: "joao-pessoa",
      },
      {
        day: "Days 3–6",
        title: "Jericoacoara",
        body: "Fly to Fortaleza and roll into Jeri over the dunes. Days for Pedra Furada, the hammocks in Lagoa do Paraíso and a kite lesson if the wind obliges; evenings for the sunset dune and forró under the stars.",
        place: "jericoacoara",
      },
      {
        day: "Day 7",
        title: "The Rota das Emoções",
        body: "Head west by 4x4 along the coast, then by boat into the Parnaíba Delta, a maze of mangroves, islands and red crabs. Overnight on the delta.",
        place: "lencois-maranhenses",
      },
      {
        day: "Days 8–11",
        title: "Lençóis Maranhenses",
        body: "Arrive in Atins or Barreirinhas and walk into the dunes. Swim in lagoons as warm as bathwater, fly over the park in a small plane, and watch the sand turn pink at dusk. Shrimp for dinner, every night, without regret.",
        place: "lencois-maranhenses",
      },
      {
        day: "Day 12",
        title: "São Luís",
        body: "Drive to São Luís, a colonial city tiled in Portuguese azulejos, with a reggae soundtrack and a bumba-meu-boi tradition that takes over the streets in June.",
        place: "lencois-maranhenses",
      },
      {
        day: "Day 13",
        title: "Fly home",
        body: "Transfer to the airport and fly home, with sand in places you didn't know existed.",
        place: "lencois-maranhenses",
      },
    ],
    stays: ["pousada-dos-ventos"],
    experiences: ["lencois-lagoons", "samba-forro-nights", "surfing", "festa-junina"],
    destinations: ["joao-pessoa", "jericoacoara", "lencois-maranhenses"],
    image: img("lencois-maranhenses", "Blue lagoons between white dunes in Lençóis Maranhenses"),
    goodFor: ["Adventurous couples", "Photographers", "Beach lovers", "Second-timers"],
  },
  {
    slug: "carnival-done-properly",
    title: "Carnival, Done Properly",
    tagline: "Rio's Carnival is a show. Salvador's is a street party. Olinda's is a whole town in costume. We chose two.",
    summary:
      "Spend the opening days of Carnival in Salvador, dancing behind the trios elétricos and the great Afro-Brazilian blocos. Then fly to Olinda for frevo, maracatu and giant puppets in the hilltop streets, and finish with three quiet days on the beach to recover.",
    nights: 12,
    priceFromUSD: 8400,
    biomes: ["atlantic-forest"],
    season:
      "Carnival week (dates move each year; we confirm yours). Carnival falls in February or early March, and the best rooms go a year ahead.",
    verify: true,
    verifyNote: "Carnival dates, bloco schedules and camarote prices change each year.",
    howYouTravel:
      "You fly into Salvador, usually via São Paulo or Lisbon, and spend Carnival's opening days there. Midway through, a short flight of about an hour and a half takes you to Recife, and Olinda is 20 minutes up the road. Driving inside both cities during Carnival is slow, so we base you within walking distance of the action and arrange private transfers outside the circuits. The recovery beach is about two hours south of Recife by road.",
    internalFlights: 3,
    days: [
      {
        day: "Day 1",
        title: "Salvador, warming up",
        body: "Arrive the day before it all begins. Eat acarajé, get your abadá fitted, and have your Carnival briefing from a local who has danced through thirty of them.",
        place: "salvador-bahia-coast",
      },
      {
        day: "Days 2–5",
        title: "Salvador's Carnival",
        body: "Follow the trios elétricos along the seafront circuit, watch Ilê Aiyê and Olodum lead their blocos afro, and see the white-robed Filhos de Gandhy fill the streets. Take a camarote for a breather when your feet ask for one.",
        place: "salvador-bahia-coast",
      },
      {
        day: "Days 6–9",
        title: "Olinda, the town in costume",
        body: "Fly to Recife and settle in Olinda. Join the small, joyful blocos that wind up and down the hill, dance frevo with an umbrella you'll never quite master, and cheer the giant puppets as they lurch past. It runs until Ash Wednesday, and so will you.",
        place: "recife-olinda",
      },
      {
        day: "Days 10–12",
        title: "Recover, beautifully",
        body: "Head south to Praia dos Carneiros: calm water, a little white church on the sand, and absolutely nothing on the schedule. Sleep. Swim. Repeat.",
        place: "recife-olinda",
      },
      {
        day: "Day 13",
        title: "Home, with stories",
        body: "Transfer to Recife airport for your flight home. Glitter optional, but it's coming with you anyway.",
        place: "recife-olinda",
      },
    ],
    stays: [],
    experiences: ["carnival", "samba-forro-nights", "capoeira", "cooking-bahian-food"],
    destinations: ["salvador-bahia-coast", "recife-olinda"],
    image: img("carnival-olinda", "Carnival revellers and giant puppets in the streets of Olinda"),
    goodFor: ["Music lovers", "Groups of friends", "Festival goers"],
  },
  {
    slug: "bahia-slowly",
    title: "Bahia, Slowly",
    tagline: "One state, no hurry: city drums, mountain waterfalls and two coastlines worth the wait.",
    summary:
      "Fall for Salvador, then head inland to the table mountains of the Chapada Diamantina. Come back to the coast through the Recôncavo, the birthplace of samba de roda, and finish with car-free Boipeba and the surf beaches of Itacaré.",
    nights: 14,
    priceFromUSD: 6600,
    biomes: ["atlantic-forest", "cerrado"],
    season:
      "September to March for the sunniest coast; April to October for the driest hiking in the Chapada. September to November gives you a fine balance of both.",
    howYouTravel:
      "Almost all of this journey is by road and boat, which is the point. You fly into Salvador (often via São Paulo) and out of Ilhéus. The drive from Salvador to the Chapada takes six to seven hours with stops, and the return to the coast is split with a night in Cachoeira. Boipeba is reached by road to Valença and a boat across; from Boipeba to Itacaré it's about four hours of boat and road around the Camamu peninsula. We can swap the longest drives for a small plane if you'd rather.",
    internalFlights: 2,
    days: [
      {
        day: "Days 1–3",
        title: "Salvador",
        body: "Walk the Pelourinho with a historian, cook moqueca and vatapá in a family kitchen, and spend a Tuesday night in the old town when the drums come out to rehearse.",
        place: "salvador-bahia-coast",
      },
      {
        day: "Days 4–7",
        title: "The Chapada Diamantina",
        body: "Drive inland to Lençóis, the old diamond town. Hike to the top of the Fumaça waterfall, climb Morro do Pai Inácio for sunset, and swim in caves where a single shaft of light turns the water electric blue.",
        place: "chapada-diamantina",
      },
      {
        day: "Day 8",
        title: "Cachoeira and the Recôncavo",
        body: "Break the journey in Cachoeira, a riverside town of colonial facades and deep Afro-Brazilian roots. If you're lucky, a samba de roda will break out after dinner.",
        place: "salvador-bahia-coast",
      },
      {
        day: "Days 9–11",
        title: "Boipeba",
        body: "Road to Valença and a boat to Boipeba. Tide pools, fresh coconut, lobster on the sand at Moreré, and a pace measured in hammock-hours.",
        place: "salvador-bahia-coast",
      },
      {
        day: "Days 12–14",
        title: "Itacaré",
        body: "Round the Camamu peninsula to Itacaré, where every beach sits at the end of a forest trail. Take a surf lesson, walk to Prainha, and eat a final moqueca as the light goes.",
        place: "salvador-bahia-coast",
      },
      {
        day: "Day 15",
        title: "Fly home",
        body: "An hour's drive to Ilhéus for your flight home via São Paulo.",
        place: "salvador-bahia-coast",
      },
    ],
    stays: ["pousada-coqueiral"],
    experiences: ["cooking-bahian-food", "capoeira", "surfing", "festa-junina"],
    destinations: ["salvador-bahia-coast", "chapada-diamantina"],
    image: img("boipeba", "Coconut palms leaning over a quiet beach on Boipeba"),
    goodFor: ["Slow travellers", "Couples", "Hikers", "Food lovers"],
  },
  {
    slug: "brazil-with-kids",
    title: "Brazil with Kids",
    tagline: "Waterfalls, toucans and rivers full of fish. Short transfers, long swims, early nights.",
    summary:
      "A gentle first Brazil for families: Rio's beaches and cable cars, the thunder of Iguaçu Falls, and Bonito's clear rivers, where even small swimmers can float with the fish. Plenty of pool time is built in.",
    nights: 11,
    priceFromUSD: 5800,
    biomes: ["atlantic-forest", "cerrado"],
    season:
      "Lovely year-round. Northern-hemisphere summer holidays (June to August) are cool and dry in all three places; Christmas and Easter are hotter and busier.",
    howYouTravel:
      "We keep the moving parts small. You fly into Rio, take a two-hour flight to Iguaçu, and then fly on to Bonito, which usually needs a connection via Campinas or São Paulo, or a flight to Campo Grande and a four-hour drive, so we plan that day around naps. You fly home from Bonito or Campo Grande. Car seats, early check-ins and snacks are arranged. Please check current vaccination advice with a travel clinic before you go, as recommendations vary by age and region.",
    internalFlights: 3,
    days: [
      {
        day: "Days 1–4",
        title: "Rio for small explorers",
        body: "Cable cars up Sugarloaf, the little train through the forest to Christ the Redeemer, and long mornings on the beach with a fresh coconut each. Afternoons at the Botanical Garden, where the toucans and marmosets are the main event.",
        place: "rio-de-janeiro",
      },
      {
        day: "Days 5–7",
        title: "Iguaçu Falls",
        body: "Fly to Iguaçu and walk the Brazilian trails to the spray. Visit the bird park next door for close-up toucans and macaws, then cross to Argentina, where the little forest train takes tired legs to the catwalks over the Devil's Throat.",
        place: "iguacu",
      },
      {
        day: "Days 8–11",
        title: "Bonito",
        body: "Snorkel the Rio da Prata in a wetsuit and life jacket, float like a leaf down gentle rivers, and gasp at a sinkhole full of red macaws. There's a natural swimming hole for every afternoon.",
        place: "bonito",
      },
      {
        day: "Day 12",
        title: "Home",
        body: "Fly home via São Paulo, with a full camera and a sleeping child or two.",
        place: "bonito",
      },
    ],
    stays: ["casa-santa-teresa"],
    experiences: ["iguacu-both-sides", "snorkelling-bonito"],
    destinations: ["rio-de-janeiro", "iguacu", "bonito"],
    image: img("snorkel-clear-river", "Family snorkelling in a crystal-clear river in Bonito"),
    goodFor: ["Families", "First-timers", "Nature lovers"],
  },
  {
    slug: "coast-to-rainforest",
    title: "Coast to Rainforest",
    tagline: "From Atlantic Forest falling into the sea to Amazon forest standing in the river.",
    summary:
      "Start in Rio, then follow the Green Coast to colonial Paraty and car-free Ilha Grande. Fly north to Manaus and travel up the Rio Negro to a river lodge in the Anavilhanas: two great forests, one journey.",
    nights: 13,
    priceFromUSD: 7200,
    biomes: ["atlantic-forest", "amazon"],
    season:
      "April to June and September to November are lovely on the coast. In the Amazon, high water (roughly April to July) brings flooded-forest canoeing; low water (roughly September to December) brings river beaches.",
    verify: true,
    verifyNote: "Amazon river levels vary yearly.",
    howYouTravel:
      "The coastal half is by road and boat: about four hours from Rio to Paraty, then a short drive and boat to Ilha Grande, and back to Rio's airport in roughly three hours. From Rio you fly direct to Manaus, around four hours, then drive about three hours to the Anavilhanas. You fly home from Manaus, usually via São Paulo.",
    internalFlights: 2,
    days: [
      {
        day: "Days 1–3",
        title: "Rio de Janeiro",
        body: "Settle into Santa Teresa and let the city introduce itself: Sugarloaf at sunrise, the Tijuca Forest at midday, a samba circle at night.",
        place: "rio-de-janeiro",
      },
      {
        day: "Days 4–6",
        title: "Paraty",
        body: "Drive the Green Coast to Paraty. Spend a day on a wooden schooner hopping between coves, another visiting cachaça stills in the hills, and evenings on the cobblestones under the lamps.",
        place: "paraty-ilha-grande",
      },
      {
        day: "Days 7–8",
        title: "Ilha Grande",
        body: "Boat across to an island with no cars. Hike through forest to Lopes Mendes, swim in the green water of the Blue Lagoon, and listen for howler monkeys at dusk.",
        place: "paraty-ilha-grande",
      },
      {
        day: "Day 9",
        title: "North to Manaus",
        body: "Back to Rio by boat and road, then a direct flight north. Tonight, Manaus: warm air, river smells and a cold guaraná.",
        place: "amazon",
      },
      {
        day: "Days 10–13",
        title: "The Rio Negro",
        body: "Road and boat to your lodge in the Anavilhanas. Canoe at first light, look for pink dolphins, learn the forest's medicine cabinet from a local guide, and sleep to the sound of rain on the leaves.",
        place: "amazon",
      },
      {
        day: "Day 14",
        title: "Homeward",
        body: "Return to Manaus for your flight home, via São Paulo.",
        place: "amazon",
      },
    ],
    stays: ["casa-santa-teresa", "solar-das-pedras", "casa-rio-negro"],
    experiences: ["amazon-river-lodges", "samba-forro-nights"],
    destinations: ["rio-de-janeiro", "paraty-ilha-grande", "amazon"],
    image: img("forest-canopy", "Rainforest canopy seen from above"),
    goodFor: ["Nature lovers", "First-timers", "Couples"],
  },
];

export const getJourney = (slug: string) => journeys.find((j) => j.slug === slug);
