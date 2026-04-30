"use client";

import Image from "next/image";
import { FadeIn } from "@/components/shared/FadeIn";

const photos = [
  { id: 1, alt: "Зал фотостудии", aspect: "aspect-[3/4]" },
  { id: 2, alt: "Зона для съемок", aspect: "aspect-[4/3]" },
  { id: 3, alt: "Интерьер", aspect: "aspect-[3/4]" },
  { id: 4, alt: "Реквизит", aspect: "aspect-square" },
  { id: 5, alt: "Окно", aspect: "aspect-[4/5]" },
  { id: 6, alt: "Детали", aspect: "aspect-[3/4]" },
];

export function Photos() {
  return (
    <section id="photos" className="">
      <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12 2xl:mx-24 my-10 sm:my-12 md:my-16 lg:my-24 xl:my-32 2xl:my-64 pt-16 lg:pt-24 ">
        <FadeIn>
          <div className="text-center mb-12 lg:mb-16">
            <span className="text-sm text-muted-foreground tracking-widest uppercase mb-4 block">
              Галерея
            </span>
            <h2 className="font-[var(--font-unbounded)] text-3xl md:text-4xl font-medium tracking-tight">
              Пространство в деталях
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {photos.map((photo, index) => (
            <FadeIn key={photo.id} delay={index * 0.05}>
              <div className={`relative ${photo.aspect} xl overflow-hidden bg-muted group`}>
                <Image
                  src={`/images/gallery-${photo.id}.webp`}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <p className="text-center text-sm text-muted-foreground mt-8">
            Добавьте свои фотографии в папку /public/images/
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
