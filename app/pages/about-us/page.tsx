import { Button } from "@/components/ui/button";
import {
    Award,
    Heart,
    Leaf,
    MapPin,
    MoveRight,
    Sparkles,
    Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const values = [
  {
    icon: Heart,
    title: "Passion for Fashion",
    description:
      "Every piece we create is crafted with love and attention to detail, reflecting our deep passion for timeless style.",
  },
  {
    icon: Sparkles,
    title: "Quality First",
    description:
      "We source only the finest materials and work with skilled artisans to ensure every garment meets our high standards.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "We're committed to ethical practices and sustainable fashion, minimizing our environmental footprint.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Building a community of fashion enthusiasts who appreciate quality, style, and individuality.",
  },
];

const milestones = [
  {
    year: "2020",
    event: "K-YOBOK was founded with a vision for unique fashion",
  },
  { year: "2021", event: "Launched our first personalized clothing line" },
  { year: "2022", event: "Expanded to serve customers worldwide" },
  { year: "2023", event: "Introduced sustainable fabric collections" },
  { year: "2024", event: "Opened our flagship design studio" },
  { year: "2025", event: "Celebrated 50,000+ happy customers" },
];

const team = [
  {
    name: "Sofia Chen",
    role: "Founder & Creative Director",
    image: "/img/smart-fit.jpg",
  },
  {
    name: "Marcus Rivera",
    role: "Head of Design",
    image: "/img/timeless-style.jpg",
  },
  {
    name: "Emma Thompson",
    role: "Sustainability Lead",
    image: "/img/back-2-school.jpg",
  },
];

export default function AboutUsPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative flex min-h-[70vh] w-full flex-col items-center justify-center overflow-hidden bg-neutral-900 px-4 py-16 text-white">
        <div className="absolute inset-0">
          <Image
            src="/img/home-hero.jpg"
            alt="K-YOBOK Story"
            fill
            className="object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="mb-6 font-serif text-5xl leading-tight font-bold md:text-7xl">
            Our Story
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-neutral-200 md:text-xl">
            Born from a passion for exceptional fashion and a desire to make
            personalized style accessible to everyone. We believe clothing
            should tell your story.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 font-sans text-4xl font-bold text-neutral-900 md:text-5xl">
              Redefining Personal Style
            </h2>
            <p className="mb-6 text-lg text-neutral-600">
              At K-YOBOK, we believe that fashion is more than just
              clothing—it's a form of self-expression. Our mission is to empower
              individuals to express their unique identity through carefully
              crafted, personalized garments.
            </p>
            <p className="mb-6 text-lg text-neutral-600">
              From custom embroidery to exclusive designs, we combine
              traditional craftsmanship with modern aesthetics to create pieces
              that are as unique as you are.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-full bg-neutral-900">
                <Award className="size-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-neutral-900">
                  Award-Winning Design
                </p>
                <p className="text-sm text-neutral-600">
                  Recognized for excellence in fashion
                </p>
              </div>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <Image
              src="/img/smart-fit.jpg"
              alt="Our craftsmanship"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-neutral-50 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center font-sans text-4xl font-bold text-neutral-900 md:text-5xl">
            Our Values
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-neutral-600">
            The principles that guide everything we do
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="group rounded-lg bg-white p-6 text-center shadow-sm transition-all duration-300 hover:shadow-lg"
                >
                  <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-neutral-100 transition-colors duration-300 group-hover:bg-neutral-900 group-hover:text-white">
                    <Icon className="size-7" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-neutral-900">
                    {value.title}
                  </h3>
                  <p className="text-sm text-neutral-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="mx-auto max-w-4xl px-4 py-16 md:py-24">
        <h2 className="mb-12 text-center font-sans text-4xl font-bold text-neutral-900 md:text-5xl">
          Our Journey
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-0 left-1/2 h-full w-0.5 -translate-x-1/2 bg-neutral-200" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}
                >
                  <span className="text-3xl font-bold text-neutral-900">
                    {milestone.year}
                  </span>
                  <p className="mt-2 text-neutral-600">{milestone.event}</p>
                </div>

                {/* Center dot */}
                <div className="absolute left-1/2 flex size-4 -translate-x-1/2 items-center justify-center rounded-full bg-neutral-900">
                  <div className="size-2 rounded-full bg-white" />
                </div>

                <div className="w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-neutral-900 px-4 py-16 text-white md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center font-sans text-4xl font-bold md:text-5xl">
            Meet Our Team
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-neutral-400">
            The creative minds behind K-YOBOK
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="group text-center">
                <div className="relative mx-auto mb-6 aspect-square w-48 overflow-hidden rounded-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-neutral-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-neutral-100">
            <Image
              src="/img/timeless-style.jpg"
              alt="Our Studio"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="mb-6 font-sans text-4xl font-bold text-neutral-900 md:text-5xl">
              Visit Our Studio
            </h2>
            <p className="mb-6 text-lg text-neutral-600">
              Experience our craftsmanship firsthand at our flagship studio.
              Book an appointment for a personalized consultation and see how we
              bring your vision to life.
            </p>
            <div className="mb-6 flex items-start gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-100">
                <MapPin className="size-5 text-neutral-600" />
              </div>
              <div>
                <p className="font-semibold text-neutral-900">
                  K-YOBOK Design Studio
                </p>
                <p className="text-neutral-600">
                  123 Fashion Avenue, Suite 500
                  <br />
                  New York, NY 10001
                </p>
              </div>
            </div>
            <Button variant="inverseDefault" size="default" asChild>
              <Link href="/contact">
                Book a Visit
                <MoveRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="w-full bg-[url('/img/morado-banner.jpg')] bg-cover bg-center p-4 pt-18 text-center lg:px-10 lg:pt-12 lg:pb-0">
        <div className="mx-auto w-full bg-[#282532] px-8 py-12 text-white">
          <h3 className="mb-4 text-4xl font-bold">Join Our Story</h3>
          <p className="mx-auto mb-6 max-w-xl">
            Be part of a community that values quality, individuality, and
            timeless style. Start your personalized fashion journey today.
          </p>
          <Button variant="default" size="default" asChild>
            <Link href="/search">
              Explore Collections
              <MoveRight />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
