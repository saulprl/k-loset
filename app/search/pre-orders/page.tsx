"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
    Bell,
    Calendar,
    Clock,
    Mail,
    MoveRight,
    Package,
    Sparkles,
    Star,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const upcomingProducts = [
  {
    id: 1,
    name: "Spring Collection Blazer",
    image: "/img/smart-fit.jpg",
    price: "$149.00",
    releaseDate: "March 15, 2026",
    daysLeft: 34,
    spots: 12,
    totalSpots: 50,
  },
  {
    id: 2,
    name: "Limited Edition Uniform Set",
    image: "/img/back-2-school.jpg",
    price: "$199.00",
    releaseDate: "April 1, 2026",
    daysLeft: 51,
    spots: 28,
    totalSpots: 100,
  },
  {
    id: 3,
    name: "Exclusive Designer Shirt",
    image: "/img/timeless-style.jpg",
    price: "$89.00",
    releaseDate: "March 1, 2026",
    daysLeft: 20,
    spots: 5,
    totalSpots: 30,
  },
];

const benefits = [
  {
    icon: Star,
    title: "Priority Access",
    description: "Be the first to get new releases before anyone else",
  },
  {
    icon: Package,
    title: "Guaranteed Stock",
    description: "Never miss out on limited edition items",
  },
  {
    icon: Sparkles,
    title: "Exclusive Pricing",
    description: "Special pre-order discounts for early supporters",
  },
];

