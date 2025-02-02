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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shadcn/dialog";
import { useRef, useState } from "react";
import { Writter } from "./components/owner/Writter";

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
  const [respuesta, setRespuesta] = useState("");
  const botonInvisible = useRef(null);

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
    if (isThereAPhylum()) {
      const respons = await getPhylum(answers.map((a) => (a === -1 ? 0 : a)));
      setRespuesta(respons);
      (botonInvisible.current as unknown as HTMLButtonElement).click();
      return;
    }
    if (preguntaActual < QUESTIONS.length - 1) {
      const nextQuestion = getNextQuestion(answers[preguntaActual]);
      setAnswers(nextQuestion);
    }
  };

  const handlePreguntaAnterior = () => {
    if (preguntaActual > 0) {
      undo();
    }
  };

  return (
    <div className="layout m-0 w-svw md:h-svh h-[max(667px,100svh)] flex relative justify-start items-center flex-col p-4 md:gap-10 gap-7 bg-gray-950 z-0">
      <video
        src={bgVideo}
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full z-[-1] blur-sm object-cover"
      ></video>
      <div className="pt-4 basis-0">
        {/* <RandomWordAnimation text="Phylum AI" /> */}
        <Writter text="Phylum AI" />
      </div>
      <div className="flex md:flex-row flex-col items-start gap-4 w-full md:justify-center md:h-auto  animate-[appears_1s_ease-in-out] overflow-hidden">
        <Dialog>
          <DialogTrigger className="absolute">
            <div className="sr-only" ref={botonInvisible}>
              activar respuesta
            </div>
          </DialogTrigger>
          <DialogContent className="sm:w-[700px] max-w-[95%]">
            <DialogHeader className="justify-center items-center">
              <DialogTitle>{respuesta}</DialogTitle>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        {/* contenedor de las preguntas respondidas */}

        <div className=" flex flex-col rounded-md overflow-auto md:-order-none order-1 p-4 bg-black bg-opacity-30 gap-2 md:max-h-none min-h-34 md:min-h-min">
          {questions.map((value) => {
            return (
              <div
                key={value}
                onClick={() => {
                  goToQuestion(value);
                }}
                className="p-2 cursor-pointer  bg-white  rounded-[2px]  transition-all duration-300 hover:shadow-[0_0_7px_#f9fafb,0_0_10px_#65788c,0_0_11px_#05386c,0_0_22px_#0629d7] hover:scale-[1.03]"
              >
                <div className="font-light">
                  {QUESTIONS[Number(value)].text}
                </div>
                <div className="flex flex-row gap-1 ">
                  <div className="font-light">Respuesta: </div>
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
            <div className="text-lg ">
              {QUESTIONS[preguntaActual]?.text ||
                "Hubo un Problema con la pregunta..."}
            </div>
            {QUESTIONS[preguntaActual].userHelper?.description && (
              <div className="item self-end">
                <UserHelper
                  description={QUESTIONS[preguntaActual].userHelper.description}
                  title={QUESTIONS[preguntaActual].userHelper.title}
                  images={QUESTIONS[preguntaActual].userHelper.images}
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
                      className="w-5 h-5"
                    />
                    <Label
                      className="text-base font-normal"
                      htmlFor={`opcion-${index}`}
                    >
                      {opcion.text}
                    </Label>
                    {opcion.userHelper && (
                      <div>
                        <UserHelper
                          description={opcion.userHelper.description}
                          title={opcion.userHelper.title}
                          images={opcion.userHelper.images}
                        />
                      </div>
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
                  <div className="text-gray-600">
                    <ChevronLeft />
                  </div>
                </Button>

                <Button
                  onClick={() => handleSiguientePregunta()}
                  text="siguiente"
                  variant="outline"
                  iconPosition="right"
                >
                  <div className="text-gray-600">
                    <ChevronRight />
                  </div>
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
