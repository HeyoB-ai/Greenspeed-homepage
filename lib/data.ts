// Navigation items
export const navItems = [
  { label: "Over ons", href: "/over-ons" },
  { label: "Overstappen", href: "/overstappen" },
  { label: "AIroute Planner", href: "/airoute-planner" },
  { label: "Klantcases", href: "/klantcases" },
  { label: "Vacatures", href: "/vacatures" },
  { label: "Contact", href: "/contact" },
];

// Klantcases
export const klantcases = [
  {
    slug: "apotheek-van-der-berg",
    naam: "Apotheek Van der Berg",
    stad: "Amsterdam",
    quote:
      "Greenspeed heeft onze bezorging volledig overgenomen. We besparen nu 30% op kosten en onze patiënten zijn veel tevredener.",
    naam_contact: "Drs. M. van der Berg",
    functie: "Apotheker-eigenaar",
    foto: "https://placehold.co/80x80/1A7A3C/white?text=MB",
    afbeelding: "https://placehold.co/800x500/1A7A3C/white?text=Apotheek+Van+der+Berg",
    resultaten: [
      "30% kostenreductie",
      "98% op-tijd bezorging",
      "Volledig CO₂-neutraal",
      "Bekende koeriers voor patiënten",
    ],
    uitdaging:
      "Apotheek Van der Berg groeide snel maar de eigen bezorgdienst kon het tempo niet bijhouden. Kosten liepen op en de kwaliteit daalde.",
    oplossing:
      "Greenspeed nam de volledige bezorgoperatie over, inclusief planning via de AIroute Planner en vaste koeriers per wijk.",
    resultaat:
      "Na drie maanden was de klanttevredenheid significant gestegen en de operationele kosten fors gedaald.",
  },
  {
    slug: "boots-apotheek-rotterdam",
    naam: "Boots Apotheek Rotterdam",
    stad: "Rotterdam",
    quote:
      "De AIroute Planner is een game-changer. We hebben 40% minder telefoontjes van patiënten die vragen waar hun medicijnen zijn.",
    naam_contact: "Ing. P. Janssen",
    functie: "Filiaalmanager",
    foto: "https://placehold.co/80x80/1A7A3C/white?text=PJ",
    afbeelding: "https://placehold.co/800x500/1A7A3C/white?text=Boots+Apotheek+Rotterdam",
    resultaten: [
      "40% minder klantvragen",
      "Real-time tracking voor patiënten",
      "Duurzame fietsbezorging",
      "Volledige AIS-koppeling",
    ],
    uitdaging:
      "Patiënten belden voortdurend voor updates over hun leveringen. Het apotheekteam besteedde te veel tijd aan statusupdates.",
    oplossing:
      "De AIroute Planner van Greenspeed met real-time tracking-links per SMS/email en directe AIS-koppeling met hun apotheeksysteem.",
    resultaat:
      "Het aantal inkomende telefoontjes over bezorgingen daalde met 40% in de eerste maand.",
  },
  {
    slug: "gezondheidscentrum-eindhoven",
    naam: "Gezondheidscentrum Eindhoven",
    stad: "Eindhoven",
    quote:
      "Onze patiënten kennen de koeriers nu bij naam. Dat vertrouwen is onbetaalbaar voor een zorginstelling.",
    naam_contact: "Dr. S. Peeters",
    functie: "Directeur Zorg",
    foto: "https://placehold.co/80x80/1A7A3C/white?text=SP",
    afbeelding: "https://placehold.co/800x500/1A7A3C/white?text=Gezondheidscentrum+Eindhoven",
    resultaten: [
      "Vaste koeriers per wijk",
      "100% betrouwbare levering",
      "GDPR-compliant processen",
      "Directe integratie met zorgdossier",
    ],
    uitdaging:
      "Als gezondheidscentrum was privacy en continuïteit cruciaal. Wisselende koeriers zorgden voor onrust bij kwetsbare patiënten.",
    oplossing:
      "Greenspeed wees vaste, getrainde koeriers toe aan specifieke wijken zodat patiënten vertrouwde gezichten zien.",
    resultaat:
      "Patiënttevredenheid steeg naar een 9.2 en het aantal klachten over bezorging daalde naar nul.",
  },
];

