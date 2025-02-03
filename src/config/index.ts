import { PhylumsAnswers, Question } from "@/types/question";

export const PHYLUMS = [
  [1, 0, 0, 0, 0, 0, 0], // Protozoarios
  [2, 1, 0, 0, 0, 0, 0], // Poriferos
  [2, 2, 1, 0, 0, 0, 0], // Equinodermos
  [2, 2, 2, 0, 1, 0, 0], // Ctenoforos
  [2, 2, 2, 0, 2, 0, 0], // Cnidardos
  [2, 2, 3, 1, 1, 0, 0], // Nemertinos
  [2, 2, 3, 1, 2, 0, 0], // Platermintos
  [2, 2, 3, 2, 1, 0, 0], // Acantocefalos
  [2, 2, 3, 2, 2, 0, 0], // Asquelmintos
  [2, 2, 3, 3, 0, 1, 0], // Cordados
  [2, 2, 3, 3, 0, 2, 1], // Moluscos
  [2, 2, 3, 3, 0, 2, 2], // Anelidos
  [2, 2, 3, 3, 0, 2, 3], // Artropodos
];

export const PHYLUMS_ANSWERS: PhylumsAnswers = {
  protozoarios: {
    description:
      "Organismos unicelulares, en su mayoría microscópicos, que pueden ser de vida libre o parásitos. Se caracterizan por su movilidad y diversidad en formas de alimentación (autótrofos o heterótrofos).",
    images: ["protozoarios1", "protozoarios2"],
  },
  poriferos: {
    description:
      "Conocidos como esponjas, son organismos acuáticos, principalmente marinos, que carecen de tejidos y órganos. Tienen un cuerpo poroso con canales que filtran el agua para obtener alimento.",
    images: ["poriferos1", "poriferos2"],
  },
  equinodermos: {
    description:
      "Incluyen estrellas de mar, erizos y pepinos de mar. Son animales marinos con simetría radial.",
    images: ["equinodermos1", "equinodermos2"],
  },
  ctenoforos: {
    description:
      "Conocidos como portadores de peines, son animales marinos transparentes y gelatinosos. Se caracterizan por sus filas de peines ciliados que usan para moverse.",
    images: ["ctenoforos1", "ctenoforos2"],
  },
  cnidarios: {
    description:
      "Incluyen medusas, corales y anémonas. Tienen células urticantes llamadas cnidocitos y presentan simetría radial. Pueden tener forma de pólipo o medusa.",
    images: ["cnidarios1", "cnidarios2"],
  },
  nemertinos: {
    description:
      "Gusanos no segmentados, principalmente marinos, con un cuerpo alargado. Tienen un sistema circulatorio simple.",
    images: ["nemertinos1", "nemertinos2"],
  },
  platelmintos: {
    description:
      "Gusanos planos, como las planarias y las tenias. Pueden ser de vida libre o parásitos. Carecen de sistema circulatorio y respiratorio.",
    images: ["platelmintos1", "platelmintos2"],
  },
  acantocefalos: {
    description:
      "Gusanos parásitos. Carecen de sistema digestivo y absorben nutrientes directamente.",
    images: ["acantocefalos1", "acantocefalos2"],
  },
  asquelmintos: {
    description:
      "Un grupo diverso que incluye nematodos y rotíferos. Tienen un cuerpo cilíndrico y no segmentado. Muchos son parásitos, mientras que otros son de vida libre.",
    images: ["asquelmintos1", "asquelmintos2"],
  },
  cordados: {
    description:
      "Incluyen vertebrados (peces, anfibios, reptiles, aves y mamíferos) y algunos invertebrados. Se caracterizan por la presencia de una notocorda, un cordón nervioso dorsal y hendiduras branquiales en alguna etapa de su desarrollo.",
    images: ["cordados1", "cordados2"],
  },
  moluscos: {
    description:
      "Un grupo diverso que incluye caracoles, calamares, pulpos y almejas. Tienen un cuerpo blando, a menudo protegido por una concha calcárea.",
    images: ["moluscos1", "moluscos2"],
  },
  anelidos: {
    description:
      "Gusanos segmentados, como las lombrices de tierra y las sanguijuelas. Tienen un cuerpo dividido en anillos y un sistema circulatorio cerrado.",
    images: ["anelidos1", "anelidos2"],
  },
  artropodos: {
    description:
      "El filo más diverso, incluye insectos, arácnidos, crustáceos y miriápodos. Tienen un exoesqueleto quitinoso, apéndices articulados y cuerpo segmentado.",
    images: ["artropodos1.", "artropodos2"],
  },
};

