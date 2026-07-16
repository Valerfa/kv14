"use client";

import Image from "next/image";
import { FadeIn } from "@/components/shared/FadeIn";
import { Camera, MapPin, Clock } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Профессиональное оборудование",
    description: "Вспышки, софтбоксы и всё необходимое для съемки",
  },
  {
    icon: MapPin,
    title: "Центр города",
    description: "Удобное расположение с хорошей транспортной доступностью",
  },
  {
    icon: Clock,
    title: "Гибкий график",
    description: "Работаем ежедневно, удобное время бронирования",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="py-10 md:py-16 md:py-20 xl:py-28 2xl:py-32 px-4 sm:px-6 md:px-8 md:px-10 xl:px-12 2xl:px-24 bg-primary text-beige"
    >
      <div className="">
        <FadeIn className="">
          <div className="grid grid-cols-4 md:grid-cols-12">
            <div className="col-span-4 md:col-span-6 md:col-start-4 text-left md:text-center">
              <p className="subtitle mb-2">/ О нас</p>
              <h2 className="title-section leading-[1.05]">
                СТУДИЯ, ГДЕ ПРОСТРАНСТВО НЕ ОТВЛЕКАЕТ — А РАСКРЫВАЕТ
              </h2>
            </div>

            <div className="col-span-3 col-start-2 md:col-span-4 md:col-start-5 3xl:col-span-2 3xl:col-start-6 my-2 md:my-6 xl:my-8 3xl:my-10">
              <Image
                src="/images/image5.webp"
                alt="Фотостудия Квартира 14"
                width={300}
                height={300}
                className="w-1/2 md:w-full h-[200px] h-[200px] md:h-[400px] lg:h-[500px] xl:h-[600px] object-cover object-top"
                priority={false}
              />
            </div>

            <div className="col-start-2 col-span-3 text-body text-left md:col-start-5 md:col-span-4 md:text-center">
              <p className="">
                Здесь свет живёт в течение дня, медленно проходя через комнаты, ложится на стены, паркет, линии дверных проёмов.
              </p>
              <p className="hidden">
                Высокие потолки, распашные двери, глубина перспективы и воздух между пространствами — всё остаётся свободным, чтобы вы могли двигаться, чувствовать, быть.
              </p>
            </div>
          </div>
        </FadeIn>

      
      </div>
    </section>
  );
}
