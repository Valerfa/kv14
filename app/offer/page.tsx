import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/shared/FadeIn";

export const metadata: Metadata = {
  title: "Публичная оферта — Квартира 14",
  description: "Условия договора публичной оферты фотостудии Квартира 14",
};

export default function OfferPage() {
  return (
    <>
      <main className="flex-1">
        <section className="py-12 md:py-20 px-4 md:px-0">
          <div className="max-w-[1200px] mx-auto w-full">
            <FadeIn>
              <div className="pt-20">
              <Link
                href="/"
                className="inline-block mb-6 text-sm cursor-pointer hover:opacity-70 transition-opacity"
              >
                ← На главную
              </Link>

              <h1 className="title-section mb-8 text-left md:text-center">
                Договор публичной оферты
              </h1>

              <div className="text-body space-y-4 text-left">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  на оказание услуг по предоставлению фотостудии
                </p>

                <h2 className="font-[var(--font-unbounded)] text-xl font-medium mt-10 mb-4">
                  1. Общие положения
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  1.1. Настоящий документ является публичной офертой Индивидуального предпринимателя Лютиковой Анны Николаевны, далее — «Исполнитель», и содержит все существенные условия договора возмездного оказания услуг по аренде фотостудии (в соответствии со статьей 435 и частью 2 статьи 437 Гражданского кодекса РФ).
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  1.2. Оферта представляет собой официальное предложение Исполнителя по оказанию платных услуг по аренде фотостудии посредством предоставления помещения для проведения фото- и видеосъемок (далее — Студия) юридическим и/или физическим лицам (далее — Заказчик).
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  1.3. Лицо, осуществившее акцепт настоящей оферты, становится Заказчиком и принимает на себя все права и обязанности по настоящему договору.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  1.4. Акцептом оферты является оплата услуг. С момента поступления денежных средств договор считается заключенным.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  1.5. Заказчик подтверждает, что ознакомился с условиями договора, характеристиками Студии и правилами ее использования.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  1.6. Услуги оказываются по месту нахождения Студии. Заказчик самостоятельно обеспечивает возможность прибыть в согласованное время.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  1.7. Заказчик гарантирует достоверность предоставленных данных и свою дееспособность.
                </p>

                <h2 className="font-[var(--font-unbounded)] text-xl font-medium mt-10 mb-4">
                  2. Предмет договора
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  2.1. Исполнитель предоставляет Заказчику во временное пользование Студию и оборудование, а Заказчик обязуется оплатить Услуги.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  2.2. Студия предоставляется на выбранную дату и время.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  2.3. Помещение передается в состоянии, пригодном для съемки.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  2.4. Оборудование передается в исправном состоянии.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  2.5. Актуальная информация об услугах размещается на сайте https://kv-14.ru
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  2.6. Услуги оказываются по адресу: г. Владимир, ул. Ильича 4, помещение №14.
                </p>

                <h2 className="font-[var(--font-unbounded)] text-xl font-medium mt-10 mb-4">
                  3. Порядок заключения договора
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  3.1. Заказчик выбирает дату и время и производит бронирование.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  3.2. Оплата должна быть произведена в течение 1 часа, иначе бронь аннулируется.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  3.3. Заказчик предоставляет необходимые данные для бронирования.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  3.4. Оплата означает согласие с условиями оферты.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  3.5. Связь возможна по телефону или email Исполнителя.
                </p>

                <h2 className="font-[var(--font-unbounded)] text-xl font-medium mt-10 mb-4">
                  4. Сроки оказания услуг
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  4.1. Услуга оказывается в выбранный период времени.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  4.2. Время аренды включает подготовку и съемку.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  4.3. Заказчик обязан освободить Студию вовремя.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  4.4. Продление возможно при наличии свободного времени.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  4.5. Перенос возможен не позднее чем за 3 дня.
                </p>

                <h2 className="font-[var(--font-unbounded)] text-xl font-medium mt-10 mb-4">
                  5. Порядок оказания услуг
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  5.1. Доступ предоставляется после бронирования.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  5.2. Услуга предоставляется при 50% предоплате.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  5.3. Минимальное время аренды — 1 час.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  5.4. При опоздании более 30 минут бронь аннулируется.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  5.5. Заказчик несет ответственность за имущество.
                </p>

                <h2 className="font-[var(--font-unbounded)] text-xl font-medium mt-10 mb-4">
                  6. Права и обязанности сторон
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  6.1. Исполнитель обязуется оказать услуги надлежащим образом.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  6.2. Исполнитель вправе отказать в оказании услуг при нарушении правил.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  6.3. Заказчик обязуется соблюдать правила студии и бережно относиться к имуществу.
                </p>

                <h2 className="font-[var(--font-unbounded)] text-xl font-medium mt-10 mb-4">
                  7. Стоимость и оплата
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  7.1. Стоимость услуг указана на сайте.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  7.2. Предоплата составляет 50%.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  7.3. Оплата считается произведенной при поступлении средств.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  7.4. Возврат осуществляется в соответствии с условиями отмены.
                </p>

                <h2 className="font-[var(--font-unbounded)] text-xl font-medium mt-10 mb-4">
                  8. Ответственность сторон
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  8.1. Исполнитель не несет ответственности за неявку Заказчика.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  8.2. Заказчик несет ответственность за ущерб.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  8.3. Стороны освобождаются от ответственности при форс-мажоре.
                </p>

                <h2 className="font-[var(--font-unbounded)] text-xl font-medium mt-10 mb-4">
                  9. Разрешение споров
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  9.1. Споры решаются путем переговоров.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  9.2. При невозможности — в судебном порядке.
                </p>

                <h2 className="font-[var(--font-unbounded)] text-xl font-medium mt-10 mb-4">
                  10. Персональные данные
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  10.1. Обработка данных осуществляется в соответствии с законодательством РФ.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  10.2. Данные могут передаваться третьим лицам:
                  <br />— ООО «Квик Букинг Платформ»
                  <br />— ООО НКО «ЮМани»
                </p>

                <h2 className="font-[var(--font-unbounded)] text-xl font-medium mt-10 mb-4">
                  11. Заключительные положения
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  11.1. Договор действует до полного исполнения обязательств.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  11.2. Все изменения оформляются в письменной форме.
                </p>

                <h2 className="font-[var(--font-unbounded)] text-xl font-medium mt-10 mb-4">
                  12. Реквизиты Исполнителя
                </h2>
                <p className="text-sm text-muted-foreground mt-12 pt-8 border-t">
                  Исполнитель: Лютикова Анна Николаевна
                  <br />
                  Статус: Индивидуальный предприниматель
                  <br />
                  ИНН: 332712457398
                  <br />
                  ОГРНИП 326330000040200
                  <br />
                  Email: anna.marinina00@mail.ru
                  <br />
                  Телефон: +7 904 251-66-91
                </p>
              </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
