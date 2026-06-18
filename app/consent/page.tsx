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
        <article className="py-12 md:py-20 px-4 md:px-0">
          <div className="mx-auto w-full max-w-[800px]">
            <FadeIn>
              <div className="pt-20">
              <Link
                href="/"
                className="inline-flex cursor-pointer items-center gap-2 text-sm text-primary-light hover:text-primary transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                На главную
              </Link>

              <h1 className="title-section text-left mb-8">
                Согласие на обработку персональных данных
              </h1>

              <div className="max-w-none text-left">
                <p className="text-body mb-6">
                  Я, оставляя данные на сайте, действуя свободно, своей волей и в своем интересе, даю согласие Лютиковой Анне Николаевне, являющейся Индивидуальным предпринимателем (далее — Оператор), на обработку моих персональных данных на следующих условиях:
                </p>

                <h2 className="font-[var(--font-unbounded)] text-xl font-medium mt-10 mb-4">
                  1. Состав персональных данных
                </h2>
                <p className="text-body mb-6">
                  Я даю согласие на обработку следующих персональных данных:
                  <br />— фамилия, имя, отчество
                  <br />— номер телефона
                  <br />— дата и время бронирования
                  <br />— иные данные, предоставленные мной при заполнении форм или бронировании
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
                  Я даю согласие на совершение следующих действий с моими персональными данными:
                  <br />— сбор
                  <br />— запись
                  <br />— систематизация
                  <br />— хранение
                  <br />— уточнение (обновление, изменение)
                  <br />— использование
                  <br />— передача
                  <br />— удаление
                </p>

                <h2 className="font-[var(--font-unbounded)] text-xl font-medium mt-10 mb-4">
                  4. Передача персональных данных третьим лицам
                </h2>
                <p className="text-body mb-6">
                  Я даю согласие на передачу моих персональных данных третьим лицам в целях оказания услуг, включая:
                  <br />— сервис онлайн-бронирования, предоставляемый ООО «Квик Букинг Платформ»
                  <br />— платежные сервисы, включая ООО НКО «ЮМани»
                  <br />
                  <br />
                  Передача осуществляется в объеме, необходимом для выполнения указанных целей.
                </p>

                <h2 className="font-[var(--font-unbounded)] text-xl font-medium mt-10 mb-4">
                  5. Обработка с использованием интернет-сервисов
                </h2>
                <p className="text-body mb-6">
                  Я уведомлен(а), что при использовании сторонних сервисов обработка персональных данных может осуществляться с использованием серверов, расположенных за пределами Российской Федерации.
                </p>

                <h2 className="font-[var(--font-unbounded)] text-xl font-medium mt-10 mb-4">
                  6. Срок действия согласия
                </h2>
                <p className="text-body mb-6">
                  Согласие действует с момента его предоставления и до достижения целей обработки либо до его отзыва.
                </p>

                <h2 className="font-[var(--font-unbounded)] text-xl font-medium mt-10 mb-4">
                  7. Отзыв согласия
                </h2>
                <p className="text-body mb-6">
                  Я уведомлен(а), что могу отозвать согласие путем направления обращения на email Оператора: anna.marinina00@mail.ru
                </p>

                <h2 className="font-[var(--font-unbounded)] text-xl font-medium mt-10 mb-4">
                  8. Подтверждение согласия
                </h2>
                <p className="text-body mb-6">
                  Я подтверждаю, что:
                  <br />— ознакомлен(а) с{" "}
                  <Link href="/privacy" className="underline underline-offset-4 decoration-1 decoration-primary/60 hover:decoration-primary transition-all">
                    Политикой обработки персональных данных
                  </Link>
                  <br />— согласен(на) с условиями обработки
                  <br />— предоставляю достоверные данные
                </p>
              </div>
              </div>
            </FadeIn>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
