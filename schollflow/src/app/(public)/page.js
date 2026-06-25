import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-linear-to-b from-[#FEFEFD] to-[#a8cef4]">
      <main className="flex flex-1 w-full  flex-col items-center  py-32 px-60   ">
        <div className="flex flex-col justify-center gap-6 text-center ">
          <h1 className="w text-5xl font-semibold leading-10 tracking-tight  text-black dark:text-zinc-50">
            Organize sua vida escolar <br />com facilidade

          </h1>
          <p className=" text-lg leading-8 text-black">
            Provas, tarefas e horários em um só lugar.

          </p>
        </div>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row mt-5">

          <Link
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#3FA0FF] px-5 text-background   md:w-39.5"
            href={'/login'}
          >

            Começe Agora
          </Link>


        </div>


        <div className=" h-full   w-7xl mt-15 flex flex-row justify-between">
          <div className="h-50 w-100  p-3 flex flex-col justify-center">
            <div className=" flex justify-center">
              <h1 className=" font-bold text-3xl mb-3">O melhor,</h1>
            </div>
            <Image
              src='/calendar.png'
              alt="Exemplo de calendário da aplicação"
              width={1000}
              height={1000}
            />
            <h1 className="font-black text-xl mt-3">Calendário Escolar</h1>
            <p className="text-sm">Consulte data de atividades e provas com muita mais facilidade </p>
          </div>
          <div className="h-50 w-100  mt-30 p-3 flex flex-col justify-center">
            <div className=" flex justify-center">
              <h1 className=" font-bold text-3xl mb-3">Quando</h1>
            </div>
            <Image
              src='/courses.png'
              alt="Exemplo de cursos da aplicação"
              width={1000}
              height={1000}
            />
            <h1 className="font-black text-xl mt-3">Cursos</h1>
            <p className="text-sm">Consulte seus cursos com muita mais facilidade </p>
          </div>
          <div className="h-90 w-100   mt-30 p-3 flex flex-col justify-center">
            <div className=" flex justify-center">
              <h1 className=" font-bold text-3xl mb-3">E onde </h1>
            </div>
            <Image
              src={'/faltas.png'}
              alt="Exemplo de gestão de faltas da aplicação"
              width={1000}
              height={1000}
            />
            <h1 className="font-black text-xl mt-3">Faltas</h1>
            <p className="text-sm">Consulte suas faltas com muita mais facilidade </p>
          </div>

        </div>
        <div className=" h-full w-7xl flex flex-row justify-between items-center">
          <div className="h-90 w-100  p-3 flex flex-col justify-center">

            <Image
              src={'/celularrev1.png'}
              alt="Exeplo da aplicação"
              width={1000}
              height={1000}
            />
            <h1 className="font-black text-xl mt-3">App Mobile</h1>
            <p className="text-sm">Acesse de onde quiser com nosso app</p>
          </div>
          <div className=" flex flex-col justify-center">
            <h1 className=" font-bold text-3xl mb-3 tracking-[20]">Quiser</h1>

          </div>
          <div className="h-90 w-100  p-3 flex flex-col justify-center">

            <Image
              src={'/notebook.png'}
              alt="Exeplo Web da aplicação"
              width={1000}
              height={1000}
            />
            <h1 className="font-black text-xl mt-3">Página Web</h1>
            <p className="text-sm">Acesse de onde quiser no seu navegador</p>
          </div>

        </div>
        <div className="mb-5">
          <h1 className="font-extrabold text-4xl">Nossa Equipe</h1>
        </div>
        <div className=" h-full w-7xl flex flex-row justify-between">

          <div className="border-2 w-120 h-150 rounded-2xl border-black flex flex-col items-center ">
            <Image
              className=" mt-10 h-100 w-100"
              src={'/vitor.png'}
              alt="Desenvolvedor Vitor"
              width={1000}
              height={1000}
            />
            <div className="mt-2 items-center flex flex-col">
              <h1 className="font-extrabold text-2xl">Vitor Hugo</h1>
              <p> Tecnico em informática - IFMS</p>

            </div>
            <div className=" h-10 flex flex-row items-center">
              <p>Conheça mais →</p>
              <Link

                href="https://www.linkedin.com/in/vitor-hugo-da-silva-8375773a7"
              >
                <Image
                  alt="Logo Linkedin"
                  className="w-10"
                  src={'/linkedin.png'}
                  width={100}
                  height={100}

                />
              </Link>
            </div>
          </div>
          <div className="border-2 w-120 h-150 rounded-2xl border-black flex flex-col items-center ">

            <Image
              className=" mt-10 h-100 w-100"
              src={'/Cesar.png'}
              alt="Desencolvedor César"
              width={1000}
              height={1000}
            />
            <div className="mt-2 items-center flex flex-col">
              <h1 className="font-extrabold text-2xl">César Augusto</h1>
              <p> Tecnico em informática - IFMS</p>

            </div>
            <div className=" h-10 flex flex-row items-center">
              <p>Conheça mais →</p>
              <Link

                href="https://www.linkedin.com/in/césar-augusto-2a1747400/"
              >
                <Image
                  alt="Logo Linkedin"
                  className="w-10"
                  src={'/linkedin.png'}
                  width={100}
                  height={100}
                />
              </Link>
            </div>
          </div>

        </div>
        <div className="mt-10">
          <h1 className="font-extrabold text-4xl">FeedBacks :<span className="text-2xl">P</span></h1>
        </div>
        <div className=" mt-5 justify-between w-7xl h-full flex flex-wrap gap-2">




        </div>
      </main>
    </div>
  );
}