export const QUESTIONS: Question[] = [
  {
    text: "¿Tu organismo es unicelular o multicelular?",
    userHelper: {
      title: "¿Tu organismo es unicelular o multicelular?",
      description:
        "Un organismo unicelular es como una pequeña 'fábrica' completa dentro de una sola célula, que realiza todas las funciones necesarias para vivir. Un organismo multicelular, como los animales y las plantas, está compuesto por millones o billones de células que trabajan juntas para formar tejidos y órganos.",
      images: ["organismo-unicelular", "organismo-unicelular-2"],
    },
    Options: [
      {
        text: "Unicelular",
        value: 1,
      },
      {
        text: "Multicelular",
        value: 2,
      },
    ],
  },
  {
    text: "¿Tu organismo posee tejidos verdaderos?",
    userHelper: {
      title: "Tejido verdadero",
      description:
        "Un tejido verdadero es un conjunto de células que tienen una estructura similar y trabajan juntas para realizar una función específica dentro de un organismo. Imagina que las células son como los ladrillos de una casa: cada ladrillo tiene una función específica (soportar el peso, aislar del frío, etc.), pero todos juntos forman las paredes y estructuras de la casa. Lo mismo ocurre con las células en un tejido: aunque cada una tiene su propia función, al trabajar juntas forman un tejido que cumple una función más compleja.",
      images: ["tejido-verdadero-1", "tejido-verdadero-2"],
    },
    Options: [
      {
        text: "no",
        value: 1,
      },
      {
        text: "si",
        value: 2,
      },
    ],
  },
  {
    text: "¿Que tipo de simetria tiene tu organismo?",
    userHelper: {
      title: "Simetría en organismos",
      description:
        "La simetría se refiere a la disposición de las partes del cuerpo de un organismo. La simetría radial significa que las partes del cuerpo están dispuestas alrededor de un eje central (como una estrella de mar). La simetría bilateral significa que el organismo tiene un lado izquierdo y derecho que son imágenes especulares (como los humanos). La simetría radial secundaria es una variante de la simetría radial.",
      images: ["simetria-radial", "simetria-bilateral"],
    },
    Options: [
      {
        text: "Radial secundaria",
        value: 1,
      },
      {
        text: "Radial",
        value: 2,
      },
      {
        text: "Bilateral",
        value: 3,
      },
    ],
  },
  {
    text: "¿Que tipo de revestimiento tiene?",
    userHelper: {
      title: "Tipos de revestimiento",
      description:
        "El revestimiento se refiere a la cavidad corporal de un organismo. Los acelomados no tienen cavidad corporal (nulo), los pseudocelomados tienen una cavidad parcialmente revestida, y los celomados tienen una cavidad completamente revestida por tejido mesodérmico.",
      images: ["revestimiento-acelomado", "revestimiento-celomado"],
    },
    Options: [
      {
        text: "Acelomados (nulo)",
        value: 1,
      },
      {
        text: "Pseudocelomados (parcial)",
        value: 2,
      },
      {
        text: "celomados (Completo)",
        value: 3,
      },
    ],
  },
  {
    text: "¿Tienen sistema digestivo completo o incompleto?",
    userHelper: {
      title: "Sistema digestivo",
      description:
        "Un sistema digestivo completo tiene una boca y un ano separados, lo que permite que el alimento fluya en una sola dirección. Un sistema digestivo incompleto tiene una sola abertura que sirve tanto para la ingestión como para la excreción.",
      images: ["sistema-digestivo-completo", "sistema-digestivo-incompleto"],
    },
    Options: [
      {
        text: "Completo",
        value: 1,
      },
      {
        text: "incompleto",
        value: 2,
      },
    ],
  },
  {
    text: "¿Son esquixocelomados o enterocelomados?",
    userHelper: {
      title: "Esquizocelomados vs Enterocelomados",
      description:
        "Los esquizocelomados son organismos cuya cavidad corporal se forma por la división del mesodermo ( una de las tres capas principales de células en el embrión durante el desarrollo temprano). Los enterocelomados son organismos cuya cavidad corporal se forma a partir de bolsas del tubo digestivo embrionario.",
      images: ["esquizocelomados", "enterocelomados"],
    },
    Options: [
      {
        text: "Enterocelomados",
        value: 1,
      },
      {
        text: "Esquizocelomados",
        value: 2,
      },
    ],
  },
  {
    text: "¿Tiene manto y concha, esqueleto hidrostatatico o exoesqueleto?",
    userHelper: {
      title: "Estructuras de soporte",
      description:
        "El manto y la concha son características de los moluscos, que secretan una concha calcárea para protección. El esqueleto hidrostático es una cavidad llena de líquido que proporciona soporte (como en los gusanos). El exoesqueleto es una cubierta externa dura que protege y soporta el cuerpo (como en los artrópodos).",
      images: ["manto-concha", "esqueleto-hidrostatico", "exoesqueleto"],
    },
    Options: [
      {
        text: "Manto y concha",
        value: 1,
      },
      {
        text: "Esqueleto hidrostatico",
        value: 2,
      },
      {
        text: "Exoesqueleto",
        value: 3,
      },
    ],
  },
];
