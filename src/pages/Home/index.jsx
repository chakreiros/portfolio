//#region imports
import Banner from "@/components/Banner";
import SocialProof from "@/components/SocialProof";

import { FeatureCard, FeatureAccordion } from "@/components/Features";
import Form from "@/components/Form";
import Header from "@/components/Header";

import { Separator } from "@/components/ui/separator";

import asideDescription from "@/assets/images/aside-description.jpg";
//#endregion
export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Banner />
      <Separator />
      <main className="max-w-[153.6rem] flex flex-col self-center shadow-lg">
        <section
          id="glimpse-features"
          className="h-fit flex flex-col justify-center gap-20"
        >
          <FeatureCard />
        </section>
        <Separator />
        <section className="flex p-10 gap-10">
          <div className="flex flex-col w-full items-center gap-24 p-10 bg-description_graphic_element bg-right-bottom bg-auto bg-no-repeat h-[70vh]">
            <h2 className="uppercase">
              Mais que lugares, <br /> experiências...
            </h2>
            <p className="text-[#1d2b1b] text-justify	p-10 text-[2rem]">
              Bem-vindo ao Chakreiros! Aqui, donos de chácaras encontram uma
              plataforma simples e completa para divulgar seus espaços com
              profissionalismo, enquanto preparamos o catálogo perfeito para
              quem busca momentos inesquecíveis. Nossa missão é transformar
              locações em experiências e trazer praticidade em cada detalhe!
            </p>
          </div>
          <img
            src={asideDescription}
            alt=""
            className="max-w-[50vw] max-h-screen rounded-2xl shadow-[0_1.6rem_1.6rem_1px_rgba(0,0,0,.75)] max-lg:hidden object-cover"
          />
        </section>

        <Separator />
        <SocialProof />

        <FeatureAccordion />
        <Separator />
        <Form />
      </main>
    </div>
  );
}
