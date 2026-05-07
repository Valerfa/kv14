"use client";

import Image from "next/image";
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
            className="text-beige/90 text-[clamp(18px,2vw,72px)] uppercase font-normal tracking-[0.15em] mb-3 leading-none"
          >
            ФОТОСТУДИЯ В ЦЕНТРЕ ВЛАДИМИРА
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-beige text-[clamp(24px,6vw,120px)] uppercase font-normal tracking-wide leading-none"
          >
            КВАРТИРА 14
          </motion.h1>
        </div>
      </div>

    </section>
  );
}