export default function PreOrdersPage() {
  const [email, setEmail] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [notifyAll, setNotifyAll] = useState(false);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] w-full flex-col items-center justify-center overflow-hidden bg-[#1E3240] px-4 py-16 text-white">
        <div className="absolute inset-0 bg-[url('/img/azul-banner.png')] bg-cover bg-center opacity-40" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
            <Bell className="size-4" />
            <span>Limited Spots Available</span>
          </div>
          <h1 className="mb-6 font-sans text-5xl leading-tight font-bold md:text-7xl">
            Pre-Order Now
          </h1>
          <p className="mb-8 text-lg text-neutral-200 md:text-xl">
            Secure your exclusive pieces before they launch. Be the first to
            wear the latest collections with guaranteed availability.
          </p>
          <Button variant="default" size="default">
            View Upcoming Releases
            <MoveRight />
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <h2 className="mb-12 text-center font-sans text-4xl font-bold text-neutral-900 md:text-5xl">
          Why Pre-Order?
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="group rounded-lg border border-neutral-200 bg-white p-8 text-center transition-all duration-300 hover:border-neutral-900 hover:shadow-lg"
              >
                <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-neutral-100 transition-colors duration-300 group-hover:bg-neutral-900 group-hover:text-white">
                  <Icon className="size-8" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-neutral-900">
                  {benefit.title}
                </h3>
                <p className="text-neutral-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Upcoming Products */}
      <section className="bg-neutral-50 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center font-sans text-4xl font-bold text-neutral-900 md:text-5xl">
            Upcoming Releases
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-neutral-600">
            Reserve your favorite pieces now and be first in line when they
            launch
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {upcomingProducts.map((product) => {
              const spotsPercentage =
                ((product.totalSpots - product.spots) / product.totalSpots) *
                100;
              const isSelected = selectedProduct === product.id;
              const isAlmostGone = product.spots <= 10;

              return (
                <div
                  key={product.id}
                  className={cn(
                    "group overflow-hidden rounded-lg border-2 bg-white transition-all duration-300",
                    isSelected
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
                    {isAlmostGone && (
                      <div className="absolute top-4 left-4 rounded-full bg-red-500 px-3 py-1 text-xs font-medium text-white">
                        Almost Gone!
                      </div>
                    )}
                    <div className="absolute top-4 right-4 rounded-full bg-black/70 px-3 py-1 text-xs text-white backdrop-blur-sm">
                      <span className="flex items-center gap-1">
                        <Clock className="size-3" />
                        {product.daysLeft} days left
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-1 text-lg font-semibold text-neutral-900">
                      {product.name}
                    </h3>
                    <p className="mb-3 text-2xl font-bold text-neutral-900">
                      {product.price}
                    </p>

                    <div className="mb-3 flex items-center gap-2 text-sm text-neutral-600">
                      <Calendar className="size-4" />
                      <span>Release: {product.releaseDate}</span>
                    </div>

                    {/* Progress bar */}
                    <div className="mb-2">
                      <div className="mb-1 flex justify-between text-xs text-neutral-600">
                        <span>{product.spots} spots left</span>
                        <span>{product.totalSpots} total</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-200">
                        <div
                          className={cn(
                            "h-full rounded-full transition-all duration-500",
                            spotsPercentage > 80
                              ? "bg-red-500"
                              : spotsPercentage > 50
                                ? "bg-yellow-500"
                                : "bg-green-500",
                          )}
                          style={{ width: `${spotsPercentage}%` }}
                        />
                      </div>
                    </div>

                    <Button
                      variant="inverseDefault"
                      size="sm"
                      className="mt-4 w-full"
                      onClick={() => setSelectedProduct(product.id)}
                    >
                      {isSelected ? "Reserved ✓" : "Pre-Order Now"}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Email Notification */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="rounded-2xl bg-neutral-900 p-8 text-white md:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-white/10">
              <Mail className="size-8" />
            </div>
            <h2 className="mb-4 font-sans text-3xl font-bold md:text-4xl">
              Never Miss a Drop
            </h2>
            <p className="mb-8 text-neutral-300">
              Subscribe to get notified about upcoming pre-orders, exclusive
              releases, and early access opportunities.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 border-neutral-700 bg-neutral-800 text-white placeholder:text-neutral-400 sm:w-80"
              />
              <Button variant="default" size="sm" className="h-12">
                Subscribe
                <Bell className="size-4" />
              </Button>
            </div>

            <label className="mt-4 flex cursor-pointer items-center justify-center gap-2 text-sm text-neutral-400">
              <input
                type="checkbox"
                checked={notifyAll}
                onChange={(e) => setNotifyAll(e.target.checked)}
                className="size-4 rounded border-neutral-600 bg-neutral-800"
              />
              Notify me about all new pre-orders
            </label>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-neutral-50 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-center font-sans text-4xl font-bold text-neutral-900 md:text-5xl">
            Pre-Order FAQ
          </h2>

          <div className="space-y-6">
            {[
              {
                question: "How do pre-orders work?",
                answer:
                  "When you pre-order, you reserve your item before it's released. You'll be charged at the time of pre-order, and your item will be shipped as soon as it becomes available.",
              },
              {
                question: "Can I cancel my pre-order?",
                answer:
                  "Yes, you can cancel your pre-order anytime before the item ships. Full refunds are processed within 5-7 business days.",
              },
              {
                question: "When will I receive my pre-ordered item?",
                answer:
                  "Each product listing shows the expected release date. Items typically ship within 3-5 business days of the release date.",
              },
              {
                question: "Are pre-order prices guaranteed?",
                answer:
                  "Yes! The price you pay at pre-order is locked in, even if the retail price increases at launch.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="rounded-lg border border-neutral-200 bg-white p-6"
              >
                <h3 className="mb-2 text-lg font-semibold text-neutral-900">
                  {faq.question}
                </h3>
                <p className="text-neutral-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="w-full bg-[url('/img/crema-banner.png')] bg-cover bg-center p-4 pt-18 text-center lg:px-10 lg:pt-12 lg:pb-0">
        <div className="mx-auto w-full bg-[#B2856D] px-8 py-12 text-white">
          <h3 className="mb-4 text-4xl font-bold">Have Questions?</h3>
          <p className="mx-auto mb-6 max-w-xl">
            Our team is here to help with any pre-order inquiries, sizing
            questions, or special requests.
          </p>
          <Button variant="default" size="default">
            Contact Support
            <MoveRight />
          </Button>
        </div>
      </section>
    </div>
  );
}
