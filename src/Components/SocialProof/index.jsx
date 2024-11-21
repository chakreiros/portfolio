//#region imports
import React from "react";
import Autoplay from "embla-carousel-autoplay";

//#region ui components
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
//#endregion
//#region images
import bellyLogo from "@/assets/images/costumers/belly/logo-belly.jpg";
import belly from "@/assets/images/costumers/belly/Belly.jpg";
import belly1 from "@/assets/images/costumers/belly/Belly(1).jpg";
import belly2 from "@/assets/images/costumers/belly/Belly(2).jpg";
import belly3 from "@/assets/images/costumers/belly/Belly(3).jpg";
import voOrlandoLogo from "@/assets/images/costumers/vo-orlando/logo-vo-orlando.jpg";
import voOrlando1 from "@/assets/images/costumers/vo-orlando/vo-orlando(1).jpg";
import voOrlando2 from "@/assets/images/costumers/vo-orlando/vo-orlando(2).jpg";
import voOrlando3 from "@/assets/images/costumers/vo-orlando/vo-orlando(3).jpg";
//#endregion
//#endregion
export default function SocialProof() {
  const bellyImages = [belly, belly1, belly2, belly3];
  const voOrlandoImages = [voOrlando1, voOrlando2, voOrlando3];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const plugin2 = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <section>
      <div className="flex justify-evenly">
        <div className="text-center">
          <img src={bellyLogo} className="rounded-full w-[33vh] m-auto" />
          <h3>Chácara Belly</h3>
        </div>
        <div className="text-center">
          <img src={voOrlandoLogo} className="rounded-full w-[33vh] m-auto" />
          <h3>Chácara do Vô Orlando</h3>
        </div>
      </div>
      <div className="flex justify-center items-center align-middle w-fit h-[33vh] gap-10">
        <Carousel
          className="w-fit h-full relative"
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {Array.from({ length: bellyImages.length }).map((_, index) => (
              <CarouselItem key={index} className="basis-1/2">
                <div>
                  <img src={bellyImages[index]} className="max-w-1/3" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <Carousel
          className="w-fit h-full"
          plugins={[plugin2.current]}
          onMouseEnter={plugin2.current.stop}
          onMouseLeave={plugin2.current.reset}
        >
          <CarouselContent className="relative">
            {Array.from({ length: voOrlandoImages.length }).map((_, index) => (
              <CarouselItem key={index} className="basis-1/2">
                <div>
                  <img src={voOrlandoImages[index]} className="max-w-1/3" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
