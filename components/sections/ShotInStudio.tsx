"use client";

import Image from "next/image";
import { FadeIn } from "@/components/shared/FadeIn";

const studioShots = [
  "/images/image6.jpg",
  "/images/image7.jpg",
  "/images/image8.jpg",
  "/images/image9.jpg",
  "/images/image10.jpg",
];

export function ShotInStudio() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-4 lg:mx-10 xl:mx-12 2xl:max-w-[1600px] 2xl:mx-auto">
        <FadeIn>
          <p className="subtitle mb-2 text-left lg:text-center">/ Снимки</p>
          <h2 className="title-section text-left md:text-center">
            Снято в нашей студии
          </h2>

          <div className="mt-8 -mx-4 flex gap-4 overflow-x-auto md:overflow-visible hide-scrollbar">
            {studioShots.map((src, index) => (
              <div key={src} className="shrink-0 w-[220px] md:w-0 md:flex-1">
                <Image
                  src={src}
                  alt={`Фото из студии ${index + 1}`}
                  width={400}
                  height={500}
                  className="object-cover h-[300px] md:h-[400px] w-full"
                />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
