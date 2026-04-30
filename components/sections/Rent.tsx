"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/shared/FadeIn";

const rentSlides = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
];

export function Rent() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goPrev = () =>
    setActiveIndex((prev) => (prev - 1 + rentSlides.length) % rentSlides.length);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % rentSlides.length);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % rentSlides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="rent"
      className="mx-4 sm:mx-6 md:mx-8 md:mx-10 xl:mx-12 2xl:mx-24 mt-10 sm:mt-12 md:mt-16 md:mt-24 xl:mt-32 2xl:mt-64 pt-16 md:pt-24 pb-4 bg-beige text-black"
    >
      <div className="">
        <FadeIn>
          <div className="grid grid-cols-4 md:grid-cols-12">
            <div className="col-span-4 md:col-span-6 md:col-start-4 text-left md:text-center mb-4 md:mb-6 lg:mb-8 xl:mb-12 2xl:mb-16">
              <p className="subtitle mb-2">/ Аренда</p>
              <h2 className="title-section leading-[1.05] mb-6">
                СТУДИЯ ДОСТУПНА ДЛЯ БРОНИРОВАНИЯ ПО ЧАСАМ
              </h2>
            </div>
          </div>

          <div className="mb-6 grid grid-cols-4 md:flex md:items-start md:justify-between">
            <div className="col-start-2 col-span-2 md:col-span-4 md:flex-1 space-y-4">
            <div className="flex flex-col gap-4 md:justify-between">
            <div>
              <div>
                <p className="text-body text-primary mb-2">1800 / час</p>
                <div className="flex flex-col gap-1 text-body opacity-80">
                  <p>44 м² пространства</p>
                  <p>Потолки 3,5 м</p>
                </div>
              </div>

              <Link
                href="/booking"
                className="mt-4 inline-flex items-center justify-center full border xl:border-2 border-black px-8 py-3 text-body hover:opacity-90 transition-opacity"
              >
                Забронировать
              </Link>
              </div>

              <div className="flex items-center gap-4 md:ml-auto">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Предыдущий слайд"
                  className="inline-flex items-center justify-center full transition-colors cursor-pointer hover:opacity-60"
                >
                  <Image
                    src="/icons/arrow.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="w-[clamp(20px,2vw,42px)] h-[clamp(20px,2vw,42px)] rotate-180"
                    aria-hidden="true"
                  />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Следующий слайд"
                  className="inline-flex items-center justify-center full transition-colors cursor-pointer hover:opacity-60"
                >
                  <Image
                    src="/icons/arrow.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="w-[clamp(20px,2vw,42px)] h-[clamp(20px,2vw,42px)]"
                    aria-hidden="true"
                  />
                </button>
              </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
          <div className="w-1/2 h-[clamp(200px,70vh,1500px)] overflow-hidden hidden md:block">
              <Image
                src="/images/image3.webp"
                alt="Фотостудия Квартира 14"
                width={1200}
                height={900}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 h-[clamp(300px,70vh,1000px)]">
              <div className="overflow-hidden w-full h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full"
                  >
                    <Image
                      src={rentSlides[activeIndex]}
                      alt={`Аренда студии ${activeIndex + 1}`}
                      width={1200}
                      height={800}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
