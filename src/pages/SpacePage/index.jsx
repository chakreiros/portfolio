import { useParams } from "react-router-dom";

import Header from "@/Components/Header";

import { Carousel, CarouselContent } from "@/Components/ui/carousel";

import cardData from "@/utils/cardData";

import { FaCheck } from "react-icons/fa";
import { MdBlock } from "react-icons/md";

export default function SpacePage() {
  const params = useParams();

  const data = cardData[params.id];
  const info = data.info;

  return (
    <>
      <div>
        <Header />
      </div>
      <main className="my-10">
        <div className="flex gap-10 px-10 items-center">
          <img className="rounded-full w-[10rem]" src={data.logo} />
          <h1>
            {data.title} - {data.category}
          </h1>
        </div>
        <Carousel>
          <CarouselContent>
            {data.images.map((image, index) => (
              <img key={index} src={image} alt={data.title} />
            ))}
          </CarouselContent>
        </Carousel>

        <section className="border border-gray rounded-xl m-10 p-10">
          <h2>Descrição</h2>
          <ul>
            <li>Área: {info.size}</li>
            <li>Capacidade de hospedagem: {info.host_capacity}</li>
            <li>Capacidade para eventos: {info.event_capacity}</li>
            <li>Descrição: {info.description}</li>
            <li>Localidade: {info.locality}</li>
            <li>
              {info.furniture ? <FaCheck /> : <MdBlock />}Mobília no local
            </li>
            <li>
              {info.barbecue_area ? <FaCheck /> : <MdBlock />}Área de churrasco
            </li>
            <li>{info.cooking_area ? <FaCheck /> : <MdBlock />}Cozinha</li>
          </ul>
        </section>
      </main>
    </>
  );
}