// Vacatures per stad
export const vacatures = [
  {
    stad: "Amsterdam",
    slug: "amsterdam",
    uren: "20-40 uur per week",
    beschrijving:
      "Bezorg medicijnen per fiets door de binnenstad en omliggende wijken van Amsterdam.",
    vereisten: ["Rijbewijs B of fietsvaardigheid", "Representatief", "Betrouwbaar"],
    salaris: "€14,50 - €16,00 per uur",
    extra: "Reiskostenvergoeding + maaltijdvergoeding",
  },
  {
    stad: "Rotterdam",
    slug: "rotterdam",
    uren: "24-40 uur per week",
    beschrijving:
      "Word koerier in Rotterdam en bezorg medicijnen per e-bike door alle Rotterdamse wijken.",
    vereisten: ["Betrouwbaar en punctueel", "Klantvriendelijk", "Goede conditie"],
    salaris: "€14,50 - €16,00 per uur",
    extra: "Pensioensopbouw + vakantiegeld",
  },
  {
    stad: "Den Haag",
    slug: "den-haag",
    uren: "16-40 uur per week",
    beschrijving:
      "Bezorg medicijnen aan patiënten in Den Haag en omstreken. Flexibele werktijden mogelijk.",
    vereisten: ["Kennis van Den Haag en omgeving", "Betrouwbaar", "Zelfstandig"],
    salaris: "€14,50 - €16,50 per uur",
    extra: "Flexibele roosters mogelijk",
  },
  {
    stad: "Utrecht",
    slug: "utrecht",
    uren: "20-40 uur per week",
    beschrijving:
      "Fietskoerier in Utrecht — een groene stad die perfect past bij onze duurzame missie.",
    vereisten: ["Fietservaring in stedelijk gebied", "Representatief voorkomen", "Nauwkeurig"],
    salaris: "€14,50 - €16,00 per uur",
    extra: "Fiets van de zaak",
  },
  {
    stad: "Eindhoven",
    slug: "eindhoven",
    uren: "20-32 uur per week",
    beschrijving:
      "Bezorg medicijnen en zorgproducten in Eindhoven en omliggende gemeenten.",
    vereisten: ["Rijbewijs B gewenst", "Klantvriendelijk", "Zelfstandig werken"],
    salaris: "€14,50 - €15,50 per uur",
    extra: "Kilometervergoeding + telefoonvergoeding",
  },
  {
    stad: "Groningen",
    slug: "groningen",
    uren: "16-40 uur per week",
    beschrijving:
      "De fietsstad van Nederland — jij bent onze koerier in Groningen!",
    vereisten: ["Kennis van Groningen", "Sportief", "Betrouwbaar en punctueel"],
    salaris: "€14,50 - €15,50 per uur",
    extra: "Reiskostenvergoeding + kerstpakket",
  },
];

// FAQ Overstappen pagina
export const faqOverstappen = [
  {
    vraag: "Hoe lang duurt het overstapproces?",
    antwoord:
      "Het volledige overstapproces duurt gemiddeld 2 tot 4 weken. In deze periode regelen we de koppeling met uw AIS-systeem, stellen we de bezorgroutes in en trainen we onze koeriers op uw specifieke situatie.",
  },
  {
    vraag: "Moeten we ons huidige apotheeksysteem aanpassen?",
    antwoord:
      "Nee. Greenspeed koppelt via onze AIroute Planner direct met alle gangbare apotheeksystemen (PharmaPartners, SFA, Medicom). Er zijn geen aanpassingen aan uw kant nodig.",
  },
  {
    vraag: "Wat gebeurt er met onze huidige koeriers?",
    antwoord:
      "We bespreken dit altijd individueel. In veel gevallen kunnen bestaande koeriers in dienst komen bij Greenspeed of een passende transitie maken. We regelen dit zorgvuldig en met respect.",
  },
  {
    vraag: "Is er een minimum contractduur?",
    antwoord:
      "We werken met een standaard contract van 12 maanden. Daarna is de overeenkomst maandelijks opzegbaar. We geloven dat tevreden klanten vanzelf blijven.",
  },
  {
    vraag: "Hoe werkt de facturatie?",
    antwoord:
      "U ontvangt maandelijks een gespecificeerde factuur per apotheek of locatie. U kunt kiezen voor een vast maandbedrag of een variabel tarief op basis van het werkelijk aantal bezorgingen.",
  },
  {
    vraag: "Wat als er iets mis gaat met een bezorging?",
    antwoord:
      "Ons team is 7 dagen per week bereikbaar. Bij problemen grijpen we direct in. Elke bezorging is herleidbaar via ons track-and-trace systeem. U en de patiënt worden altijd proactief geïnformeerd.",
  },
];

// FAQ AIroute Planner
export const faqAiroutePlanner = [
  {
    vraag: "Met welke apotheeksystemen werkt de AIroute Planner?",
    antwoord:
      "De AIroute Planner koppelt naadloos met PharmaPartners, SFA, Medicom, Pharmacom en alle andere gangbare AIS-systemen via HL7 en REST-API. Setup duurt gemiddeld één werkdag.",
  },
  {
    vraag: "Hebben patiënten een app nodig voor tracking?",
    antwoord:
      "Nee. Patiënten ontvangen automatisch een SMS of e-mail met een persoonlijke tracking-link. Geen app-download vereist. Ze zien real-time waar hun medicijnen zijn.",
  },
  {
    vraag: "Hoe gaat de AIroute Planner om met spoedleveringen?",
    antwoord:
      "Spoedbezorgingen worden automatisch geprioriteerd in de route-algoritmes. De koerier krijgt direct een notificatie en de route wordt real-time aangepast.",
  },
];

