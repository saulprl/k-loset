import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="flex w-full flex-col lg:flex-row-reverse lg:items-center">
      <div className="w-full py-7 lg:flex-1/3 lg:px-18">
        <h1 className="text-text-foreground lg:text-start text-center font-sans text-7xl leading-snug font-medium">
          Timeless Style
        </h1>
      </div>
      <div className="w-full px-5 lg:flex-2/3 lg:px-0">
        <Link
          href="#"
          aria-label="Explore the Winter 2025 collection"
          className="group transition-all duration-300 ease-in-out hover:brightness-105"
        >
          <div className="relative h-112 w-full lg:h-auto lg:aspect-video overflow-hidden">
            <Image
              src="/img/timeless-style.jpg"
              alt="Timeless Style"
              fill
              // TODO: Provide proper sizes
              // sizes="(min-width:"
              className="h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-start justify-end gap-1 bg-linear-to-b from-transparent from-50% to-black/90 to-95% p-8 text-white">
              <span className="inline-flex items-center gap-1 text-xs font-medium uppercase underline-offset-2 group-hover:underline">
                Collection <MoveUpRight size={12} />
              </span>
              <h2 className="text-2xl font-bold underline-offset-2 group-hover:underline">
                Winter 2025
              </h2>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};
