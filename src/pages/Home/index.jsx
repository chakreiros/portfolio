import card_bg from "@/assets/card-bg.jpg";

import Banner from "@/components/Banner";
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

        <section id="text" className="h-96 flex px-20 justify-center gap-10">
          <p className="w-1/2 self-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque,
            natus minima a sit quia, quae, iusto vitae distinctio explicabo
            provident omnis nobis obcaecati eligendi. Iusto expedita quas dolor
            est quidem.
          </p>
          <img src={card_bg} alt="" className="bg-black rounded-xl shadow-lg" />
        </section>

        <FeatureAccordion />
        <section>
          <h2>Prova Social</h2>
        </section>
      </main>
    </>
  );
}