// FAQ Homepage
export const faqHomepage = [
  {
    vraag: "In welke steden is Greenspeed actief?",
    antwoord:
      "Greenspeed is actief in Amsterdam, Rotterdam, Den Haag, Utrecht, Eindhoven en Groningen. We breiden continu uit naar nieuwe steden.",
  },
  {
    vraag: "Hoe duurzaam is Greenspeed echt?",
    antwoord:
      "Al onze bezorgingen gebeuren per fiets of e-bike. We compenseren alle resterende emissies via gecertificeerde klimaatprojecten. Netto CO₂-uitstoot: nul.",
  },
];

// Comparison table
export const comparisonItems = [
  {
    zelfdoen: "Hoge vaste personeelskosten",
    greenspeed: "Flexibele tarieven op basis van gebruik",
  },
  {
    zelfdoen: "Zelf verantwoordelijk voor ziektevervanging",
    greenspeed: "Wij regelen altijd een vervanger",
  },
  {
    zelfdoen: "Geen real-time inzicht in bezorgstatus",
    greenspeed: "Live track & trace voor apotheek én patiënt",
  },
  {
    zelfdoen: "Handmatige routeplanning kost uren",
    greenspeed: "AI-gestuurde routeplanning in seconden",
  },
  {
    zelfdoen: "CO₂-uitstoot door auto-bezorgingen",
    greenspeed: "100% fiets- en e-bikebezorging = CO₂ = 0",
  },
  {
    zelfdoen: "Wisselende koeriers, geen vertrouwdheid",
    greenspeed: "Vaste, vertrouwde koeriers per wijk",
  },
  {
    zelfdoen: "Geen koppeling met apotheeksysteem",
    greenspeed: "Volledige AIS-integratie inbegrepen",
  },
];

// Features/expertises
export const expertises = [
  {
    icon: "Bike",
    titel: "Duurzame bezorging",
    beschrijving:
      "Al onze bezorgingen gaan per fiets of e-bike. Nul uitstoot, maximale betrouwbaarheid.",
  },
  {
    icon: "Brain",
    titel: "AIroute Planner",
    beschrijving:
      "Slimme AI-routeplanning optimaliseert elke rit en koppelt direct met uw AIS-systeem.",
  },
  {
    icon: "Euro",
    titel: "Grip op kosten",
    beschrijving:
      "Transparante tarieven zonder verrassingen. U betaalt alleen voor wat u daadwerkelijk bezorgt.",
  },
  {
    icon: "Eye",
    titel: "Inzicht in bezorging",
    beschrijving:
      "Real-time dashboard en automatische notificaties houden u en uw patiënten altijd op de hoogte.",
  },
  {
    icon: "RefreshCw",
    titel: "Continuïteit gegarandeerd",
    beschrijving:
      "Bij ziekte of afwezigheid zorgen wij altijd voor een vervangende koerier. Geen enkele bezorging gaat mis.",
  },
  {
    icon: "Users",
    titel: "Bekende gezichten",
    beschrijving:
      "Vaste koeriers per wijk zorgen voor vertrouwde gezichten bij uw patiënten.",
  },
  {
    icon: "Shield",
    titel: "GDPR & privacy",
    beschrijving:
      "Alle processen zijn GDPR-compliant. Medicijnen worden discreet en veilig afgeleverd.",
  },
  {
    icon: "Plug",
    titel: "AIS-koppelingen",
    beschrijving:
      "Directe integratie met PharmaPartners, SFA, Medicom en alle andere apotheeksystemen.",
  },
];

// AIS partners
export const aisPartners = [
  { naam: "PharmaPartners", logo: "https://placehold.co/160x60/f3f4f6/374151?text=PharmaPartners" },
  { naam: "SFA", logo: "https://placehold.co/160x60/f3f4f6/374151?text=SFA" },
  { naam: "Medicom", logo: "https://placehold.co/160x60/f3f4f6/374151?text=Medicom" },
  { naam: "Pharmacom", logo: "https://placehold.co/160x60/f3f4f6/374151?text=Pharmacom" },
  { naam: "Aposys", logo: "https://placehold.co/160x60/f3f4f6/374151?text=Aposys" },
];

