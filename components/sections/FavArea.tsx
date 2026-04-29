"use client";

import Image from "next/image";
import { FadeIn } from "@/components/shared/FadeIn";

export function FavArea() {
  return (
    <section className="pb-16 lg:pb-24 bg-beige text-black">
      <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12 2xl:max-w-[1600px] 2xl:mx-auto">
        <FadeIn>
          <div className="grid grid-cols-12 gap-4">
            <p className="subtitle mb-2 col-start-1 col-span-3 text-left lg:col-start-4 lg:col-span-6 lg:text-center">
              / Проёмы
            </p>

            <div className="col-start-4 col-span-9 text-left lg:contents">
              <p className="text-body lg:col-start-4 lg:col-span-6 lg:text-center">
                  Одно из самых любимых мест в студии — пространство с проёмами, где взгляд мягко уходит вглубь. Здесь появляется ощущение ритма и воздуха.
              </p>

              <div className="my-2 lg:col-start-5 lg:col-span-4 mb-6">
                <Image
                  src="/images/image2.jpg"
                  alt="Пространство с проёмами в студии"
                  width={1200}
                  height={900}
                  className="w-full h-[400px] lg:h-[600px] object-cover"
                />
              </div>

              <p className="text-body lg:col-start-4 lg:col-span-6 lg:text-center">
                Это место, в котором не нужно искать композицию. Она уже есть.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
