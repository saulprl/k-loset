import { Collection } from "@/lib/shopify/types";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { CollectionCard } from "./collection-card";

interface Props {
  collections: Collection[];
}

export const NewCollectionArrivals = ({ collections }: Props) => {
  return (
    <section className="flex w-full flex-col">
      <div className="px-5 py-16">
        <p className="text-text-foreground text-center font-serif text-3xl">
          New Arrivals. For those who love to look great all the time.
        </p>
      </div>
      <div>
        <Carousel className="w-full lg:hidden">
          <CarouselContent className="-ml-4">
            {collections.map((collection) => (
              <CarouselItem key={collection.handle} className="basis-9/10">
                <CollectionCard collection={collection} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};
