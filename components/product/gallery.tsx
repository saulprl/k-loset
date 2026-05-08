"use client";

import clsx from "clsx";
import { useProduct, useUpdateURL } from "components/product/product-context";
import Image from "next/image";

function normalizeImageKey(url: string): string {
  try {
    const parsedUrl = new URL(url);
    return `${parsedUrl.origin}${parsedUrl.pathname}`.toLowerCase();
  } catch {
    const [pathWithoutQuery = ""] = url.split("?");
    return pathWithoutQuery.toLowerCase();
  }
}

export function Gallery({
  images,
  variants,
}: {
  images: { src: string; altText: string; width?: number; height?: number }[];
  variants: {
    image: {
      src: string;
      altText: string;
      width?: number;
      height?: number;
    } | null;
    selectedOptions: { name: string; value: string }[];
  }[];
}) {
  const { state, updateImage } = useProduct();
  const updateURL = useUpdateURL();
  const selectedColor = (state.color || state.colour || "")
    .trim()
    .toLowerCase();
  const selectedStateEntries = Object.entries(state).filter(
    ([key]) => key !== "image",
  );

  const optionMatchesState = (
    selectedOptions: { name: string; value: string }[],
  ): boolean => {
    if (!selectedStateEntries.length) {
      return false;
    }

    return selectedStateEntries.every(([key, value]) =>
      selectedOptions.some(
        (option) =>
          option.name.trim().toLowerCase() === key.trim().toLowerCase() &&
          option.value.trim().toLowerCase() === value.trim().toLowerCase(),
      ),
    );
  };

  const selectedVariant = variants.find((variant) =>
    optionMatchesState(variant.selectedOptions),
  );

  const colorVariantImageSet = new Set(
    variants
      .filter((variant) =>
        variant.selectedOptions.some(
          (option) =>
            (option.name.toLowerCase() === "color" ||
              option.name.toLowerCase() === "colour") &&
            option.value.trim().toLowerCase() === selectedColor,
        ),
      )
      .map((variant) => variant.image?.src)
      .filter((imageSrc): imageSrc is string => Boolean(imageSrc))
      .map((imageSrc) => normalizeImageKey(imageSrc)),
  );

  const colorKeywords = selectedColor
    ? Array.from(new Set(selectedColor.split(/\s+/).filter(Boolean)))
    : [];

  const textMatchedImages =
    colorKeywords.length > 0
      ? images.filter((image) => {
          const haystack = `${image.altText || ""} ${image.src}`.toLowerCase();
          return colorKeywords.every((keyword) => haystack.includes(keyword));
        })
      : [];

  const imagesMatchedByVariant =
    selectedColor && colorVariantImageSet.size > 0
      ? images.filter((image) =>
          colorVariantImageSet.has(normalizeImageKey(image.src)),
        )
      : [];

  const selectedVariantImage = selectedVariant?.image
    ? [selectedVariant.image]
    : [];

  const visibleImages =
    imagesMatchedByVariant.length > 0
      ? imagesMatchedByVariant
      : textMatchedImages.length > 0
        ? textMatchedImages
        : selectedColor && selectedVariantImage.length > 0
          ? selectedVariantImage
          : images;

  // Always prepend the first product image as the first thumbnail if not already included
  const firstImage = images[0];
  const filteredImages =
    firstImage &&
    visibleImages !== images &&
    !visibleImages.some(
      (img) => normalizeImageKey(img.src) === normalizeImageKey(firstImage.src),
    )
      ? [firstImage, ...visibleImages]
      : visibleImages;

  const imageIndex = state.image ? parseInt(state.image) : 0;
  const clampedImageIndex = Math.max(
    0,
    Math.min(imageIndex, filteredImages.length - 1),
  );
  const selectedImage = filteredImages[clampedImageIndex];
  const selectedImageAspectRatio =
    selectedImage?.width && selectedImage?.height
      ? `${selectedImage.width} / ${selectedImage.height}`
      : "1 / 1";

  return (
    <form className="flex flex-col-reverse gap-4 md:flex-row md:items-start">
      {/* Thumbnails - Vertical on left side */}
      {filteredImages.length > 1 ? (
        <ul className="flex gap-2 overflow-x-auto pb-1 md:h-[550px] md:flex-col md:gap-3 md:overflow-x-hidden md:overflow-y-auto md:pr-1 md:pb-0">
          {filteredImages.map((image, index) => {
            const isActive = index === clampedImageIndex;

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
      <div
        className="relative max-h-[550px] w-full overflow-hidden rounded-lg bg-white md:flex-1"
        style={{ aspectRatio: selectedImageAspectRatio }}
      >
        {selectedImage && (
          <Image
            className="h-full w-full object-contain"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            alt={selectedImage.altText as string}
            src={selectedImage.src as string}
            priority={true}
          />
        )}
      </div>
    </form>
  );
}
