"use client";

export function Events() {
  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-24 xl:py-32 2xl:py-64 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-24 bg-primary-light text-beige">
      <div className="">
        <div className="grid grid-cols-4 lg:grid-cols-12">
          <div className="col-span-4 lg:col-span-6 lg:col-start-4 text-left lg:text-center mb-4 md:mb-6 lg:mb-8 xl:mb-12 2xl:mb-16">
            <p className="subtitle mb-2">
              / Аренда для мероприятий
            </p>
            <h2 className="title-section mb-4">
              ПРОСТРАНСТВО ПОДХОДИТ
              <br />НЕ ТОЛЬКО ДЛЯ СЪЁМОК
            </h2>
          </div>

          <div className="col-start-2 col-span-3 space-y-6 text-left lg:col-start-5 lg:col-span-4 lg:text-center">
            <p className="text-body text-left lg:text-center">
              Здесь можно проводить камерные встречи: консультации, женские круги, небольшие девичники — в спокойной и бережной атмосфере.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
