import React from "react";

import card_bg from "@/assets/card-bg.jpg";

import Header from "@/components/Header";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

import { BsRobot } from "react-icons/bs";

const iconComponents = { BsRobot };

export default function Home() {
  const features = [
    {
      id: "test",
      icon: "BsRobot",
      title: "IA",
      description: "Descrição detalhada da IA",
    },
  ];
  return (
    <>
      <Header />
      <main className="h-full w-full">
        <div
          id="banner"
          className="h-1/2 w-full overflow-hidden shadow-md relative"
        >
          <div className="absolute inset-0 blur-sm bg-banner bg-center"></div>
          <h1 className="relative z-10 top-1/4 text-white drop-shadow-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Voluptatibus, officiis dolorem esse impedit eveniet voluptas
            deserunt neque iure.
          </h1>
        </div>

        <section
          id="glimpse-features"
          className="h-[50vh] flex flex-col justify-center gap-20"
        >
          <div className="cards-wrapper flex justify-evenly">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="flex flex-col items-center w-1/3 max-w-[29.7rem] h-fit shadow-2xl hover:scale-105 ease-in-out duration-300"
              >
                <CardTitle className="border relative rounded-full p-4 -top-14 bg-white">
                  {React.createElement(iconComponents[feature.icon], {
                    size: "3em",
                  })}
                </CardTitle>
                <CardContent className="text-[1.6rem] leading-normal">
                  {feature.title}
                </CardContent>
              </Card>
            ))}
          </div>
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

        <section id="features" className="px-20">
          {features.map((feature, index) => (
            <Accordion key={index} type="single" collapsible className="w-full">
              <AccordionItem value={`item-${index + 1}`}>
                <AccordionTrigger>{feature.title}</AccordionTrigger>
                <AccordionContent>{feature.description}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </section>

        <section>
          <h2>Prova Social</h2>
        </section>
      </main>
    </>
  );
}
