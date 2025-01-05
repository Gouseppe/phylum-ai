import { Question } from "@/types/question";

export const PHYLUMS = [
  [1, 0, 0, 0, 0, 0, 0], // Protozoarios
  [2, 1, 0, 0, 0, 0, 0], // Poriferos
  [2, 2, 1, 0, 0, 0, 0], // Equinodermos
  [2, 2, 2, 0, 1, 0, 0], // Ctnoforos
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

export const QUESTIONS: Question[] = [
  {
    text: "Tu organismo es unicelular o multicelular",
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
    text: "Tu organismo posee tejidos verdaderos?",
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
    text: "Que tipo de simetria tiene tu organismo?",
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
    text: "Que tipo de revestimiento tiene?",
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
    text: "Tienen sistema digestivo completo o incompleto?",
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
    text: "Son esquixocelomados o enterocelomados?",
    Options: [
      {
        text: "enterocelomados",
        value: 1,
      },
      {
        text: "Esquizocelomados",
        value: 2,
      },
    ],
  },
  {
    text: "Tiene manto y concha, esqueleto hidrostatatico o exoesqueleto?",
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
