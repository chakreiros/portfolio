import logoChakreiros from "@/assets/images/chakreiros6.png";

export default function Header() {
  return (
    <header className="flex items-end w-full h-fit px-10 py-5 gap-5">
      <img src={logoChakreiros} alt="Chakreiros" className="h-24" />
      <h1 className="text-green_2 text-[3.6rem] leading-none">Chakreiros</h1>
    </header>
  );
}