// Apotheek logos
export const apotheekLogos = [
  { naam: "BENU Apotheek", logo: "https://placehold.co/140x50/f3f4f6/374151?text=BENU" },
  { naam: "Boots Apotheek", logo: "https://placehold.co/140x50/f3f4f6/374151?text=Boots" },
  { naam: "DA Apotheek", logo: "https://placehold.co/140x50/f3f4f6/374151?text=DA" },
  { naam: "DocMorris", logo: "https://placehold.co/140x50/f3f4f6/374151?text=DocMorris" },
  { naam: "Etos Apotheek", logo: "https://placehold.co/140x50/f3f4f6/374151?text=Etos" },
  { naam: "Service Apotheek", logo: "https://placehold.co/140x50/f3f4f6/374151?text=Service+Apotheek" },
];

// AIroute Planner features
export const airouteFeatures = [
  {
    icon: "Route",
    titel: "Slimme routeoptimalisatie",
    beschrijving:
      "AI berekent elke dag opnieuw de meest efficiënte routes op basis van verkeer, tijdvensters en prioriteiten.",
  },
  {
    icon: "Link",
    titel: "AIS-koppeling",
    beschrijving:
      "Automatische import van te bezorgen medicijnen vanuit uw apotheeksysteem. Geen handmatig invoeren meer.",
  },
  {
    icon: "MapPin",
    titel: "Real-time tracking",
    beschrijving:
      "Patiënten ontvangen een persoonlijke tracking-link per SMS of e-mail. Geen vragen meer waar de bezorging blijft.",
  },
  {
    icon: "Bell",
    titel: "Proactieve notificaties",
    beschrijving:
      "Automatische meldingen bij vertraging, succesvolle bezorging of als de koerier eraan komt.",
  },
  {
    icon: "BarChart2",
    titel: "Rapportage & inzicht",
    beschrijving:
      "Volledig dashboard met bezorghistorie, prestatie-KPI's en kostenoverzicht per locatie.",
  },
  {
    icon: "Zap",
    titel: "Spoedbezorging",
    beschrijving:
      "Spoedorders worden automatisch geprioriteerd en direct toegewezen aan de dichtstbijzijnde koerier.",
  },
  {
    icon: "Lock",
    titel: "Veilig & privacyproof",
    beschrijving:
      "Alle data is versleuteld en GDPR-compliant. Patiëntgegevens worden nooit gedeeld met derden.",
  },
];

// Step process overstappen
export const stappenOverstappen = [
  {
    nummer: 1,
    titel: "Kennismakingsgesprek",
    beschrijving:
      "We bespreken uw huidige situatie, wensen en verwachtingen. Volledig vrijblijvend en altijd op locatie bij u.",
  },
  {
    nummer: 2,
    titel: "Maatwerkvoorstel",
    beschrijving:
      "Binnen 5 werkdagen ontvangt u een gedetailleerd voorstel met routing, tarieven en implementatieplan.",
  },
  {
    nummer: 3,
    titel: "Implementatie & integratie",
    beschrijving:
      "Onze technische specialisten koppelen de AIroute Planner aan uw AIS-systeem. Uw team krijgt een korte training.",
  },
  {
    nummer: 4,
    titel: "Live & operationeel",
    beschrijving:
      "Na aftrap begeleiden we u de eerste weken intensief. Ons supportteam is 7 dagen per week bereikbaar.",
  },
];

// Duurzaamheid stats
export const duurzaamheidStats = [
  { cijfer: "100%", label: "Fiets- en e-bikebezorging" },
  { cijfer: "0 kg", label: "CO₂-uitstoot per bezorging" },
  { cijfer: "50.000+", label: "Bezorgingen per jaar" },
  { cijfer: "6", label: "Steden actief" },
];

// Waarom werken bij Greenspeed
export const waaromGreenspeed = [
  {
    icon: "Euro",
    titel: "Goed salaris",
    beschrijving: "Marktconform salaris met jaarlijkse indexatie en extra's zoals reiskostenvergoeding.",
  },
  {
    icon: "Clock",
    titel: "Flexibele werktijden",
    beschrijving: "Kies je eigen uren in overleg. Parttime en fulltime mogelijk.",
  },
  {
    icon: "Heart",
    titel: "Betekenisvol werk",
    beschrijving: "Jij bezorgt medicijnen aan mensen die er écht op rekenen. Dat voelt goed.",
  },
  {
    icon: "Users",
    titel: "Gezellig team",
    beschrijving: "Kleinschalige teams per stad met een fijne sfeer en regelmatige teamactiviteiten.",
  },
  {
    icon: "TrendingUp",
    titel: "Doorgroeimogelijkheden",
    beschrijving: "Van koerier naar teamleider of planner — er is ruimte om te groeien binnen Greenspeed.",
  },
];
