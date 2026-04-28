"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/image5.webp"
        alt="Фотостудия Квартира 14"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12">
        {/* Title block - centered */}
        <div className="flex-1 flex flex-col justify-center items-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-beige/90 text-2xl uppercase font-normal tracking-[0.15em] mb-3 leading-none"
          >
            ФОТОСТУДИЯ В ЦЕНТРЕ ВЛАДИМИРА
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-beige text-5xl uppercase font-normal tracking-wide leading-none"
          >
            КВАРТИРА 14
          </motion.h1>
        </div>
      </div>

      {/* Floating button - fixed bottom right */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Link
          href="/booking"
          className="block bg-primary text-beige px-6 py-3 xl text-sm font-medium hover:bg-primary/85 transition-colors shadow-lg"
        >
          Забронировать
        </Link>
      </motion.div>
    </section>
  );
}
