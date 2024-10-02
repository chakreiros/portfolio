import "./App.css";

import Header from "@/Components/Header";
import { Toaster } from "@/Components/ui/toaster";

import { Dialog, DialogContent, DialogTrigger } from "@/Components/ui/dialog";

import cardBackground from "@/assets/card-bg.jpg";

function App() {
  return (
    <>
      <Header />

      <main>
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="max-[768px]:flex max-[768px]:flex-col max-[768px]:items-center relative isolate overflow-hidden bg-green-700 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            >
              <circle
                r={512}
                cx={512}
                cy={512}
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#71AD88" />
                  <stop offset={1} stopColor="#71AD88" />
                </radialGradient>
              </defs>
            </svg>

            <div className=" max-w-md text-center lg:mx-0 lg:text-left p-16">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Estamos ansiosos para abrir os portões
                <br />
                Você também?
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-300">
                Para garantir que você não vai perder a diversão deixe seu
                contato abaixo e avisaremos você logo que estiver tudo pronto
              </p>

              <Dialog>
                <DialogTrigger className="bg-green-900 hover:bg-gree-300">
                  Fique por dentro
                </DialogTrigger>
                <DialogContent className="h-3/4">
                  <iframe
                    className="w-full h-full"
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdvi10X1XFckxHgGI3jIR937mGcWg-8zwSGXYJXd27BxssXeQ/viewform?embedded=true"
                  ></iframe>
                </DialogContent>
              </Dialog>
            </div>
            <div className="relative">
              <img
                alt="App screenshot"
                src={cardBackground}
                width={1824}
                height={1080}
                className="absolute left- top-0 w-[57rem] h-max max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>
      </main>
      <Toaster />
    </>
  );
}

export default App;
