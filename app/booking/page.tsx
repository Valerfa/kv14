import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Бронирование — Квартира 14",
  description: "Забронируйте фотостудию Квартира 14 онлайн",
};

export default function BookingPage() {
  return (
    <>
      <main className="relative flex-1 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/image14.webp')",
            filter: "grayscale(100%)",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <section className="relative z-10 py-8 md:py-12">
          <div className="mt-20 mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12 2xl:max-w-[1600px] 2xl:mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-subtitle text-beige/80 hover:text-beige transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              На главную
            </Link>
            <div className="mb-8">
              <h1 className="title-section text-left mb-8 text-beige">
                Бронирование
              </h1>
              <p className="text-body text-left text-beige/90">
                Выберите удобное время для вашей съемки
              </p>
            </div>

            <div className="w-full flex justify-center py-2 md:py-4 lg:py-6 xl:py-8 2xl:py-10">
              <iframe
                src="https://booking.booknow.ru/kvartira-14"
                className="w-full max-w-[1000px] h-[clamp(500px,70vh,1200px)] border-0"
                referrerPolicy="origin"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
