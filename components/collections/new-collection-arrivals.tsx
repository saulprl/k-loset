import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { CollectionCard } from "./collection-card";

export const NewCollectionArrivals = () => {
  return (
    <section className="flex w-full flex-col">
      <div className="px-5 py-16">
        <p className="text-text-foreground text-center font-serif text-3xl">
          New Arrivals. For those who love to look great all the time.
        </p>
      </div>
      <div>
        <Carousel className="lg:hidden w-full">
          <CarouselContent className="-ml-4">
            <CarouselItem className="basis-9/10">
              <CollectionCard />
            </CarouselItem>
            <CarouselItem className="basis-9/10">
              <CollectionCard />
            </CarouselItem>
            <CarouselItem className="basis-9/10">
              <CollectionCard />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};
