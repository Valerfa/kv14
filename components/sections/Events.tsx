"use client";

export function Events() {
  return (
    <section className="py-10 md:py-16 md:py-20 xl:py-28 2xl:py-32 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-24 bg-primary-light text-beige">
      <div className="">
        <div className="grid grid-cols-4 lg:grid-cols-12">
          <div className="col-span-4 lg:col-span-6 lg:col-start-4 text-left lg:text-center mb-4 md:mb-6 lg:mb-8">
            <p className="subtitle mb-2">
              / Аренда для мероприятий
            </p>
            <h2 className="title-section">
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
