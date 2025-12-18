import { Collection } from "@/lib/shopify/types";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { CollectionCard } from "./collection-card";

interface Props {
  collections: Collection[];
}

export const NewCollectionArrivals = ({ collections }: Props) => {
  return (
    <section className="flex w-full flex-col">
      <div className="px-5 py-12">
        <p className="text-text-foreground text-center font-serif text-3xl">
          New Arrivals. For those who love to look great all the time.
        </p>
      </div>
      <div>
        <ScrollArea className="w-full max-lg:hidden">
          <div className="flex h-152 w-max gap-4 px-4 pb-4">
            {collections.map((collection) => (
              <div key={collection.id} className="aspect-2/3 h-full">
                <CollectionCard collection={collection} />
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <Carousel className="w-full lg:hidden">
          <CarouselContent className="-ml-4">
            {collections.map((collection) => (
              <CarouselItem
                key={collection.id}
                className="basis-9/10 md:basis-4/9"
              >
                <CollectionCard collection={collection} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};
