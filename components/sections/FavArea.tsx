"use client";

import Image from "next/image";
import { FadeIn } from "@/components/shared/FadeIn";

export function FavArea() {
  return (
    <section className="mx-4 sm:mx-6 md:mx-8 md:mx-10 xl:mx-12 2xl:mx-24 mb-10 sm:mb-12 md:mb-16 md:mb-24 xl:mb-32 2xl:mb-64 bg-beige text-black mt-4 md:mt-6 lg:mt-8 xl:mt-12 2xl:mt-16">
      <div className="">
        <FadeIn>
          <div className="grid grid-cols-4 md:grid-cols-12">
            <div className="col-span-1 col-start-1 text-left md:col-span-4 md:col-start-5 md:text-center">
              <p className="subtitle mb-2">/ Проёмы</p>
            </div>

            <div className="col-span-3 col-start-2 text-left md:col-span-4 md:col-start-5 md:text-center">
              <p className="text-body">
                Одно из самых любимых мест в студии — пространство с проёмами, где взгляд мягко уходит вглубь. Здесь появляется ощущение ритма и воздуха.
              </p>
            </div>

            <div className="col-span-3 col-start-2 md:col-span-4 md:col-start-5 3xl:col-span-2 3xl:col-start-6 my-2 md:my-6 xl:my-8 2xl:my-10">
              <Image
                src="/images/image2.jpg"
                alt="Пространство с проёмами в студии"
                width={1200}
                height={900}
                className="w-1/2 md:w-full h-[200px] md:h-[400px] lg:h-[500px] xl:h-[800px] 2xl:h-[1000px] object-cover"
              />
            </div>

            <div className="col-span-3 col-start-2 text-left md:col-span-4 md:col-start-5 md:text-center">
              <p className="text-body">
                Это место, в котором не нужно искать композицию. Она уже есть.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
