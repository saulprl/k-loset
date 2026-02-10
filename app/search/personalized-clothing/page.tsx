"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Check, MoveRight, Shirt, Sparkles, Type } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const personalizationOptions = [
  {
    id: "name",
    title: "Name Embroidery",
    description: "Add your name or initials beautifully embroidered",
    icon: Type,
  },
  {
    id: "number",
    title: "Custom Number",
    description: "Perfect for sports jerseys and team uniforms",
    icon: Shirt,
  },
  {
    id: "design",
    title: "Custom Design",
    description: "Upload your own design or choose from our collection",
    icon: Sparkles,
  },
];

const availableProducts = [
  {
    id: 1,
    name: "Classic Blazer",
    image: "/img/smart-fit.jpg",
    price: "$129.00",
    customizable: ["name", "number"],
  },
  {
    id: 2,
    name: "School Uniform Set",
    image: "/img/back-2-school.jpg",
    price: "$89.00",
    customizable: ["name", "number", "design"],
  },
  {
    id: 3,
    name: "Timeless Shirt",
    image: "/img/timeless-style.jpg",
    price: "$69.00",
    customizable: ["name", "design"],
  },
];

export default function PersonalizedClothingPage() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [customText, setCustomText] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] w-full flex-col items-center justify-center overflow-hidden bg-[#282532] px-4 py-16 text-white">
        <div className="absolute inset-0 bg-[url('/img/morado-banner.jpg')] bg-cover bg-center opacity-30" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="mb-6 font-sans text-5xl leading-tight font-bold md:text-7xl">
            Make It Yours
          </h1>
          <p className="mb-8 text-lg text-neutral-200 md:text-xl">
            Personalize your favorite pieces with custom names, numbers, and
            designs. Create clothing that tells your unique story.
          </p>
          <Button variant="default" size="default">
            Start Customizing
            <MoveRight />
          </Button>
        </div>
      </section>

      {/* How It Works */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <h2 className="mb-12 text-center font-sans text-4xl font-bold text-neutral-900 md:text-5xl">
          How It Works
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Choose Your Item",
              description:
                "Select from our collection of customizable clothing items",
            },
            {
              step: "02",
              title: "Add Your Touch",
              description:
                "Enter your name, initials, number or upload your design",
            },
            {
              step: "03",
              title: "We Create It",
              description:
                "Our artisans carefully craft your personalized piece",
            },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-neutral-900 font-sans text-xl font-bold text-white">
                {item.step}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-neutral-900">
                {item.title}
              </h3>
              <p className="text-neutral-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Personalization Options */}
      <section className="bg-neutral-50 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center font-sans text-4xl font-bold text-neutral-900 md:text-5xl">
            Personalization Options
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-neutral-600">
            Choose how you want to make your clothing unique
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {personalizationOptions.map((option) => {
              const Icon = option.icon;
              const isSelected = selectedOption === option.id;

              return (
                <button
                  key={option.id}
                  onClick={() => setSelectedOption(option.id)}
                  className={cn(
                    "group relative flex flex-col items-center rounded-lg border-2 bg-white p-8 text-center transition-all duration-300",
                    isSelected
                      ? "border-neutral-900 shadow-lg"
                      : "border-neutral-200 hover:border-neutral-400",
                  )}
                >
                  {isSelected && (
                    <div className="absolute top-4 right-4 flex size-6 items-center justify-center rounded-full bg-neutral-900">
                      <Check className="size-4 text-white" />
                    </div>
                  )}
                  <div
                    className={cn(
                      "mb-4 flex size-16 items-center justify-center rounded-full transition-colors duration-300",
                      isSelected
                        ? "bg-neutral-900 text-white"
                        : "bg-neutral-100 text-neutral-600 group-hover:bg-neutral-200",
                    )}
                  >
                    <Icon className="size-8" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-neutral-900">
                    {option.title}
                  </h3>
                  <p className="text-sm text-neutral-600">
                    {option.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Custom Text Input */}
          {selectedOption && (
            <div className="mx-auto mt-12 max-w-md">
              <label className="mb-2 block text-sm font-medium text-neutral-700">
                {selectedOption === "name"
                  ? "Enter your name or initials"
                  : selectedOption === "number"
                    ? "Enter your custom number"
                    : "Describe your design idea"}
              </label>
              <div className="flex gap-4">
                <Input
                  type="text"
                  placeholder={
                    selectedOption === "name"
                      ? "e.g., John Smith"
                      : selectedOption === "number"
                        ? "e.g., 23"
                        : "e.g., School logo with name"
                  }
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  className="h-12 flex-1 border-neutral-300 text-base"
                />
                <Button variant="inverseDefault" size="sm">
                  Preview
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Available Products */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <h2 className="mb-4 text-center font-sans text-4xl font-bold text-neutral-900 md:text-5xl">
          Customizable Items
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-neutral-600">
          Select an item to start your personalization journey
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {availableProducts.map((product) => (
            <button
              key={product.id}
              onClick={() => setSelectedProduct(product.id)}
              className={cn(
                "group overflow-hidden rounded-lg border-2 transition-all duration-300",
                selectedProduct === product.id
                  ? "border-neutral-900 shadow-xl"
                  : "border-transparent hover:shadow-lg",
              )}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="bg-white p-4 text-left">
                <h3 className="text-lg font-semibold text-neutral-900">
                  {product.name}
                </h3>
                <p className="mb-2 text-neutral-600">{product.price}</p>
                <div className="flex flex-wrap gap-2">
                  {product.customizable.map((option) => (
                    <span
                      key={option}
                      className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600"
                    >
                      {option === "name"
                        ? "Name"
                        : option === "number"
                          ? "Number"
                          : "Design"}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="w-full bg-[url('/img/gris-banner.png')] bg-cover bg-center p-4 pt-18 text-center lg:px-10 lg:pt-12 lg:pb-0">
        <div className="mx-auto w-full bg-[#585858] px-8 py-12 text-white">
          <h3 className="mb-4 text-4xl font-bold">Ready to Create?</h3>
          <p className="mx-auto mb-6 max-w-xl">
            Contact us for bulk orders, special requests, or if you need help
            bringing your personalization ideas to life.
          </p>
          <Button variant="default" size="default">
            Contact Us
            <MoveRight />
          </Button>
        </div>
      </section>
    </div>
  );
}
