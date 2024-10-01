import { Button } from "@/components/ui/button";

import { RiWhatsappFill } from "react-icons/ri";

export default function Header() {
  return (
    <header className=" flex justify-between bg-black w-screen px-5 h-fit shadow-md opacity-60">
      <h1 className="font-Amatic">Chakreiros</h1>

      <ul className="flex self-center	 gap-5">
        <li>
          <a className="text-white hover:text-emerald-500" href="">
            Home
          </a>
        </li>
        <li>
          <a className="text-white hover:text-emerald-500" href="">
            Contato
          </a>
        </li>
        <li>
          <a className="text-white hover:text-emerald-500" href="">
            Chácaras
          </a>
        </li>
      </ul>
      <Button
        onClick={() => window.open("https://wa.me/5519991841341", "_blank")}
        className="bg-green-600 hover:bg-green-950 hover:border-inherit self-center gap-1"
      >
        <RiWhatsappFill />
        Alugue sua chácara
      </Button>
    </header>
  );
}
