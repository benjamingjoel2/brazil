import type { Experience } from "@/lib/types";
import { img } from "@/lib/media";

/** Signature experiences. Seasonal timings, fees and permits carry `verify`. */
export const experiences: Experience[] = [
  {
    slug: "jaguar-safaris",
    name: "Jaguar safaris in the Pantanal",
    summary: "Small boats, expert trackers, and the best odds of seeing a wild jaguar anywhere on Earth.",
    body:
      "At the end of the Transpantaneira, the rivers around Porto Jofre hold one of the densest jaguar populations known. In the dry season the cats hunt caimans and capybaras along the banks in broad daylight, and guides on the water share sightings by radio, so a quiet morning can turn into a front-row seat in minutes.\n\nWe use small boats with experienced guides who keep a respectful distance and switch off the engine when a cat is resting. Expect long, sunny hours on the river, giant otters, hyacinth macaws and kingfishers by the dozen. And, if the river is kind, a jaguar strolling along the sand as though you weren't there.",
    destinations: ["pantanal"],
    journeys: ["jaguars-pantanal"],
    when: "Best July to October, in the dry season; sightings are possible from about May to November.",
    verify: true,
    verifyNote: "Jaguar-boat season depends on water levels each year.",
    image: img("jaguar", "Jaguar on a riverbank watched from a small boat"),
  },
  {
    slug: "amazon-river-lodges",
    name: "Amazon river lodges",
    summary: "Sleep on the river, wake to howler monkeys, and travel the forest by canoe.",
    body:
      "We choose lodges that are small, well run and rooted in the river communities around them. On the Rio Negro, black water means fewer mosquitoes and long, glassy reflections; in the Mamirauá reserve, a floating lodge sits in várzea forest that floods by many metres each year, and local families guide, cook and share in the income.\n\nDays follow the light: a dawn paddle while the forest wakes, a guided walk to learn which tree cures a headache and which one you should not lean on, an afternoon swim, a night outing with a torch for caimans and tree frogs. The river sets the programme, and it changes completely between high and low water.",
    destinations: ["amazon"],
    journeys: ["amazon-by-water", "coast-to-rainforest"],
    when: "Year-round. High water roughly April to July; low water roughly September to December.",
    verify: true,
    verifyNote: "River levels vary by year; some lodges close for part of the low-water season.",
    image: img("stay-river-lodge", "Wooden river lodge on stilts above the Rio Negro"),
  },
  {
    slug: "snorkelling-bonito",
    name: "Snorkelling Bonito's clear rivers",
    summary: "Float face-down through spring water so clear the fish look suspended in air.",
    body:
      "Bonito's limestone filters its springs into rivers of startling clarity. On the Rio da Prata or the Sucuri, you put on a wetsuit and mask, slip into the current and simply drift, with shoals of piraputanga and golden dourado turning beneath you and green aquatic gardens swaying on the bed.\n\nThere's no swimming to speak of, which makes it wonderful for children and nervous swimmers. Every site limits the number of visitors per day and must be booked through a licensed local agency, and sunscreen and touching the riverbed are off-limits. It's strict, and it works: the water is as clear now as it was decades ago.",
    destinations: ["bonito"],
    journeys: ["jaguars-pantanal", "brazil-with-kids"],
    when: "Year-round; often clearest from May to September. Heavy summer rain can cloud some rivers briefly.",
    verify: true,
    verifyNote: "Daily visitor caps, minimum ages and agency booking rules per site.",
    image: img("snorkel-clear-river", "Snorkeller drifting above fish in a clear Bonito river"),
  },
  {
    slug: "lencois-lagoons",
    name: "Swimming the Lençóis lagoons",
    summary: "Walk barefoot over white dunes to rainwater lagoons as warm as a bath.",
    body:
      "Each year the rains of the first half of the year fill the hollows between the dunes of the Lençóis Maranhenses with thousands of freshwater lagoons, blue, green and impossibly clear against the white sand. From Barreirinhas or Atins, a 4x4 takes you to the edge of the park, and then it's all on foot.\n\nSwim, float, walk the ridges and stay for sunset, when the dunes go pink and the wind smooths away your footprints. A short scenic flight shows you the scale of it. As the dry season goes on, the lagoons shrink and many disappear, so timing really matters here.",
    destinations: ["lencois-maranhenses"],
    journeys: ["dunes-lagoons-north"],
    when: "Lagoons are typically fullest around June to September, varying with that year's rainfall.",
    verify: true,
    verifyNote: "Lagoon levels change each season; confirm before booking.",
    image: img("lencois-maranhenses", "Swimmers in a blue lagoon among white dunes"),
  },
  {
    slug: "iguacu-both-sides",
    name: "Iguaçu from both sides",
    summary: "The panorama from Brazil, the close-up from Argentina. You need both.",
    body:
      "On the Brazilian side, a trail follows the gorge and the view keeps widening until you're on a walkway out over the river, with the whole horseshoe of falls around you and spray drifting across like weather. It is the best place to understand the scale of Iguaçu.\n\nThe Argentine side is where you get close. A little forest train and a series of catwalks take you across the upper river to the edge of the Devil's Throat, where half the river drops away beneath your feet. Your guide handles the border crossing; bring your passport, a light rain jacket and a sense of awe.",
    destinations: ["iguacu"],
    journeys: ["first-brazil", "brazil-with-kids"],
    when: "Year-round. Highest water usually December to March; clearer, cooler days May to September.",
    verify: true,
    verifyNote: "Park opening hours, entry fees and border requirements for both sides.",
    image: img("iguacu-walkway", "Walkway leading out into the spray of Iguaçu Falls"),
  },
  {
    slug: "carnival",
    name: "Carnival",
    summary: "Rio's Carnival is a show. Salvador's is a street party. Olinda's is a whole town in costume. Choose wisely.",
    body:
      "Rio's samba schools parade through the Sambadrome in a spectacle a year in the making, while hundreds of street blocos fill the neighbourhoods by day. Salvador puts the music on trucks, the trios elétricos, and a million people follow them, alongside the Afro-Brazilian blocos that turned Carnival into a statement. Olinda and Recife dance frevo and maracatu through the streets, with giant puppets leading the way.\n\nWe help you choose the right city for you, then make it easy: rooms within walking distance, a local host who knows which bloco to join, camarote passes for a rest from the crowds, and transfers that avoid the closed roads. You bring the energy. We'll handle the logistics.",
    destinations: ["rio-de-janeiro", "salvador-bahia-coast", "recife-olinda"],
    journeys: ["carnival-done-properly"],
    when: "Carnival week, in February or early March; the dates move each year with Easter, and we confirm yours.",
    verify: true,
    verifyNote: "Carnival dates, parade schedules and ticket and camarote prices change yearly.",
    image: img("carnival-bloco-street", "A street bloco dancing through the city at Carnival"),
  },
  {
    slug: "festa-junina",
    name: "Festa Junina & São João",
    summary: "Bonfires, corn cake, accordions and a whole country dressed for a country dance.",
    body:
      "In June, the Northeast celebrates its saints with the biggest party most visitors have never heard of. Towns string bunting across the streets, light bonfires, and dance quadrilha in checked shirts and straw hats, with forró playing until dawn. Campina Grande, inland from João Pessoa, and Caruaru, near Recife, each claim the largest São João in the world, and both make a convincing case.\n\nIt's food as much as music: canjica, pamonha, corn cake, peanut brittle and hot quentão. Smaller towns, such as Lençóis in the Chapada Diamantina, offer a more intimate version where you'll be pulled into the dance within the hour.",
    destinations: ["recife-olinda", "joao-pessoa", "chapada-diamantina"],
    journeys: ["dunes-lagoons-north", "bahia-slowly"],
    when: "Throughout June, peaking around São João on 23–24 June.",
    verify: true,
    verifyNote: "Festival programmes and main-stage dates in Campina Grande and Caruaru each year.",
    image: img("festa-junina", "Bunting and bonfire at a Festa Junina celebration"),
  },
  {
    slug: "capoeira",
    name: "Capoeira in Salvador",
    summary: "Part martial art, part dance, part conversation, all to the sound of the berimbau.",
    body:
      "Capoeira was developed by enslaved Africans in Brazil and grew up in Bahia, where it is still taught in academies across Salvador. In a roda, two players move in a circle of musicians and singers, feinting, spinning and answering each other's moves, while the berimbau sets the tempo.\n\nWe arrange time with a respected mestre: watch a roda, hear the history from people who carry it, and try a few moves yourself if you're brave. Classes are run by local teachers, and your visit supports their academy directly.",
    destinations: ["salvador-bahia-coast", "rio-de-janeiro"],
    journeys: ["first-brazil", "bahia-slowly", "carnival-done-properly"],
    when: "Year-round; classes and rodas run most days.",
    image: img("capoeira", "Two capoeira players in a roda with musicians"),
  },
  {
    slug: "samba-forro-nights",
    name: "Samba & forró nights",
    summary: "Where the band sits round a table and the whole room knows the words.",
    body:
      "In Rio and São Paulo, the best samba happens in a roda: musicians around a table playing classics everyone sings along to, beer arriving without being asked for. In the Northeast, the soundtrack switches to forró, an accordion, a triangle and a zabumba drum, and couples dancing close and quick in Recife, Salvador or under the stars in Jericoacoara.\n\nWe take you where locals go, with a guide who knows the musicians and doesn't mind showing you the basic steps. No stage shows, no dinner theatre. Just a good night out, Brazilian style.",
    destinations: ["rio-de-janeiro", "sao-paulo", "salvador-bahia-coast", "recife-olinda", "jericoacoara"],
    journeys: ["first-brazil", "carnival-done-properly", "coast-to-rainforest", "dunes-lagoons-north"],
    when: "Year-round; many rodas happen on particular weeknights, and we time it for you.",
    image: img("music-street", "Musicians playing samba around a table at night"),
  },
  {
    slug: "cooking-bahian-food",
    name: "Cooking Bahian food",
    summary: "Dendê, coconut and a family kitchen that has fed Salvador for generations.",
    body:
      "Bahian cooking carries West African roots in every pot: palm oil, dried shrimp, coconut milk and okra, turned into moqueca, vatapá, caruru and the black-eyed-pea fritters called acarajé. Start at the São Joaquim market with your cook, picking out fish, peppers and herbs.\n\nThen cook together in a home kitchen, learning the order things go into the clay pot and the stories behind each dish. Lunch is what you made, at a long table, with plenty for seconds. Our hosts set their own fees and are paid directly.",
    destinations: ["salvador-bahia-coast"],
    journeys: ["first-brazil", "bahia-slowly", "carnival-done-properly"],
    when: "Year-round.",
    image: img("food-bahian", "Clay pot of moqueca with coconut, palm oil and fresh herbs"),
  },
  {
    slug: "diving-noronha",
    name: "Diving Fernando de Noronha",
    summary: "Brazil's clearest water, with turtles, rays and reef sharks for company.",
    body:
      "Noronha is the best diving in Brazil. Volcanic walls, shipwrecks and caverns drop into warm Atlantic water with visibility that can reach 30 metres or more. Turtles are almost guaranteed, and you may meet eagle rays, nurse sharks and reef sharks, with spinner dolphins often escorting the boat home.\n\nBeginners can try a first dive with an instructor; certified divers can join small-group boats to the outer sites. Snorkellers are just as happy at Baía do Sancho or Praia do Leão. Visitor numbers are limited, and all visitors pay a daily environmental fee plus a national park fee, so book early.",
    destinations: ["fernando-de-noronha"],
    journeys: [],
    when: "Year-round; visibility is usually best from about August to February.",
    verify: true,
    verifyNote: "TPA daily fee, national park ticket price, visitor limits and dive-site permits.",
    image: img("diving", "Diver with a sea turtle in clear blue water off Noronha"),
  },
  {
    slug: "minas-colonial-towns",
    name: "The colonial towns of Minas",
    summary: "Gold-rush churches, soapstone prophets and the best cheese bread in Brazil.",
    body:
      "Ouro Preto spills over steep hills, its baroque churches lined with gold from the eighteenth-century rush. Down the road, Congonhas has Aleijadinho's twelve soapstone prophets, and Tiradentes is a jewel box of a town with cobbled streets, a train pulled by an old steam engine on weekends, and kitchens that take Minas cooking very seriously.\n\nWe travel with a local historian who can explain the art, the gold and the enslaved people who mined it, without skipping the hard parts. Then we eat: tutu, feijão tropeiro, frango com quiabo, and doce de leite to finish.",
    destinations: ["minas-gerais"],
    journeys: [],
    when: "Year-round; April to October is dry and sunny. Holy Week in Ouro Preto is spectacular but busy.",
    image: img("colonial-church", "Baroque church facade on a cobbled square in Minas Gerais"),
  },
  {
    slug: "inhotim-art",
    name: "Inhotim",
    summary: "World-class contemporary art scattered across a vast botanical garden.",
    body:
      "In Brumadinho, about an hour and a half from Belo Horizonte, Inhotim is one of the world's largest open-air contemporary art collections: pavilions and outdoor works by Brazilian and international artists set among lakes, palms and thousands of plant species.\n\nIt's big, so we plan your route with you, with electric carts for the longer stretches and time to sit with the pieces that stop you in your tracks. Give it at least a full day; two is better.",
    destinations: ["minas-gerais"],
    journeys: [],
    when: "Year-round; check opening days, as the park is closed on some weekdays.",
    verify: true,
    verifyNote: "Opening days, hours and ticket prices.",
    image: img("inhotim", "Contemporary art pavilion among gardens at Inhotim"),
  },
  {
    slug: "surfing",
    name: "Surfing & kitesurfing",
    summary: "Gentle beach breaks for beginners, serious swell for the rest, and wind for the kites.",
    body:
      "Brazil has a long coastline and a lot of surf. Itacaré in Bahia hides friendly breaks at the bottom of forest trails; Florianópolis has beaches facing every direction, so somewhere usually works; Rio surfs at Arpoador and Prainha, and Noronha gets powerful swells in its summer for experienced surfers.\n\nIf you prefer the wind, Jericoacoara and Atins are among the world's great kitesurfing spots. We book lessons with certified local instructors, from your first wobbly stand-up to downwinders along the coast.",
    destinations: [
      "rio-de-janeiro",
      "paraty-ilha-grande",
      "salvador-bahia-coast",
      "fernando-de-noronha",
      "jericoacoara",
      "florianopolis-south",
    ],
    journeys: ["bahia-slowly", "dunes-lagoons-north"],
    when: "Year-round somewhere. Kitesurf season in Ceará and Maranhão is roughly July to January.",
    verify: true,
    verifyNote: "Kite wind season and Noronha swell season.",
    image: img("surfing", "Surfer riding a wave off a Brazilian beach"),
  },
];

export const getExperience = (slug: string) => experiences.find((e) => e.slug === slug);
