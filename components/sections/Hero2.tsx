"use client";

import Image from "next/image";

export function Hero2() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-beige text-black">
      <div className="relative w-full h-screen overflow-hidden md:hidden">
        <Image
          src="/images/image4.webp"
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
          src="/images/image4.webp"
          alt="Фотостудия Квартира 14"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <p className="text-[clamp(24px,2vw,200px)] text-beige uppercase mb-3">
              Фотостудия в центре Владимира
            </p>
            <h1 className="text-[clamp(24px,6vw,800px)] uppercase text-beige">
              КВАРТИРА 14
            </h1>
          </div>
        </div>
      </div>

    </section>
  );
}
