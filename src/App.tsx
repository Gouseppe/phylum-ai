import bgVideo from "@/assets/bg/video/bacterias.mp4";
import Button from "./components/Button";
import { useState } from "react";
import { QUESTIONS } from "@/config/index";
import { RadioGroup, RadioGroupItem } from "./components/ui/radio-group";
import { Label } from "./components/ui/label";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import { useMotorDeInferencia } from "./hooks/phylumAi";

type Respuesta = {
  pregunta: number;
  value: string;
};

function App() {
  const {
    getNextQuestion,
    undo,
    clear,
    goToQuestion,
    currentQuestion: preguntaActual,
  } = useMotorDeInferencia();

  const [respuestas, setRespuestas] = useState<Respuesta[]>(
    new Array(QUESTIONS.length).fill("").map(() => ({ pregunta: 0, value: "" }))
  );
  // useEffect(() => {
  //   console.log(respuestas);
  // }, [respuestas]);
  // const [cuestionarioFinalizado, setCuestionarioFinalizado] = useState(false);

  const handleRespuestaSeleccionada = (respuesta: string) => {
    const nuevasRespuestas = [...respuestas];

    if (nuevasRespuestas[preguntaActual].value !== "") {
      nuevasRespuestas[preguntaActual].value = respuesta;
      nuevasRespuestas[preguntaActual].pregunta = preguntaActual;
      clear();
      setRespuestas([
        ...respuestas.slice(0, preguntaActual + 1),
        ...respuestas
          .slice(preguntaActual + 1)
          .fill({} as Respuesta)
          .map(() => ({ pregunta: 0, value: "" })),
      ]);
    } else {
      nuevasRespuestas[preguntaActual].value = respuesta;
      nuevasRespuestas[preguntaActual].pregunta = preguntaActual;
      setRespuestas(nuevasRespuestas);
    }
  };

  const handleSiguientePregunta = () => {
    if (preguntaActual < QUESTIONS.length - 1) {
      getNextQuestion(Number(respuestas[preguntaActual].value));
    }
  };

  const handlePreguntaAnterior = () => {
    if (preguntaActual > 0) {
      undo();
    }
  };

  // const handleFinalizarCuestionario = () => {
  //   setCuestionarioFinalizado(true);
  //   console.log("Cuestionario finalizado", respuestas);
  // };

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
          {respuestas.map((value) => {
            if (value.value === "") {
              return "";
            } else {
              return (
                <div
                  key={value.pregunta}
                  onClick={() => {
                    goToQuestion(value.pregunta);
                  }}
                  className="p-2 cursor-pointer hover:bg-slate-500"
                >
                  <div>pregunta: {QUESTIONS[Number(value.pregunta)].text}</div>
                  <div>
                    valor:{" "}
                    {
                      QUESTIONS[Number(value.pregunta)].Options.filter(
                        (e) => e.value === Number(value.value)
                      )[0].text
                    }
                  </div>
                </div>
              );
            }
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
                value={respuestas[preguntaActual].value}
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
