import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/shared/FadeIn";

export const metadata: Metadata = {
  title: "Согласие на обработку персональных данных — Квартира 14",
  description: "Согласие на обработку персональных данных фотостудии Квартира 14",
};

export default function ConsentPage() {
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

              <h1 className="title-section text-left mb-8">
                Согласие на обработку персональных данных
              </h1>

              <div className="max-w-none text-left">
                <p className="text-body mb-6">
                  Я, оставляя данные на сайте, действуя свободно, своей волей и в своем интересе, даю согласие Лютиковой Анне Николаевне, являющейся плательщиком налога на профессиональный доход (самозанятой) (далее — Оператор), на обработку моих персональных данных на следующих условиях:
                </p>

                <h2 className="font-[var(--font-unbounded)] text-xl font-medium mt-10 mb-4">
                  1. Состав персональных данных
                </h2>
                <p className="text-body mb-6">
                  Я даю согласие на обработку следующих персональных данных:
                  <br />— фамилия, имя, отчество
                  <br />— номер телефона
                  <br />— дата и время бронирования
                  <br />— иные данные, предоставленные мной
                </p>

                <h2 className="font-[var(--font-unbounded)] text-xl font-medium mt-10 mb-4">
                  2. Цели обработки персональных данных
                </h2>
                <p className="text-body mb-6">
                  Персональные данные обрабатываются в целях:
                  <br />— оформления и управления бронированием
                  <br />— связи со мной
                  <br />— исполнения договорных обязательств
                  <br />— обработки платежей
                  <br />— оказания услуг
                </p>

                <h2 className="font-[var(--font-unbounded)] text-xl font-medium mt-10 mb-4">
                  3. Действия с персональными данными
                </h2>
                <p className="text-body mb-6">
                  Я даю согласие на:
                  <br />— сбор
                  <br />— запись
                  <br />— систематизацию
                  <br />— хранение
                  <br />— уточнение
                  <br />— использование
                  <br />— передачу
                  <br />— удаление
                </p>

                <h2 className="font-[var(--font-unbounded)] text-xl font-medium mt-10 mb-4">
                  4. Передача третьим лицам
                </h2>
                <p className="text-body mb-6">
                  Данные могут передаваться:
                  <br />— сервису EasyWeek
                  <br />— платежным системам
                </p>

                <h2 className="font-[var(--font-unbounded)] text-xl font-medium mt-10 mb-4">
                  5. Трансграничная передача
                </h2>
                <p className="text-body mb-6">
                  Возможна при использовании сторонних сервисов
                </p>

                <h2 className="font-[var(--font-unbounded)] text-xl font-medium mt-10 mb-4">
                  6. Срок действия
                </h2>
                <p className="text-body mb-6">
                  Согласие действует до достижения целей или отзыва
                </p>

                <h2 className="font-[var(--font-unbounded)] text-xl font-medium mt-10 mb-4">
                  7. Отзыв согласия
                </h2>
                <p className="text-body mb-6">
                  Отзыв возможен через email Оператора
                </p>

                <h2 className="font-[var(--font-unbounded)] text-xl font-medium mt-10 mb-4">
                  8. Подтверждение
                </h2>
                <p className="text-body mb-6">
                  Я подтверждаю, что:
                  <br />— ознакомлен(а) с{" "}
                  <Link href="/privacy" className="underline underline-offset-4 decoration-1 decoration-primary/60 hover:decoration-primary transition-all">
                    Политикой обработки персональных данных
                  </Link>
                  <br />— согласен(на) с условиями
                  <br />— предоставляю достоверные данные
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
