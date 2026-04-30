"use client";

import { FadeIn } from "@/components/shared/FadeIn";

const photos = [
  "/images/photo1.webp",
  "/images/photo2.webp",
  "/images/photo3.webp",
  "/images/photo4.webp",
  "/images/photo5.webp",
  "/images/photo6.webp",
  "/images/photo7.webp",
  "/images/photo8.webp",
  "/images/photo9.webp",
  "/images/photo10.webp",
];

export function ShotInStudio() {
  return (
    <section className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12 2xl:mx-24 my-10 sm:my-12 md:my-16 lg:my-24 xl:my-32 2xl:my-64 py-16 md:py-24">
      <div className="">
        <FadeIn>
          <div className="grid grid-cols-4 lg:grid-cols-12">
            <div className="col-span-4 lg:col-span-6 lg:col-start-4 text-left lg:text-center">
              <p className="subtitle mb-2">/ Снимки</p>
              <h2 className="title-section">
                Снято в нашей студии
              </h2>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {photos.map((src, index) => (
              <div
                key={index}
                className={`${index % 3 === 0 ? "aspect-square" : "aspect-[3/4]"} md:aspect-auto ${index % 3 === 1 ? "md:col-span-2" : "md:col-span-1"}`}
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
