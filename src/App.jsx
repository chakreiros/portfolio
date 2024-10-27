import "./App.css";

import Header from "@/Components/Header";
import { Toaster } from "@/Components/ui/toaster";

import { Dialog, DialogContent, DialogTrigger } from "@/Components/ui/dialog";

function App() {
  return (
    <>
      <Header />

      <main>
        <div className="flex justify-center mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="flex w-fit max-[768px]:flex max-[768px]:flex-col max-[768px]:items-center relative isolate overflow-hidden bg-green-700 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <div className="flex flex-col max-w-md text-right lg:mx-0 lg:text-left p-16 gap-8">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Estamos ansiosos para abrir os portões
                <br />
                Você também?
              </h2>

              <p className="mt-6 text-lg md:leading-8 text-gray-300 leading-6">
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
          </div>
        </div>
      </main>
      <Toaster />
    </>
  );
}

export default App;
