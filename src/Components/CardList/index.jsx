import { Card, CardHeader, CardTitle } from "@/Components/ui/card";

import voOrlando from "@/assets/images/costumers/vo-orlando/vo-orlando(2).jpg";
import belly from "@/assets/images/costumers/belly/Belly(3).jpg";

export default function CardList() {
  const cardData = [
    { title: "Chácara Belly", description: "", image: belly },
    { title: "Chácara do Vô Orlando", description: "", image: voOrlando },
  ];

  return (
    <div className="flex gap-10">
      {cardData &&
        cardData.map((card, index) => (
          <Card
            className=" max-w-[50vw] h-auto rounded-xl hover:cursor-pointer"
            key={index}
          >
            <CardHeader>
              <img className="rounded-xl" src={card.image} alt="" />
            </CardHeader>

            <CardTitle className="text-center text-green_1 m-6">
              {card.title}
            </CardTitle>
          </Card>
        ))}
    </div>
  );
}
