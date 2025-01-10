import { QUESTIONS } from "@/config/index";
import { getPhylum } from "./config/api/backend/requests/phylum";
import bgVideo from "@/assets/bg/video/bacterias.mp4";
// hooks
import { useMotorDeInferencia } from "./hooks/phylumAi";
// icons
import { ChevronLeft, ChevronRight } from "lucide-react";
// components
import { RadioGroup, RadioGroupItem } from "./components/shadcn/radio-group";
import { Label } from "./components/shadcn/label";

import Button from "./components/owner/Button";
import { UserHelper } from "./components/owner/UserHelper";

function App() {
  const {
    getNextQuestion,
    undo,
    clear,
    goToQuestion,
    isThereAPhylum,
    setAnswers,
    currentQuestion: preguntaActual,
    answers,
    questions,
  } = useMotorDeInferencia();

  const handleRespuestaSeleccionada = (respuesta: string) => {
    const nuevasRespuestas = [...answers];

    if (nuevasRespuestas[preguntaActual] !== -1) {
      setAnswers(preguntaActual, Number(respuesta));
      clear();
    } else {
      setAnswers(preguntaActual, Number(respuesta));
    }
  };

  const handleSiguientePregunta = async () => {
    console.log(isThereAPhylum());
    if (isThereAPhylum()) {
      console.log("entroooo");
      const respons = await getPhylum(answers.map((a) => (a === -1 ? 0 : a)));
      alert(respons);
      return;
    }
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
    <div className="layout m-0 w-svw h-svh flex md:items-center items-start md:justify-center flex-row p-4">
      <video
        src={bgVideo}
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full z-[-1] blur-sm object-cover"
      ></video>
      <div className="flex md:flex-row flex-col items-start gap-4 w-full md:justify-center md:h-auto h-full">
        {/* contenedor de las preguntas respondidas */}
        <div className=" flex flex-col rounded-md overflow-auto md:-order-none order-1 p-4 bg-black bg-opacity-30 gap-2">
          {questions.map((value) => {
            return (
              <div
                key={value}
                onClick={() => {
                  goToQuestion(value);
                }}
                className="p-2 cursor-pointer hover:bg-slate-500 bg-white rounded-sm"
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
        <div className="flex flex-col gap-4 md:w-3/4 md:max-w-xl w-full">
          <div className="flex flex-col bg-slate-50 rounded-md p-4">
            {QUESTIONS[preguntaActual]?.text || "nada"}
            {QUESTIONS[preguntaActual].userHelper?.description && (
              <div className="item self-end">
                <UserHelper
                  description={QUESTIONS[preguntaActual].userHelper.description}
                  title={QUESTIONS[preguntaActual].userHelper.title}
                />
              </div>
            )}
          </div>
          <div className="flex flex-col bg-slate-50 rounded-md p-4 gap-3">
            <div>
              <RadioGroup
                value={String(answers[preguntaActual])}
                onValueChange={handleRespuestaSeleccionada}
                className="gap-0"
              >
                {QUESTIONS[preguntaActual].Options.map((opcion, index) => (
                  <div key={index} className="flex items-center space-x-2 ">
                    <RadioGroupItem
                      value={String(opcion.value)}
                      id={`opcion-${index}`}
                    />
                    <Label htmlFor={`opcion-${index}`}>{opcion.text}</Label>
                    {opcion.userHelper && (
                      <UserHelper
                        description={opcion.userHelper.description}
                        title={opcion.userHelper.title}
                      />
                    )}
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
              {/* <Button
                onClick={() => alert("viva chavez no joda")}
                text="terminar analisis"
                variant="solid"
                bgColor="#2B2B2B"
                textColor="white"
              >
                <CheckCircle />
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
