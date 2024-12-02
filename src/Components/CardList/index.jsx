import { Card, CardHeader, CardTitle } from "@/Components/ui/card";

import belly from "@/assets/images/costumers/belly/Belly.jpg";
import belly1 from "@/assets/images/costumers/belly/Belly(1).jpg";
import belly2 from "@/assets/images/costumers/belly/Belly(2).jpg";
import belly3 from "@/assets/images/costumers/belly/Belly(3).jpg";
import voOrlando1 from "@/assets/images/costumers/vo-orlando/vo-orlando(1).jpg";
import voOrlando2 from "@/assets/images/costumers/vo-orlando/vo-orlando(2).jpg";
import voOrlando3 from "@/assets/images/costumers/vo-orlando/vo-orlando(3).jpg";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

export default function CardList() {
  const cardData = [
    {
      title: "Chácara Belly",
      description: "",
      images: [belly, belly1, belly2, belly3],
    },
    {
      title: "Chácara do Vô Orlando",
      description: "",
      images: [voOrlando1, voOrlando2, voOrlando3],
    },
  ];

  return (
    <div className="flex gap-10">
      {cardData &&
        cardData.map((card, index) => (
          <Card
            className="w-[50vw] h-auto rounded-xl hover:cursor-pointer"
            key={index}
          >
            <CardHeader>
              <Carousel className="w-fit h-full">
                <CarouselContent>
                  {Array.from({ length: card.images.length }).map(
                    (_, index) => (
                      <CarouselItem key={index}>
                        <div>
                          <img
                            className="max-w-1/3 max-lg:max-w-full rounded-xl"
                            src={card.images[index]}
                            alt=""
                          />
                        </div>
                      </CarouselItem>
                    )
                  )}
                </CarouselContent>
              </Carousel>
            </CardHeader>

            <CardTitle className="text-center text-green_1 m-6">
              {card.title}
            </CardTitle>
          </Card>
        ))}
    </div>
  );
}
