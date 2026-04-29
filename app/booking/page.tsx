import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Бронирование — Квартира 14",
  description: "Забронируйте фотостудию Квартира 14 онлайн",
};

export default function BookingPage() {
  return (
    <>
      <main className="flex-1">


        <section className="py-8 md:py-12">
          <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12 2xl:max-w-[1600px] 2xl:mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-primary-light hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              На главную
            </Link>
            <div className="mb-8">
              <h1 className="title-section text-left md:text-center mb-8">
                Бронирование
              </h1>
              <p className="text-muted-foreground text-left md:text-center">
                Выберите удобное время для вашей съемки
              </p>
            </div>

            <Script
              src="https://booking.booknow.ru/widget.js"
              strategy="afterInteractive"
            />
            <div className="w-full flex justify-center">
              <iframe
                src="https://booking.booknow.ru/kvartira-14"
                className="w-full max-w-[900px] h-[700px] border-0"
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
