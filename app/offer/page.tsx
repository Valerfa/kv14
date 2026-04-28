import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
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
        <article className="py-12 md:py-20">
          <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12 2xl:max-w-[800px] 2xl:mx-auto">
            <FadeIn>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-primary-light hover:text-primary transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                На главную
              </Link>

              <h1 className="title-section text-left md:text-center mb-8">
                Договор публичной оферты
              </h1>

              <div className="prose prose-slate max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  на оказание услуг по предоставлению фотостудии
                </p>

                <h2 className="font-[var(--font-unbounded)] text-xl font-medium mt-10 mb-4">
                  1. Общие положения
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  1.1. Настоящий документ является публичной офертой Лютиковой Анны Николаевны, плательщика налога на профессиональный доход (самозанятой), далее — «Исполнитель», и содержит все существенные условия договора возмездного оказания услуг по аренде фотостудии (в соответствии со статьей 435 и частью 2 статьи 437 Гражданского кодекса РФ).
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  1.2. Оферта представляет собой официальное предложение Исполнителя по оказанию платных услуг по аренде фотостудии посредством предоставления помещения для проведения фото- и видеосъемок (далее – Студия) юридическим и/или физическим лицам (далее – Заказчик).
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  1.3. Лицо, осуществившее акцепт оферты, становится Заказчиком и принимает все условия настоящего договора (в соответствии со статьей 438 ГК РФ).
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  1.4. Акцептом оферты является внесение оплаты. С момента поступления денежных средств договор считается заключенным.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  1.5. Заказчик подтверждает, что ознакомлен с условиями договора, характеристиками Студии и правилами ее использования.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  1.6. Заказчик обязуется самостоятельно обеспечить возможность прибытия в Студию в согласованное время.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  1.7. Заказчик гарантирует достоверность предоставленных данных и свою дееспособность.
                </p>

                <h2 className="font-[var(--font-unbounded)] text-xl font-medium mt-10 mb-4">
                  2. Предмет договора
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  2.1. Исполнитель предоставляет Студию и оборудование во временное пользование, Заказчик обязуется оплатить услуги.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  2.2. Услуги оказываются по адресу: г. Владимир, ул. Ильича, д. 4.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  2.3. Студия передается в состоянии, пригодном для использования.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  2.4. Перечень оборудования фиксируется в акте приема-передачи.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  2.5. Актуальная информация размещена на сайте https://kv-14.ru
                </p>

                <h2 className="font-[var(--font-unbounded)] text-xl font-medium mt-10 mb-4">
                  3. Порядок заключения договора
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  3.1. Бронирование осуществляется через сервис EasyWeek.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  3.2. Оплата должна быть произведена в течение 1 часа.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  3.3. Предоставляются данные: ФИО, телефон, email.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  3.4. Оплата подтверждает согласие с договором.
                </p>

                <h2 className="font-[var(--font-unbounded)] text-xl font-medium mt-10 mb-4">
                  4. Сроки оказания услуг
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  4.1. Начало — время бронирования.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  4.2. Окончание — время окончания бронирования.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  4.3. За 5 минут до окончания Студия должна быть освобождена.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  4.4. Продление возможно при наличии свободного времени.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  4.5. Перенос возможен за 3 дня.
                </p>

                <h2 className="font-[var(--font-unbounded)] text-xl font-medium mt-10 mb-4">
                  5. Порядок оказания услуг
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  5.1. Доступ предоставляется после предоплаты 50%.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  5.2. Минимальный срок аренды — 1 час.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  5.3. При опоздании время не продлевается.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  5.4. При опоздании более 30 минут бронь аннулируется.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  5.5. Услуга считается оказанной с момента доступа.
                </p>

                <h2 className="font-[var(--font-unbounded)] text-xl font-medium mt-10 mb-4">
                  6. Права и обязанности сторон
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  6.1. Исполнитель обязуется оказать услуги надлежащим образом.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  6.2. Исполнитель вправе прекратить оказание услуг при нарушении правил.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  6.3. Заказчик обязан соблюдать правила студии и бережно относиться к имуществу.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  6.4. Заказчик несет ответственность за действия третьих лиц.
                </p>

                <h2 className="font-[var(--font-unbounded)] text-xl font-medium mt-10 mb-4">
                  7. Стоимость и оплата
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  7.1. Стоимость указана на сайте.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  7.2. Предоплата — 50%.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  7.3. Оплата считается совершенной при поступлении средств.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  7.4. Возврат:
                  <br />— более 3 дней — возможен
                  <br />— менее 3 дней — 50%
                  <br />— менее суток — не возвращается
                </p>

                <h2 className="font-[var(--font-unbounded)] text-xl font-medium mt-10 mb-4">
                  8. Ответственность
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  8.1. Исполнитель не несет ответственности за неявку Заказчика.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  8.2. Услуга считается оказанной, если Заказчик не воспользовался ей.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  8.3. Заказчик несет ответственность за имущество.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  8.4. При повреждении имущества — компенсация.
                </p>

                <h2 className="font-[var(--font-unbounded)] text-xl font-medium mt-10 mb-4">
                  9. Споры
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  9.1. Решаются путем переговоров.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  9.2. При невозможности — в суде РФ.
                </p>

                <h2 className="font-[var(--font-unbounded)] text-xl font-medium mt-10 mb-4">
                  10. Персональные данные
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  10.1. Обработка данных осуществляется в соответствии с 152-ФЗ.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  10.2. Данные могут передаваться EasyWeek и платежным системам.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  10.3. Заказчик дает согласие на обработку данных.
                </p>

                <h2 className="font-[var(--font-unbounded)] text-xl font-medium mt-10 mb-4">
                  11. Заключительные положения
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  11.1. Договор регулируется законодательством РФ.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  11.2. Действует с момента акцепта.
                </p>

                <h2 className="font-[var(--font-unbounded)] text-xl font-medium mt-10 mb-4">
                  12. Реквизиты
                </h2>
                <p className="text-sm text-muted-foreground mt-12 pt-8 border-t">
                  Исполнитель: Лютикова Анна Николаевна
                  <br />
                  Статус: самозанятая
                  <br />
                  ИНН: 332712457398
                  <br />
                  Email: anna.marinina00@mail.ru
                  <br />
                  Телефон: +79042516691
                </p>
              </div>
            </FadeIn>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
