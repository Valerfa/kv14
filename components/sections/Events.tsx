"use client";

export function Events() {
  return (
    <section className="bg-primary-light py-8 text-beige">
      <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12 2xl:max-w-[1600px] 2xl:mx-auto">
        <p className="subtitle mb-2 md:text-center">/ Аренда для мероприятий</p>
        <h2 className="title-section mb-4 md:text-center">
          ПРОСТРАНСТВО ПОДХОДИТ
          <br/>НЕ ТОЛЬКО ДЛЯ СЪЁМОК
        </h2>

        <div className="grid grid-cols-4">
          <div className="col-start-2 col-span-3 space-y-6 md:text-center">
            <p className="text-body md:text-center">
              Здесь можно проводить камерные встречи: консультации, женские круги, небольшие девичники — в спокойной и бережной атмосфере.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
