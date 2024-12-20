import { Question } from "@/types/question";

export const PHYLUMS = [
  [1, 0, 0, 0, 0, 0, 0],
  [2, 1, 0, 0, 0, 0, 0],
  [2, 2, 1, 0, 0, 0, 0],
  [2, 2, 2, 0, 1, 0, 0],
  [2, 2, 2, 0, 2, 0, 0],
  [2, 2, 3, 1, 1, 0, 0],
  [2, 2, 3, 1, 2, 0, 0],
  [2, 2, 3, 2, 1, 0, 0],
  [2, 2, 3, 2, 2, 0, 0],
  [2, 2, 3, 3, 0, 1, 0],
  [2, 3, 3, 3, 0, 2, 1],
  [2, 3, 3, 3, 0, 2, 2],
  [2, 3, 3, 3, 0, 2, 3],
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
        value: 0,
      },
      {
        text: "si",
        value: 1,
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
      {
        text: "Nulo",
        value: 0,
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
