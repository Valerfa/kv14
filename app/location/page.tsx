import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Как нас найти — Квартира 14",
  description: "Как добраться до фотостудии Квартира 14",
};

const locationPhotos = [
  "/images/location1.jpg",
  "/images/location2.jpg",
  "/images/location3.jpg",
];

export default function LocationPage() {
  return (
    <>
      <main className="flex-1">
        <section className="py-8 md:py-12">
          <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12 2xl:max-w-[1600px] 2xl:mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-primary-light hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              На главную
            </Link>
            <h1 className="title-section text-left">Как нас найти</h1>

            <div className="mt-4 mb-8 md:mb-10">
              <p className="text-body text-left">
                Мы находимся в центре Владимира, рядом с Торговыми рядами
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
              {locationPhotos.map((src, index) => (
                <div key={src} className="grid grid-cols-4 md:block">
                  <div className="col-start-2 col-span-3 md:contents overflow-hidden lg">
                    <Image
                      src={src}
                      alt={`Как нас найти ${index + 1}`}
                      width={1200}
                      height={900}
                      className="h-[360px] w-full object-cover md:h-[860px]"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-body text-left">Адрес: г. Владимир, ул. Ильича, д. 4</p>
            </div>

            <div className="mt-8 grid grid-cols-4 md:block">
              <div className="col-start-2 col-span-3 md:contents">
                <a
                  href="https://yandex.ru/maps/?rtext=~56.129057,40.406635&rtt=auto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex text-body items-center justify-center full border border-primary px-8 py-3 text-sm hover:opacity-90 transition-opacity"
                >
                  Построить маршрут
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
