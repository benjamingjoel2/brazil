import type { FaqItem } from "@/lib/types";
import { img } from "@/lib/media";

export const faq: FaqItem[] = [
  {
    q: "Do I need a visa for Brazil?",
    a: [
      "It depends on your passport. Many European passport holders, including UK citizens, can currently visit visa-free for tourism. Since April 2025, citizens of the United States, Canada and Australia need an e-visa, applied for online before travel.",
      "Rules change, so please check the latest requirements for your nationality before booking flights. We'll remind you when your journey is confirmed.",
    ],
    verify: "Verify against official Brazilian government sources (gov.br / your nearest Brazilian consulate) before travel.",
    images: [img("rio", "Rio de Janeiro from above"), img("sunrise-atlantic", "Sunrise over the Atlantic")],
  },
  {
    q: "What about yellow fever and other health advice?",
    a: [
      "Yellow fever vaccination is generally recommended for travel to many parts of Brazil, including the Amazon and the Pantanal. Brazil does not usually require a certificate on entry, but some onward destinations may.",
      "See a travel clinic six to eight weeks before you go for personal advice on vaccinations, mosquito protection and anything else you might need.",
    ],
    verify: "Verify with your doctor, a travel clinic and official health guidance (e.g. WHO, CDC, NHS fitfortravel) before travel.",
    images: [img("forest-canopy", "Rainforest canopy"), img("binoculars-wildlife", "Traveller with binoculars")],
  },
  {
    q: "Is Brazil safe to travel?",
    a: [
      "The places we send you are welcoming and well travelled, and you'll have guides and drivers who know them intimately. Like any big country, Brazil asks for some common sense in its cities: carry what you need for the day, keep your phone out of sight on busy streets, and use the transfers we arrange at night.",
      "We brief you on each destination before you go, and your specialist is a message away throughout.",
    ],
    images: [img("salvador", "Colourful colonial buildings in Salvador"), img("guide-walk", "A guide with a small group")],
  },
  {
    q: "How do you get around such a big country?",
    a: [
      "By air, mostly. Brazil is bigger than the contiguous United States, and its regions are linked by internal flights of two to four hours. Most of our journeys use two to four flights; we choose routes and timings to keep connections sensible.",
      "On the ground, you'll have private transfers, boats in the Amazon and Pantanal, and the occasional 4x4 over the dunes.",
    ],
    images: [img("small-plane", "A small plane over wetlands"), img("jericoacoara", "Dunes at Jericoacoara")],
  },
  {
    q: "When is the best time to visit?",
    a: [
      "There's a right place for every month. Roughly: the Pantanal's dry season (Jul–Oct) for jaguars; the Amazon's high water (Mar–Jul) for canoeing the flooded forest, or low water (Sep–Dec) for trails and beaches; Lençóis Maranhenses' lagoons are usually fullest around Jun–Sep; Bahia and Rio shine most of the year, with summer (Dec–Mar) hot and lively.",
      "Tell us your dates and we'll tell you where Brazil is at its best.",
    ],
    verify: "Seasons are typical, not guaranteed. Verify each year.",
    images: [img("pantanal-dry", "Pantanal riverbank in the dry season"), img("lencois-maranhenses", "Lagoons between white dunes")],
  },
  {
    q: "How busy and expensive is Carnival?",
    a: [
      "Very, and worth it if you plan well. Carnival week is Brazil's biggest holiday: flights, hotels and event tickets rise sharply and sell out early, often six to twelve months ahead in Rio and Salvador.",
      "Our Carnival chooser explains the differences honestly. We'll match you to the right city, book good seats or camarotes, and build in quiet time to recover.",
    ],
    verify: "Carnival dates move each year with Easter. Verify yearly.",
    images: [img("carnival-costume", "Carnival costumes"), img("carnival-olinda", "Giant puppets in Olinda")],
  },
  {
    q: "Money, cards and tipping?",
    a: [
      "Brazil's currency is the real (BRL). Cards are accepted almost everywhere, and Pix, Brazil's instant payment system, is everywhere locals pay. Carry a little cash for markets, beach vendors and remote areas.",
      "Restaurants usually add a 10% service charge to the bill. Tipping guides and drivers is appreciated; we'll give you a simple guide.",
    ],
    images: [img("market-fruit", "A fruit stall at a Brazilian market"), img("food-bahian", "A Bahian moqueca")],
  },
  {
    q: "Do I need to speak Portuguese?",
    a: [
      "No. Brazilians speak Portuguese, not Spanish, and English is less common outside hotels. That's why every journey includes private English-speaking guides.",
      "A few words go a long way: bom dia (good morning), obrigado/obrigada (thank you), and tudo bem? (all good?).",
    ],
    images: [img("music-street", "Musicians playing in the street"), img("forro-dance", "Couples dancing forró")],
  },
  {
    q: "Are there visitor fees for Fernando de Noronha?",
    a: [
      "Yes. Visitors pay a daily environmental preservation fee (TPA) that increases with the length of stay, plus a separate entry ticket for the marine national park. Visitor numbers are managed to protect the islands.",
      "We include and arrange both fees in your quote.",
    ],
    verify: "Fees and rules change. Verify current amounts with the official Noronha and ICMBio sources.",
    images: [img("fernando-de-noronha", "Fernando de Noronha's twin peaks over the sea"), img("sea-turtle", "A sea turtle underwater")],
  },
  {
    q: "Is Brazil good for children?",
    a: [
      "Wonderfully. Brazilians adore children, and kids love floating with fish in Bonito, the spray at Iguaçu, capybaras in the Pantanal and beaches with gentle water. We keep transfers short and days flexible.",
      "Some activities have minimum ages, and health advice can differ for young children, so we'll tailor everything to your family.",
    ],
    images: [img("bonito", "Clear river in Bonito"), img("capybara", "A capybara by the water")],
  },
  {
    q: "How do deposits and cancellations work?",
    a: [
      "A deposit secures your journey, with the balance due before travel. Cancellation terms depend on your lodges and flights, and we explain them clearly in your proposal. See our booking terms for the details.",
      "Comprehensive travel insurance is a condition of booking, so arrange it as soon as you book.",
    ],
    images: [img("stay-pousada-beach", "A beach pousada"), img("sunrise-atlantic", "Sunrise over the sea")],
  },
];
