import { useState } from "react";

export const useMotorDeInferencia = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState([0] as number[]);

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

  const undo = () => {
    setIndex(index - 1);
    setCurrentQuestion(questions[index - 1]);
    return questions[index - 1];
  };

  const clear = () => {
    console.log(questions);
    console.log("respuesta: ", questions.slice(0, index + 1), index);
    setQuestions(questions.slice(0, index + 1));
  };

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
    currentQuestion,
  };
};
