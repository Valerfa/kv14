"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/shared/FadeIn";
import { ChevronLeft, ChevronRight } from "lucide-react";

const rentSlides = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
];

export function Rent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevIndex = (activeIndex - 1 + rentSlides.length) % rentSlides.length;
  const nextIndex = (activeIndex + 1) % rentSlides.length;

  const goPrev = () =>
    setActiveIndex((prev) => (prev - 1 + rentSlides.length) % rentSlides.length);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % rentSlides.length);

  return (
    <section id="rent" className="pt-16 lg:pt-24 pb-4 bg-beige text-black">
      <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12 2xl:max-w-[1600px] 2xl:mx-auto">
        <FadeIn className="md:hidden">
          <p className="subtitle mb-2">/ Аренда</p>
          <h2 className="title-section leading-[1.05] mb-6">
            СТУДИЯ ДОСТУПНА ДЛЯ БРОНИРОВАНИЯ ПО ЧАСАМ
          </h2>

          <div className="mb-6 grid grid-cols-4">
            <div className="col-start-2 col-span-2 space-y-4">
              <div>
                <p className="text-body text-primary mb-2">1800 / час</p>
                <div className="flex flex-col gap-1 text-body opacity-80">
                  <p>44 м² пространства</p>
                  <p>Потолки 3,5 м</p>
                </div>
              </div>

              <Link
                href="/booking"
                className="inline-flex items-center justify-center full border border-black px-8 py-3 text-sm hover:opacity-90 transition-opacity"
              >
                Забронировать
              </Link>
            </div>
          </div>

          <div className="-mx-4 px-4">
            <div className="hide-scrollbar flex gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory">
              {rentSlides.map((slide, index) => (
                <div
                  key={slide}
                  className="min-w-[85%] shrink-0 snap-start 2xl overflow-hidden"
                >
                  <Image
                    src={slide}
                    alt={`Аренда студии ${index + 1}`}
                    width={1200}
                    height={800}
                    className="h-[260px] w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn className="hidden md:block">
          <p className="subtitle mb-2 md:text-center">/ Аренда</p>
          <h2 className="title-section leading-[1.05] mb-6 max-w-[820px] md:text-center md:mx-auto">
            СТУДИЯ ДОСТУПНА ДЛЯ <br/> БРОНИРОВАНИЯ ПО ЧАСАМ
          </h2>

          <div className="mb-8 flex items-start justify-between gap-6">
            <div>
              <p className="text-body text-primary mb-2">1800 / час</p>
              <div className="flex flex-col gap-1 text-body opacity-80">
                <p>44 м² пространства</p>
                <p>Потолки 3,5 м</p>
              </div>
            </div>

            <Link
              href="/booking"
              className="inline-flex items-center justify-center full border border-black px-8 py-3 text-sm hover:opacity-90 transition-opacity"
            >
              Забронировать
            </Link>
          </div>

          <div className="relative">
            <div className="absolute right-0 -top-12 z-10 flex items-center gap-2">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Предыдущий слайд"
                className="inline-flex h-9 w-9 items-center justify-center full text-black hover:border-black transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Следующий слайд"
                className="inline-flex h-9 w-9 items-center justify-center full text-black hover:border-black transition-colors"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <div className="hidden md:flex items-center justify-center overflow-hidden -mx-16">
              <div className="flex w-full items-center justify-center gap-4">
                <div className="w-[10%] overflow-hidden opacity-60 grayscale transition-all duration-500">
                  <Image
                    src={rentSlides[prevIndex]}
                    alt="Предыдущий слайд аренды"
                    width={1400}
                    height={900}
                    className="h-[520px] w-full object-cover"
                  />
                </div>

                <div className="w-[80%] overflow-hidden opacity-100 grayscale-0 transition-all duration-500">
                  <Image
                    src={rentSlides[activeIndex]}
                    alt={`Аренда студии ${activeIndex + 1}`}
                    width={1400}
                    height={900}
                    className="h-[520px] w-full object-cover"
                    priority
                  />
                </div>

                <div className="w-[10%] overflow-hidden opacity-60 grayscale transition-all duration-500">
                  <Image
                    src={rentSlides[nextIndex]}
                    alt="Следующий слайд аренды"
                    width={1400}
                    height={900}
                    className="h-[520px] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
