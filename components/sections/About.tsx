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
      className="py-16 lg:py-24 bg-primary text-beige"
    >
      <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12 2xl:max-w-[1600px] 2xl:mx-auto">
        <FadeIn className="">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-start-0 col-span-12 lg:col-start-4 lg:col-span-6">
              <p className="subtitle mb-2 text-left lg:text-center">/ О нас</p>
              <h2 className="title-section leading-[1.05] mb-6 text-left lg:text-center">
                СТУДИЯ, ГДЕ ПРОСТРАНСТВО НЕ ОТВЛЕКАЕТ — А РАСКРЫВАЕТ
              </h2>
            </div>

            <div className="col-start-4 col-span-9 lg:col-start-5 lg:col-span-4 mb-6">
              <Image
                src="/images/image11.webp"
                alt="Фотостудия Квартира 14"
                width={300}
                height={300}
                className="w-full h-[400px] lg:h-[600px] object-cover"
                priority={false}
              />
            </div>

            <div className="col-start-4 col-span-9 lg:col-start-4 lg:col-span-6 text-body text-left lg:text-center">
              <p className="">
                Здесь свет живёт в течение дня, медленно проходя через комнаты, ложится на стены, паркет, линии дверных проёмов.
              </p>
              <p className="mt-4 hidden">
                Высокие потолки, распашные двери, глубина перспективы и воздух между пространствами — всё остаётся свободным, чтобы вы могли двигаться, чувствовать, быть.
              </p>
              <p className="mt-6 subtitle">//</p>
            </div>
          </div>
        </FadeIn>

      
      </div>
    </section>
  );
}
