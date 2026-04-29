"use client";

export function Events() {
  return (
    <section className="bg-primary-light py-8 text-beige">
      <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12 2xl:max-w-[1600px] 2xl:mx-auto">
        <div className="grid grid-cols-4 lg:grid-cols-12">
          <p className="subtitle mb-2 col-span-4 text-left lg:col-start-4 lg:col-end-10 lg:text-center">
            / Аренда для мероприятий
          </p>
          <h2 className="title-section mb-4 col-span-4 text-left lg:col-start-4 lg:col-end-10 lg:text-center">
            ПРОСТРАНСТВО ПОДХОДИТ
            <br />НЕ ТОЛЬКО ДЛЯ СЪЁМОК
          </h2>

          <div className="col-start-2 col-span-3 space-y-6 text-left lg:col-start-4 lg:col-end-10 lg:text-center">
            <p className="text-body text-left lg:text-center">
              Здесь можно проводить камерные встречи: консультации, женские круги, небольшие девичники — в спокойной и бережной атмосфере.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
