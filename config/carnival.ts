/**
 * Carnival dates. Carnival moves every year with Easter (Ash Wednesday falls
 * 46 days before Easter Sunday). VERIFY YEARLY against official city calendars.
 */
export const carnival = {
  year: 2027,
  verify: true,
  /** Friday opening night through Ash Wednesday, ISO dates (local time). */
  friday: "2027-02-05",
  ashWednesday: "2027-02-10",
  note: "Dates calculated from Easter Sunday 28 March 2027. Verify yearly with official city programmes.",
} as const;

/** Other festivals shown alongside Carnival. VERIFY YEARLY. */
export const festivals = {
  festaJunina: {
    label: "Festa Junina (São João)",
    where: "Campina Grande, Caruaru and across the Northeast",
    when: "Throughout June, peaking around 23–24 June",
    verify: true,
  },
  parintins: {
    label: "Parintins Folklore Festival",
    where: "Parintins, Amazonas",
    when: "Last weekend of June (2027 dates to be confirmed)",
    verify: true,
  },
} as const;
