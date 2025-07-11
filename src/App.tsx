import { PHYLUMS_ANSWERS, QUESTIONS } from "@/config/index";
import logoUDO from "@/assets/img/logo-udo.png";
import { getPhylum } from "./config/api/backend/requests/phylum";
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
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shadcn/dialog";
import { useRef, useState } from "react";
import { Writter } from "./components/owner/Writter";
import { getImageUrl } from "./helpers/getImageUrl";
import { PhylumName } from "./types/question";
import { capitalize } from "./helpers/capitalize";
const phylums = {
  protozoarios: "Protozoarios",
  poriferos: "Poríferos",
  equinodermos: "Equinodermos",
  ctenoforos: "Ctenóforos",
  cnidarios: "Cnidarios",
  nemertinos: "Nemertinos",
  platelmintos: "Platelmintos",
  acantocefalos: "Acantocéfalos",
  asquelmintos: "Asquelmintos",
  cordados: "Cordados",
  moluscos: "Moluscos",
  anelidos: "Anélidos",
  artropodos: "Artrópodos",
};
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
  const [respuesta, setRespuesta] = useState<PhylumName | "pending">();
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
      setRespuesta("pending");
      (botonInvisible.current as unknown as HTMLButtonElement).click();
      const respons = (await getPhylum(
        answers.map((a) => (a === -1 ? 0 : a))
      )) as PhylumName;
      setRespuesta(respons.toLowerCase() as PhylumName);
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
    <div className="layout m-0 w-svw md:h-svh min-h-svh flex relative justify-start items-center flex-col md:gap-10 gap-7 bg-gray-950 z-0">
      {/* <video
        src={bgVideo}
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full z-[-1] blur-sm object-cover"
      ></video> */}
      {/* tittle and main content wrapper */}
      <div className="layout m-0 flex md:flex-1 h-[max(667px,100svh)] w-full relative justify-start items-center flex-col md:gap-10 gap-7 p-4 ">
        <div className="pt-4 basis-0">
          {/* <RandomWordAnimation text="Phylum AI" /> */}
          <Writter text="Phylum AI" />
        </div>
        {/* main content */}
        <div className="flex flex-1 md:flex-row flex-col items-start gap-4 w-full md:justify-center md:h-auto  animate-[appears_1s_ease-in-out] overflow-hidden">
          <Dialog>
            <DialogTrigger className="absolute">
              <div className="sr-only" ref={botonInvisible}>
                activar respuesta
              </div>
            </DialogTrigger>
            <DialogContent className="sm:w-[700px] max-w-[95%]">
              {!respuesta || respuesta === "pending" ? (
                <>
                  <DialogHeader className="justify-center items-center">
                    <DialogTitle>
                      Esperando la respuesta del servidor...
                    </DialogTitle>
                    <DialogDescription aria-describedby="Esperando la respuesta del servidor..." />
                  </DialogHeader>

                  <div className="flex justify-center mt-4">
                    <div className="loader"></div>
                  </div>
                </>
              ) : (
                <>
                  <DialogHeader className="justify-center items-center">
                    <DialogTitle>{phylums[respuesta]}</DialogTitle>
                    <DialogDescription
                      aria-describedby={
                        PHYLUMS_ANSWERS[respuesta.toLowerCase() as PhylumName]
                          .description
                      }
                    />
                  </DialogHeader>
                  <div>
                    {capitalize(
                      PHYLUMS_ANSWERS[respuesta.toLowerCase() as PhylumName]
                        .description
                    )}
                  </div>
                  <div className="grid md:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-1 ">
                    <img
                      src={getImageUrl(
                        PHYLUMS_ANSWERS[respuesta.toLowerCase() as PhylumName]
                          .images[0],
                        "jpg"
                      )}
                      alt={
                        PHYLUMS_ANSWERS[respuesta.toLowerCase() as PhylumName]
                          .images[0]
                      }
                      className={
                        "object-contain w-full max-w-xs justify-self-center"
                      }
                    />
                    {PHYLUMS_ANSWERS[respuesta.toLowerCase() as PhylumName]
                      .images[1] && (
                      <img
                        src={getImageUrl(
                          PHYLUMS_ANSWERS[respuesta.toLowerCase() as PhylumName]
                            .images[1],
                          "jpg"
                        )}
                        alt={
                          PHYLUMS_ANSWERS[respuesta.toLowerCase() as PhylumName]
                            .images[1]
                        }
                        className={
                          "object-contain w-full max-w-xs justify-self-center"
                        }
                      />
                    )}
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>
          {/* contenedor de las preguntas respondidas */}
          <div className=" flex flex-col rounded-md overflow-auto bg-[rgba(33,53,85,0.5)]  md:-order-none order-1 p-4  gap-2 md:max-h-none min-h-34 md:min-h-min">
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
                    description={
                      QUESTIONS[preguntaActual].userHelper.description
                    }
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

      {/* footer */}
      <div className="w-full max-w-screen-xl py-3 text-red-50 md:h-60 flex flex-col overflow-hidden items-center justify-center p-4 gap-2 bg-[rgba(33,53,85,0.5)] m-[0_.5rem_.5rem_.5rem] rounded-md">
        <div className="flex-1 overflow-hidden flex flex-col items-center gap-2 md:flex-row">
          <img
            className="md:h-4/5 h-28"
            src={logoUDO}
            alt="El logo de la universidad de Oriente (UDO)"
          />
          <div className="flex items-center flex-col gap-3">
            <div className="flex items-center flex-col">
              <p className="text-center  rounded-md">
                Este sitio fue creado por estudiantes de la Universidad de
                Oriente (UDO).
              </p>
              <p className="italic">
                "Del pueblo venimos y hacia el pueblo vamos"
              </p>
            </div>
            <div className="rounded-md">
              <a
                href="https://phylum-ai-landing-page.vercel.app/"
                target="_blank"
              >
                <Button
                  variant="outline"
                  text="Sobre nosotros"
                  style={{ border: "1px solid white", color: "white" }}
                  hover="white"
                ></Button>
              </a>
            </div>
          </div>
        </div>
        <p className="rounded-md">
          © Fernando Guzman y Cesar Velasquez. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
}

export default App;
