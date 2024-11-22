import { Button } from "../ui/button";

export default function Banner() {
  return (
    <div
      id="banner"
      className="h-1/2 p-10 w-full overflow-hidden shadow-md relative flex justify-between items-end"
    >
      <div className="absolute inset-0 blur-sm bg-banner bg-center bg-no-repeat bg-cover"></div>
      <h1 className="relative z-10 text-white drop-shadow-sm font-extrabold text-[13.3rem] leading-none uppercase">
        Dono <br />
        de chácara? <br />
        anuncie
      </h1>
      <Button
        asChild
        className="w-[20rem] h-[6rem] z-10 rounded-full text-[2rem] text-white uppercase"
      >
        <a
          target="_blank"
          href="https://wa.me/5519991841341?text=Olá!%20Quero%20conhecer%20o%20Chakreiros!"
        >
          Conheça
        </a>
      </Button>
    </div>
  );
}
