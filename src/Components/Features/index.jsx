import React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";

import { MdAnnouncement } from "react-icons/md";
import { AiFillSchedule } from "react-icons/ai";
import { PiRobotFill } from "react-icons/pi";
import { FaCamera } from "react-icons/fa";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  {
    id: "announcement",
    icon: "MdAnnouncement",
    title: "Plataforma simples",
    description: "Descrição detalhada de Plataforma simples",
  },
  {
    id: "chatbot",
    icon: "PiRobotFill",
    title: "Bot de atendimento",
    description: "Descrição detalhada de Bot de atendimento",
  },
  {
    id: "photos",
    icon: "FaCamera",
    title: "fotos e vídeos profissionais",
    description: "Descrição detalhada de fotos e vídeos profissionais",
  },
  {
    id: "schedule-control",
    icon: "AiFillSchedule",
    title: "Agenda automatizada",
    description: "Descrição detalhada de Agenda automatizada",
  },
];

export function FeatureCard() {
  const iconComponents = {
    MdAnnouncement,
    AiFillSchedule,
    PiRobotFill,
    FaCamera,
  };

  return (
    <div className="cards-wrapper flex gap-[2rem] items-center justify-center">
      {features.map((feature, index) => (
        <Card
          key={index}
          className="flex flex-col items-center w-1/3 max-w-[29.7rem] h-fit shadow-2xl hover:scale-105 ease-in-out duration-300 border-[#41693c] rounded-xl"
        >
          <CardTitle className="border border-[#41693c] relative rounded-full p-4 -top-14 bg-white">
            {React.createElement(iconComponents[feature.icon], {
              size: "3em",
              color: "#41693c",
            })}
          </CardTitle>
          <CardContent className="text-[1.6rem] leading-normal uppercase text-[#41693c] font-extrabold text-center">
            {feature.title}
          </CardContent>
          <CardFooter>
            <Button
              variant="outline"
              className="border border-[#41693c] rounded-full uppercase text-[#41693c] font-bold text-lg"
            >
              Saiba Mais
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export function FeatureAccordion() {
  return (
    <section id="features" className="px-20">
      {features.map((feature, index) => (
        <Accordion key={index} type="single" collapsible className="w-full">
          <AccordionItem value={`item-${index}`}>
            <AccordionTrigger>{feature.title}</AccordionTrigger>
            <AccordionContent>{feature.description}</AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </section>
  );
}
