export interface SubPage {
  id: string
  title: string
  type: 'text' | 'video' | 'photo' | 'link'
  content: string
  videoUrl?: string
  photoUrl?: string
  linkUrl?: string
  linkLabel?: string
}

export interface Module {
  id: string
  number: number
  title: string
  icon: string
  description: string
  subPages: SubPage[]
  quizQuestion: {
    question: string
    options: string[]
    correctIndex: number
  }
}

export const modules: Module[] = [
  {
    id: 'routes',
    number: 1,
    title: 'Het maken van routes',
    icon: '🗺️',
    description: 'Leer hoe je routes plant en uitvoert met de IBI-app, inclusief wat te doen bij storingen.',
    subPages: [
      {
        id: 'ibi-intro',
        title: 'IBI introductie',
        type: 'text',
        content: '[Hier komt de instructietekst voor: IBI introductie. Voeg hier de definitieve inhoud toe.]',
      },
      {
        id: 'ibi-instructie',
        title: 'IBI instructie',
        type: 'text',
        content: '[Hier komt de instructietekst voor: IBI instructie. Voeg hier de definitieve inhoud toe.]',
      },
      {
        id: 'ibi-uitval',
        title: 'Wat te doen als IBI uitvalt',
        type: 'text',
        content: '[Hier komt de instructietekst voor: Wat te doen als IBI uitvalt. Voeg hier de definitieve inhoud toe.]',
      },
      {
        id: 'tips-tricks',
        title: 'Tips & tricks',
        type: 'text',
        content: '[Hier komt de instructietekst voor: Tips & tricks. Voeg hier de definitieve inhoud toe.]',
      },
      {
        id: 'adressen-invoeren',
        title: 'Adressen invoeren',
        type: 'video',
        content: 'Instructievideo voor het invoeren van adressen in IBI.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        id: 'nummer-volgorde',
        title: 'Nummer volgorde vasthouden',
        type: 'video',
        content: 'Hoe je de juiste volgorde aanhoudt.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        id: 'sorteren-bak',
        title: 'Sorteren in de bak',
        type: 'video',
        content: 'Hoe je medicijnen sorteert in de transportbak.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        id: 'ibi-handleiding',
        title: 'IBI handleiding',
        type: 'link',
        content: 'De volledige handleiding van de IBI app vind je via onderstaande link.',
        linkUrl: 'https://www.ibi-app.com/handleiding/',
        linkLabel: 'Open IBI handleiding',
      },
    ],
    quizQuestion: {
      question: 'Wat doe je als de IBI-app uitvalt tijdens een bezorgronde?',
      options: [
        'Route annuleren en terug naar depot',
        'Bellen met de apotheek voor instructies',
        'De papieren routelijst gebruiken als backup',
        'Wachten tot de app weer werkt',
      ],
      correctIndex: 2,
    },
  },
  {
    id: 'fiets',
    number: 2,
    title: 'De bezorgfiets',
    icon: '🚲',
    description: 'Alles over de bezorgfietsen: gebruik, onderhoud, accu en stalling.',
    subPages: [
      {
        id: 'radrunner',
        title: 'RadRunner',
        type: 'text',
        content: '[Hier komt de instructietekst voor: RadRunner. Voeg hier de definitieve inhoud toe.]',
      },
      {
        id: 'bullitt',
        title: 'Bullitt',
        type: 'text',
        content: '[Hier komt de instructietekst voor: Bullitt. Voeg hier de definitieve inhoud toe.]',
      },
      {
        id: 'stalling',
        title: 'Stalling',
        type: 'text',
        content: '[Hier komt de instructietekst voor: Stalling. Voeg hier de definitieve inhoud toe.]',
      },
      {
        id: 'slot',
        title: 'Slot',
        type: 'text',
        content: '[Hier komt de instructietekst voor: Slot. Voeg hier de definitieve inhoud toe.]',
      },
      {
        id: 'accu-lader',
        title: 'Accu & lader',
        type: 'text',
        content: '[Hier komt de instructietekst voor: Accu & lader. Voeg hier de definitieve inhoud toe.]',
      },
      {
        id: 'telefoonhouder',
        title: 'Telefoonhouder',
        type: 'text',
        content: '[Hier komt de instructietekst voor: Telefoonhouder. Voeg hier de definitieve inhoud toe.]',
      },
      {
        id: 'onderhoud',
        title: 'Onderhoud',
        type: 'text',
        content: '[Hier komt de instructietekst voor: Onderhoud. Voeg hier de definitieve inhoud toe.]',
      },
      {
        id: 'lockers',
        title: 'Lockers',
        type: 'text',
        content: '[Hier komt de instructietekst voor: Lockers. Voeg hier de definitieve inhoud toe.]',
      },
      {
        id: 'accu-plaatsen',
        title: 'Plaatsen accu',
        type: 'video',
        content: 'Video: hoe plaats je de accu correct in de fiets.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        id: 'accu-laden',
        title: 'Accu laden',
        type: 'video',
        content: 'Video: hoe laad je de accu op de juiste manier.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
    ],
    quizQuestion: {
      question: 'Wat doe je als de accu van de fiets leeg is?',
      options: [
        'Gewoon doorrijden',
        'De accu op de juiste manier opladen via de lader',
        'Een andere fiets pakken zonder te melden',
        'De route overslaan',
      ],
      correctIndex: 1,
    },
  },
  {
    id: 'auto',
    number: 3,
    title: 'De bezorgauto',
    icon: '🚐',
    description: 'Regels en procedures voor het gebruik van de elektrische bezorgauto.',
    subPages: [
      {
        id: 'auto-accu-laden',
        title: 'Accu laden',
        type: 'text',
        content: '[Hier komt de instructietekst voor: Accu laden. Voeg hier de definitieve inhoud toe.]',
      },
      {
        id: 'lekke-band',
        title: 'Lekke band?',
        type: 'text',
        content: '[Hier komt de instructietekst voor: Lekke band?. Voeg hier de definitieve inhoud toe.]',
      },
      {
        id: 'schade',
        title: 'Schade?',
        type: 'text',
        content: '[Hier komt de instructietekst voor: Schade?. Voeg hier de definitieve inhoud toe.]',
      },
      {
        id: 'netjes-opruimen',
        title: 'Netjes opruimen',
        type: 'text',
        content: '[Hier komt de instructietekst voor: Netjes opruimen. Voeg hier de definitieve inhoud toe.]',
      },
      {
        id: 'auto-lader-video',
        title: 'Auto aan de lader',
        type: 'video',
        content: 'Video: hoe zet je de auto correct aan de lader.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
    ],
    quizQuestion: {
      question: 'Wat doe je als je schade constateert aan de bezorgauto?',
      options: [
        'Negeren en gewoon rijden',
        'Later melden als je tijd hebt',
        'Direct melden bij je leidinggevende en foto\'s maken',
        'Zelf repareren',
      ],
      correctIndex: 2,
    },
  },
  {
    id: 'veiligheid',
    number: 4,
    title: 'Veilig op de weg',
    icon: '⚠️',
    description: 'Verkeersveiligheid, RI&E en verplichte kleding voor een veilige bezorgronde.',
    subPages: [
      {
        id: 'rie',
        title: 'RI&E',
        type: 'text',
        content: '[Hier komt de instructietekst voor: RI&E. Voeg hier de definitieve inhoud toe.]',
      },
      {
        id: 'gedrag-verkeer',
        title: 'Hoe gedraag ik mij in het verkeer?',
        type: 'text',
        content: '[Hier komt de instructietekst voor: Hoe gedraag ik mij in het verkeer?. Voeg hier de definitieve inhoud toe.]',
      },
      {
        id: 'reflectie-regenjack',
        title: 'Reflectie regenjack',
        type: 'photo',
        content: 'Je ziet hier het reflecterende regenjack dat verplicht gedragen wordt bij slechte zichtbaarheid.',
        photoUrl: 'https://placehold.co/600x400/3ab4a0/white?text=Reflectie+regenjack',
      },
    ],
    quizQuestion: {
      question: 'Wat is de juiste houding als fietskoerier in het verkeer?',
      options: [
        'Zo snel mogelijk rijden voor efficiëntie',
        'Verkeersregels volgen, zichtbaar zijn en defensief rijden',
        'Altijd over het fietspad, ook als het verboden is',
        'Gebruik maken van de rijbaan om tijd te winnen',
      ],
      correctIndex: 1,
    },
  },
  {
    id: 'kleding',
    number: 5,
    title: 'Je kleding',
    icon: '👕',
    description: 'Alles over het uniform, verplichte kledingstukken en verantwoordelijkheid.',
    subPages: [
      {
        id: 'helm',
        title: 'Helm',
        type: 'text',
        content: '[Hier komt de instructietekst voor: Helm. Voeg hier de definitieve inhoud toe.]',
      },
      {
        id: 'regenjack',
        title: 'Regenjack',
        type: 'text',
        content: '[Hier komt de instructietekst voor: Regenjack. Voeg hier de definitieve inhoud toe.]',
      },
      {
        id: 'hesje',
        title: 'Hesje',
        type: 'text',
        content: '[Hier komt de instructietekst voor: Hesje. Voeg hier de definitieve inhoud toe.]',
      },
      {
        id: 'verzorgd-uiterlijk',
        title: 'Verzorgd uiterlijk',
        type: 'text',
        content: '[Hier komt de instructietekst voor: Verzorgd uiterlijk. Voeg hier de definitieve inhoud toe.]',
      },
      {
        id: 'verantwoordelijk-kleding',
        title: 'Verantwoordelijk voor kleding',
        type: 'text',
        content: '[Hier komt de instructietekst voor: Verantwoordelijk voor kleding. Voeg hier de definitieve inhoud toe.]',
      },
      {
        id: 'kleding-inleveren',
        title: 'Weer inleveren',
        type: 'text',
        content: '[Hier komt de instructietekst voor: Weer inleveren. Voeg hier de definitieve inhoud toe.]',
      },
      {
        id: 'uniform-foto',
        title: 'Foto: fietskoerier in uniform',
        type: 'photo',
        content: 'Zo ziet een correcte Greenspeed koerier eruit in het veld.',
        photoUrl: 'https://placehold.co/600x400/3ab4a0/white?text=Fietskoerier+in+uniform',
      },
    ],
    quizQuestion: {
      question: 'Wat doe je als een kledingstuk beschadigd of verloren raakt?',
      options: [
        'Zelf vervangen',
        'Het negeren',
        'Dit direct melden bij je leidinggevende',
        'Wachten tot iemand het opmerkt',
      ],
      correctIndex: 2,
    },
  },
  {
    id: 'l1nda',
    number: 6,
    title: 'L1nda',
    icon: '📅',
    description: 'Je rooster, uren doorgeven en bijzonderheden noteren via L1nda.',
    subPages: [
      {
        id: 'je-rooster',
        title: 'Je rooster',
        type: 'text',
        content: '[Hier komt de instructietekst voor: Je rooster. Voeg hier de definitieve inhoud toe.]',
      },
      {
        id: 'gewerkte-uren',
        title: 'Doorgeven gewerkte uren',
        type: 'text',
        content: '[Hier komt de instructietekst voor: Doorgeven gewerkte uren. Voeg hier de definitieve inhoud toe.]',
      },
      {
        id: 'bijzonderheden',
        title: 'Bijzonderheden noteren',
        type: 'text',
        content: '[Hier komt de instructietekst voor: Bijzonderheden noteren. Voeg hier de definitieve inhoud toe.]',
      },
      {
        id: 'uren-aanpassen-video',
        title: 'Aanpassen gewerkte uren',
        type: 'video',
        content: 'Video: hoe pas je gewerkte uren aan in L1nda.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        id: 'bijzonderheden-video',
        title: 'Noteren bijzonderheden',
        type: 'video',
        content: 'Video: hoe noteer je bijzonderheden in L1nda.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
    ],
    quizQuestion: {
      question: 'Via welke applicatie geef je je gewerkte uren door?',
      options: ['WhatsApp', 'L1nda', 'IBI', 'NMBRS'],
      correctIndex: 1,
    },
  },
  {
    id: 'salaris',
    number: 7,
    title: 'Salaris',
    icon: '💰',
    description: 'Uitbetaling, loonstrook, NMBRS en alles rondom je salaris.',
    subPages: [
      {
        id: 'uitbetaling-moment',
        title: '2e of 3e van de maand',
        type: 'text',
        content: '[Hier komt de instructietekst voor: 2e of 3e van de maand. Voeg hier de definitieve inhoud toe.]',
      },
      {
        id: 'nmbrs',
        title: 'NMBRS salarissysteem',
        type: 'text',
        content: '[Hier komt de instructietekst voor: NMBRS salarissysteem. Voeg hier de definitieve inhoud toe.]',
      },
      {
        id: 'loonstrook',
        title: 'Je loonstrook',
        type: 'text',
        content: '[Hier komt de instructietekst voor: Je loonstrook. Voeg hier de definitieve inhoud toe.]',
      },
      {
        id: 'jaaropgave',
        title: 'Jaaropgave',
        type: 'text',
        content: '[Hier komt de instructietekst voor: Jaaropgave. Voeg hier de definitieve inhoud toe.]',
      },
      {
        id: 'vrije-dagen-salaris',
        title: 'Vrije dagen',
        type: 'text',
        content: '[Hier komt de instructietekst voor: Vrije dagen. Voeg hier de definitieve inhoud toe.]',
      },
      {
        id: 'loonstrook-foto',
        title: 'Voorbeeld loonstrook',
        type: 'photo',
        content: 'Een voorbeeld van hoe een loonstrook eruitziet in NMBRS.',
        photoUrl: 'https://placehold.co/600x400/3ab4a0/white?text=Voorbeeld+loonstrook',
      },
    ],
    quizQuestion: {
      question: 'Op welke dag van de maand ontvang je je salaris?',
      options: [
        '1e van de maand',
        '2e of 3e van de nieuwe maand',
        'Laatste dag van de maand',
        '15e van de maand',
      ],
      correctIndex: 1,
    },
  },
  {
    id: 'vrije-dagen',
    number: 8,
    title: 'Vrije dagen & vakantie',
    icon: '🏖️',
    description: 'Hoe je vrije dagen, vakantie en bijzonder verlof correct aanvraagt.',
    subPages: [
      {
        id: 'vrije-dag-aanvragen',
        title: 'Vrije dag aanvragen',
        type: 'text',
        content: '[Hier komt de instructietekst voor: Vrije dag aanvragen. Voeg hier de definitieve inhoud toe.]',
      },
      {
        id: 'vakantie-aanvragen',
        title: 'Vakantie aanvragen',
        type: 'text',
        content: '[Hier komt de instructietekst voor: Vakantie aanvragen. Voeg hier de definitieve inhoud toe.]',
      },
      {
        id: 'bijzonder-verlof',
        title: 'Bijzonder verlof',
        type: 'text',
        content: '[Hier komt de instructietekst voor: Bijzonder verlof. Voeg hier de definitieve inhoud toe.]',
      },
      {
        id: 'email-foto',
        title: 'Voorbeeld aanvraag per e-mail',
        type: 'photo',
        content: 'Zo ziet een correcte verlofaanvraag per e-mail eruit.',
        photoUrl: 'https://placehold.co/600x400/3ab4a0/white?text=Voorbeeld+e-mail+aanvraag',
      },
    ],
    quizQuestion: {
      question: 'Hoe vraag je een vrije dag aan?',
      options: [
        'Gewoon wegblijven',
        'Via L1nda en bevestiging via e-mail aan je leidinggevende',
        'Mondeling aan een collega doorgeven',
        'Via WhatsApp naar iedereen sturen',
      ],
      correctIndex: 1,
    },
  },
  {
    id: 'ziek-melden',
    number: 9,
    title: 'Ziek melden',
    icon: '🤒',
    description: 'Hoe, aan wie en voor welk tijdstip je je ziek meldt bij Greenspeed.',
    subPages: [
      {
        id: 'hoe-ziek-melden',
        title: 'Hoe ziek melden?',
        type: 'text',
        content: '[Hier komt de instructietekst voor: Hoe ziek melden?. Voeg hier de definitieve inhoud toe.]',
      },
      {
        id: 'aan-wie',
        title: 'Aan wie meld je je ziek?',
        type: 'text',
        content: '[Hier komt de instructietekst voor: Aan wie meld je je ziek?. Voeg hier de definitieve inhoud toe.]',
      },
      {
        id: 'voor-welke-tijd',
        title: 'Voor welke tijd?',
        type: 'text',
        content: '[Hier komt de instructietekst voor: Voor welke tijd?. Voeg hier de definitieve inhoud toe.]',
      },
      {
        id: 'op-de-hoogte-houden',
        title: 'Op de hoogte houden',
        type: 'text',
        content: '[Hier komt de instructietekst voor: Op de hoogte houden. Voeg hier de definitieve inhoud toe.]',
      },
      {
        id: 'telefoon-foto',
        title: 'Bellen bij ziekte',
        type: 'photo',
        content: 'Bij ziekte bel je altijd vóór 07:00 uur naar je leidinggevende.',
        photoUrl: 'https://placehold.co/600x400/3ab4a0/white?text=Bellen+bij+ziekte',
      },
    ],
    quizQuestion: {
      question: 'Voor welk tijdstip meld je je ziek?',
      options: [
        'Voor 09:00 uur',
        'Voor 07:00 uur',
        'Zodra je opstaat',
        'Pas als je zeker weet dat je niet kunt werken',
      ],
      correctIndex: 1,
    },
  },
]
