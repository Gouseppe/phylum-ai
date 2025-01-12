import { useState } from "react";
import { PHYLUMS } from "@/config";

/*
DOCUMENTACION PARA ENTENDER EL USO DEL DEL HOOK

- Cada pregunta que tenemos en el sistema esta asociada a un numero que representa la posicion relativa que tendria en caso que se respondieran todas las preguntas que existen en el programa

- Puede pasar que aunque una pregunta tenga un numero mayor a otra, se haga antes, esto se debe a que se esta llendo por un camino en el que no se tomara todas las preguntas y por ende cambia el orden 'original' 
*/

export const useMotorDeInferencia = () => {
  // Guarda el numero asociado a la pregunta actual
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // Guarda la posicion en la que nos encontramos del estado questions
  const [index, setIndex] = useState(0);
  // Guarda el numero asociado a las preguntas en el orden que se hicieron
  const [questions, setQuestions] = useState([0] as number[]);
  // Guarda las repuestas que se hicieron. Cada respuestas esta en la posicion de cada pregunta con relacion al numero asociado a la pregunta
  const [answers, setAnswers] = useState<number[]>(new Array(7).fill(-1));

  const setAnswerNew = (indexAnswer: number, answer = -1) => {
    const aux = [...answers];
    aux[indexAnswer] = answer;
    console.log(aux);
    setAnswers(aux);
  };

  // Revisa si la combinacion actual que tiene el usuario es igual a una combinacion asociada a un phylum existente
  const isThereAPhylum = (): boolean => {
    console.log(answers.map((a) => (a === -1 ? 0 : a)));
    const auxAnswer = answers.map((a) => (a === -1 ? 0 : a));
    return PHYLUMS.some((e) =>
      e.every((element, index) => element === auxAnswer[index])
    );
  };

  // Nos permite obtener la siguiente pregunta que se debe hacer en vaso a las anteriores respuestas del usuario
  const getNextQuestion = (answer: number) => {
    setIndex(index + 1);
    if (index !== questions.length - 1) {
      setCurrentQuestion(questions[index + 1]);
      return questions[index + 1];
    }
    if (currentQuestion === 2 && answer === 2) {
      setQuestions([...questions, 4]);
      setCurrentQuestion(4);
      return 4;
    }
    if (currentQuestion === 2 && answer === 3) {
      setQuestions([...questions, 3]);
      setCurrentQuestion(3);
      return 3;
    }
    if (currentQuestion === 3 && answer === 3) {
      setQuestions([...questions, 5]);
      setCurrentQuestion(5);
      return 5;
    }
    setQuestions([...questions, currentQuestion + 1]);
    setCurrentQuestion(currentQuestion + 1);
    return currentQuestion + 1;
  };
  // Retrocede a una pregunta anterior
  const undo = () => {
    setIndex(index - 1);
    setCurrentQuestion(questions[index - 1]);
    return questions[index - 1];
  };
  // Ayuda a borrar todas las respuestas quse habian dado tomando como inicio de borrado la posicion actual del usuario en las preguntas
  const clear = () => {
    setAnswers((newAnswer) => [
      ...newAnswer.slice(0, currentQuestion + 1),
      ...newAnswer.slice(currentQuestion + 1).fill(-1),
    ]);
    setQuestions(questions.slice(0, index + 1));
  };
  // Permite movernos a una pregunta en especifico usando el numero asignado a las preguntas para moverse
  const goToQuestion = (currentQuestion: number) => {
    const index = questions.indexOf(currentQuestion);
    setIndex(index);
    setCurrentQuestion(questions[index]);
    return questions[index];
  };

  return {
    getNextQuestion,
    undo,
    clear,
    goToQuestion,
    setAnswers: setAnswerNew,
    isThereAPhylum,
    currentQuestion,
    answers,
    questions,
  };
};
