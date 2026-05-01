"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/shared/FadeIn";

const rentSlides = [
  "/images/image1.webp",
  "/images/image2.webp",
  "/images/image4.webp",
  "/images/image5.webp",
  "/images/image6.webp",
  "/images/image7.webp",
  "/images/image8.webp",
  "/images/image9.webp",
  "/images/image10.webp",
  "/images/image11.webp",
  "/images/image12.webp",
  "/images/image13.webp",
  "/images/image14.webp",
  "/images/image15.webp",
  "/images/image16.webp",

];

export function Rent() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goPrev = () =>
    setActiveIndex((prev) => (prev - 1 + rentSlides.length) % rentSlides.length);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % rentSlides.length);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % rentSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="rent"
      className="mx-4 sm:mx-6 md:mx-8 md:mx-10 xl:mx-12 2xl:mx-24 pt-10 md:pt-16 md:pt-20 xl:pt-28 2xl:pt-32 pb-4 bg-beige text-black"
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

          <div className="mb-6 grid grid-cols-4 md:grid-cols-12">
            <div className="col-start-2 col-span-3 md:col-start-1">
              <div>
                <p className="text-body text-primary mb-2">1800 / час</p>
                <div className="flex flex-col gap-1 text-body opacity-60 mb-4 ">
                  <p>44 м² пространства</p>
                  <p>Потолки 3,5 м</p>
                </div>
              </div>

              <Link
                href="/booking"
                className="mt-4 inline-flex items-center justify-center full border xl:border-2 border-black/60 px-8 py-3 text-body hover:opacity-90 transition-opacity"
              >
                Забронировать
              </Link>
              </div>

              <div className="col-start-2 col-span-3 md:col-start-11 md:col-span-3 flex items-center gap-6 md:ml-auto md:mt-auto mt-6">
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
                    className="w-[clamp(20px,2vw,36px)] h-[clamp(20px,2vw,36px)] rotate-180"
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

          <div className="flex flex-col md:flex-row gap-4">
          <div className="w-1/2 h-[200px] md:h-[400px] lg:h-[500px] xl:h-[600px] overflow-hidden hidden md:block">
              <Image
                src="/images/image3.webp"
                alt="Фотостудия Квартира 14"
                width={1200}
                height={900}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 h-[350px] md:h-[550px] lg:h-[600px] xl:h-[800px]">
              <div className="overflow-hidden w-full h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
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
