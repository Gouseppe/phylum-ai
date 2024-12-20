import bgVideo from "@/assets/bg/video/bacterias.mp4";
import Button from "./components/Button";
// import { useState } from "react";
import { QUESTIONS } from "@/config/index";
import { RadioGroup, RadioGroupItem } from "./components/ui/radio-group";
import { Label } from "./components/ui/label";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import { useMotorDeInferencia } from "./hooks/phylumAi";

// type Respuesta = {
//   pregunta: number;
//   value: number;
// };

function App() {
  const {
    getNextQuestion,
    undo,
    clear,
    goToQuestion,
    // isThereAPhylum,
    setAnswers,
    currentQuestion: preguntaActual,
    answers,
    questions,
  } = useMotorDeInferencia();

  // const [respuestas, setRespuestas] = useState<Respuesta[]>(
  //   new Array(QUESTIONS.length)
  //     .fill("")
  //     .map((_, index) =>
  //       index === 0 ? { pregunta: 0, value: -1 } : { pregunta: -1, value: -1 }
  //     )
  // );
  // useEffect(() => {
  //   console.log(respuestas);
  // }, [respuestas]);
  // const [cuestionarioFinalizado, setCuestionarioFinalizado] = useState(false);

  const handleRespuestaSeleccionada = (respuesta: string) => {
    const nuevasRespuestas = [...answers];

    if (nuevasRespuestas[preguntaActual] !== -1) {
      // nuevasRespuestas[preguntaActual].value = Number(respuesta);
      // nuevasRespuestas[preguntaActual].pregunta = preguntaActual;
      clear();
      setAnswers(preguntaActual, Number(respuesta));
    } else {
      setAnswers(preguntaActual, Number(respuesta));
    }
  };

  const handleSiguientePregunta = () => {
    if (preguntaActual < QUESTIONS.length - 1) {
      const nextQuestion = getNextQuestion(answers[preguntaActual]);
      setAnswers(nextQuestion);
    }
  };

  const handlePreguntaAnterior = () => {
    if (preguntaActual > 0) {
      // esto tengo que quitarlo porque ya no estoy guardando la pregunta, pero esto cambia la logica del renderizado de las preguntas
      // ya que ahora no puedo tomar encuenta el vlaor de la pregunta en el objeto porque yano lo traajo con un objeto ni con ese valor
      // if (respuestas[preguntaActual].value === -1) {
      //   respuestas[preguntaActual].pregunta = -1;
      // }
      undo();
    }
  };

  return (
    <div className="layout m-0 w-svw h-svh flex items-center justify-center flex-row ">
      <video
        src={bgVideo}
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full z-[-1] blur-sm object-cover"
      ></video>
      <div className="flex flex-row items-start gap-8 w-full justify-center">
        {/* contenedor de las preguntas respondidas */}
        <div className="bg-slate-50 flex flex-col rounded-md overflow-hidden">
          {questions.map((value) => {
            return (
              <div
                key={value}
                onClick={() => {
                  goToQuestion(value);
                }}
                className="p-2 cursor-pointer hover:bg-slate-500"
              >
                <div>pregunta: {QUESTIONS[Number(value)].text}</div>
                <div>
                  valor:{" "}
                  {QUESTIONS[Number(value)].Options.filter(
                    (e) => e.value === Number(answers[value])
                  )[0]?.text || "No respondida"}
                </div>
              </div>
            );
          })}
        </div>
        {/* contenedor de la pregunta actual */}
        <div className="flex flex-col gap-4 w-3/4 max-w-xl">
          <div className="flex bg-slate-50 rounded-md p-4">
            {QUESTIONS[preguntaActual]?.text || "nada"}
          </div>
          <div className="bg-slate-50 rounded-md p-4">
            <div>
              <RadioGroup
                value={String(answers[preguntaActual])}
                onValueChange={handleRespuestaSeleccionada}
              >
                {QUESTIONS[preguntaActual].Options.map((opcion, index) => (
                  <div key={index} className="flex items-center space-x-2 mb-4">
                    <RadioGroupItem
                      value={String(opcion.value)}
                      id={`opcion-${index}`}
                    />
                    <Label htmlFor={`opcion-${index}`}>{opcion.text}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="flex flex-row justify-between gap-2">
              <div className="flex flex-row gap-1">
                <Button
                  onClick={() => handlePreguntaAnterior()}
                  text="anterior"
                  variant="outline"
                >
                  <ChevronLeft />
                </Button>

                <Button
                  onClick={() => handleSiguientePregunta()}
                  text="siguiente"
                  variant="outline"
                  iconPosition="right"
                >
                  <ChevronRight />
                </Button>
              </div>
              <Button
                onClick={() => alert("viva chavez no joda")}
                text="terminar analisis"
                variant="solid"
                bgColor="#2B2B2B"
                textColor="white"
              >
                <CheckCircle />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
