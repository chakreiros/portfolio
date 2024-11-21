import Banner from "@/components/Banner";
import asideDescription from "@/assets/aside-description.jpg";
import { FeatureCard, FeatureAccordion } from "@/components/Features";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="h-full w-full">
        <Banner />

        <section
          id="glimpse-features"
          className="h-[50vh] flex flex-col justify-center gap-20"
        >
          <FeatureCard />
        </section>

        <section className="flex p-10 gap-10">
          <div className="flex flex-col w-full items-center gap-24 p-10 bg-description_graphic_element bg-right-bottom bg-auto bg-no-repeat">
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
            className="max-w-[50vw] max-h-screen rounded-2xl"
          />
        </section>

        {/* <FeatureAccordion /> */}
        {/* <section>
          <h2>Prova Social</h2>
        </section> */}
      </main>
    </>
  );
}
