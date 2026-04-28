"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero2() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-beige text-black">
      <div className="relative w-full h-screen overflow-hidden md:hidden">
        <Image
          src="/images/image14.webp"
          alt="Фотостудия Квартира 14"
          fill
          className="w-full h-full object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-2">
          <div className="">
            <p className="text-2xl text-beige">
              Фотостудия
              <br />
              в центре Владимира
            </p>
          
          <h1 className="text-5xl uppercase font-normal tracking-wide leading-none text-beige mt-3">Квартира 14</h1>
          </div>
        </div>
      </div>

      <div className="relative hidden md:block h-screen w-full overflow-hidden">
        <Image
          src="/images/image16.webp"
          alt="Фотостудия Квартира 14"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <p className="text-2xl text-beige uppercase mb-3">
              Фотостудия в центре Владимира
            </p>
            <h1 className="text-5xl md:text-5xl lg:text-6xl uppercase text-beige">
              КВАРТИРА 14
            </h1>
          </div>
        </div>
      </div>

      {/* Floating button - fixed bottom right */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        className="fixed bottom-6 right-6 z-30"
      >
        <Link
          href="/booking"
          className="border border-beige flex items-center justify-center gap-2 bg-primary text-beige h-12 px-6 full font-medium hover:opacity-90 transition-opacity"
        >
          <span>Забронировать</span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            aria-hidden="true"
          >
            <path
              d="M6.63569 0.633545L6.07814 1.23333L9.85428 5.00947C10.1195 5.27436 10.4504 5.46388 10.8131 5.55857L10.9018 5.57969H0V6.42446H10.9018L10.8131 6.44558C10.4504 6.54028 10.1195 6.7298 9.85428 6.99469L6.07814 10.7708L6.63147 11.3664L12 6.00208L6.63569 0.633545Z"
              fill="currentColor"
            />
          </svg>
        </Link>
      </motion.div>
    </section>
  );
}
