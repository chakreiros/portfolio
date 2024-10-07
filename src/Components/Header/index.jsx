import { useToast } from "@/hooks/use-toast";
import { Button } from "@/Components/ui/button";
import { ToastAction } from "@/Components/ui/toast";
import { Dialog, DialogContent, DialogTrigger } from "@/Components/ui/dialog";

import { RiWhatsappFill } from "react-icons/ri";

import { useState } from "react";

export default function Header() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const showIframe = () => {
    setIsDialogOpen(true);
  };

  const { toast } = useToast();
  return (
    <header className="flex md:justify-between max-[425px]:justify-center bg-black w-screen px-5 h-fit shadow-md opacity-60">
      <h1 className="font-Amatic">Chakreiros</h1>

      <ul className="flex self-center max-[425px]:hidden gap-5">
        <li>
          <Button className="text-white hover:text-emerald-500">Home</Button>
        </li>
        <li>
          <Button variant="ghost" className="text-white hover:text-emerald-500">
            <a href="https://www.instagram.com/chakreiros/" target="_blank">
              Contato
            </a>
          </Button>
        </li>
        <li>
          <Button
            variant="ghost"
            onClick={() => {
              toast({
                title: "Esperando nossos parceiros nos entregar as chaves...",
                description: "Que tal ser avisado quando isso acontecer",
                action: (
                  <ToastAction altText="Try again" onClick={showIframe}>
                    Fique por dentro
                  </ToastAction>
                ),
              });
            }}
            className="text-white hover:text-emerald-500"
          >
            Chácaras
          </Button>
        </li>
      </ul>
      <Button
        onClick={() => window.open("https://wa.me/5519991841341", "_blank")}
        className="bg-green-600 hover:bg-green-950 hover:border-inherit self-center gap-1 max-[425px]:hidden"
      >
        <RiWhatsappFill />
        Alugue sua chácara
      </Button>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <div className="hidden"></div>
        </DialogTrigger>
        <DialogContent className="h-3/4">
          <iframe
            className="w-full h-full"
            src="https://docs.google.com/forms/d/e/1FAIpQLSdvi10X1XFckxHgGI3jIR937mGcWg-8zwSGXYJXd27BxssXeQ/viewform?embedded=true"
          ></iframe>
        </DialogContent>
      </Dialog>
    </header>
  );
}
