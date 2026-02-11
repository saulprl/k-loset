"use client";

import clsx from "clsx";
import { useProduct, useUpdateURL } from "components/product/product-context";
import Image from "next/image";

export function Gallery({
  images,
}: {
  images: { src: string; altText: string }[];
}) {
  const { state, updateImage } = useProduct();
  const updateURL = useUpdateURL();
  const imageIndex = state.image ? parseInt(state.image) : 0;

  return (
    <form className="flex flex-col-reverse gap-4 md:flex-row">
      {/* Thumbnails - Vertical on left side */}
      {images.length > 1 ? (
        <ul className="flex gap-2 md:flex-col md:gap-3">
          {images.map((image, index) => {
            const isActive = index === imageIndex;

            return (
              <li key={image.src} className="h-20 w-20 flex-shrink-0">
                <button
                  formAction={() => {
                    const newState = updateImage(index.toString());
                    updateURL(newState);
                  }}
                  aria-label="Select product image"
                  className={clsx(
                    "relative h-full w-full overflow-hidden rounded-lg border-2 transition-all duration-200",
                    {
                      "border-neutral-900 dark:border-white": isActive,
                      "border-neutral-200 hover:border-neutral-400 dark:border-neutral-700 dark:hover:border-neutral-500":
                        !isActive,
                    },
                  )}
                >
                  <Image
                    alt={image.altText}
                    src={image.src}
                    width={80}
                    height={80}
                    className="h-full w-full object-cover"
                  />
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}

      {/* Main Image */}
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-neutral-100 md:flex-1 dark:bg-neutral-900">
        {images[imageIndex] && (
          <Image
            className="h-full w-full object-cover"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            alt={images[imageIndex]?.altText as string}
            src={images[imageIndex]?.src as string}
            priority={true}
          />
        )}
      </div>
    </form>
  );
}
