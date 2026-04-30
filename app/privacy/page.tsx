import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/shared/FadeIn";

export const metadata: Metadata = {
  title: "Политика конфиденциальности — Квартира 14",
  description: "Политика обработки персональных данных фотостудии Квартира 14",
};

export default function PrivacyPage() {
  return (
    <>
      <main className="flex-1">
        <section className="py-12 md:py-20 px-4 md:px-0">
          <div className="max-w-[1200px] mx-auto w-full">
            <FadeIn>
              <div className="pt-20">
              <Link
                href="/"
                className="inline-block mb-6 text-body cursor-pointer hover:opacity-70 transition-opacity"
              >
                ← На главную
              </Link>
              <h1 className="title-section mb-8 text-left md:text-center">
                Политика обработки персональных данных
              </h1>

              <div className="text-body space-y-4 text-left">
                <h2 className="font-[var(--font-unbounded)] text-xl font-medium mt-10 mb-4">
                  1. Общие положения
                </h2>
                <p className="text-body mb-6">
                  1.1. Настоящая Политика обработки персональных данных (далее — Политика) определяет порядок обработки и меры по обеспечению безопасности персональных данных, предпринимаемые Лютиковой Анной Николаевной, плательщиком налога на профессиональный доход (самозанятой) (далее — Оператор).
                </p>
                <p className="text-body mb-6">
                  1.2. Политика разработана в соответствии с законодательством Российской Федерации, включая Федеральный закон № 152-ФЗ «О персональных данных».
                </p>
                <p className="text-body mb-6">
                  1.3. Оператор обеспечивает соблюдение прав и свобод субъектов персональных данных.
                </p>

                <h2 className="font-[var(--font-unbounded)] text-xl font-medium mt-10 mb-4">
                  2. Оператор персональных данных
                </h2>
                <p className="text-body mb-6">
                  Оператор: Лютикова Анна Николаевна
                  <br />
                  Статус: самозанятая (НПД)
                  <br />
                  Email: anna.marinina00@mail.ru
                  <br />
                  Телефон: +79042516691
                </p>

                <h2 className="font-[var(--font-unbounded)] text-xl font-medium mt-10 mb-4">
                  3. Персональные данные, обрабатываемые Оператором
                </h2>
                <p className="text-body mb-6">
                  Оператор обрабатывает следующие персональные данные:
                  <br />— фамилия, имя, отчество
                  <br />— номер телефона
                  <br />— дата и время бронирования
                  <br />— информация о заказе (бронировании)
                  <br />— иные данные, добровольно предоставленные пользователем
                </p>

                <h2 className="font-[var(--font-unbounded)] text-xl font-medium mt-10 mb-4">
                  4. Цели обработки персональных данных
                </h2>
                <p className="text-body mb-6">
                  Персональные данные обрабатываются в целях:
                  <br />— оформления и управления бронированием фотостудии
                  <br />— связи с пользователем
                  <br />— исполнения договорных обязательств
                  <br />— приема и обработки платежей
                  <br />— ведения учета оказанных услуг
                </p>

                <h2 className="font-[var(--font-unbounded)] text-xl font-medium mt-10 mb-4">
                  5. Правовые основания обработки
                </h2>
                <p className="text-body mb-6">
                  Обработка осуществляется на основании:
                  <br />— согласия субъекта персональных данных
                  <br />— необходимости исполнения договора
                </p>

                <h2 className="font-[var(--font-unbounded)] text-xl font-medium mt-10 mb-4">
                  6. Порядок обработки и хранения персональных данных
                </h2>
                <p className="text-body mb-6">
                  6.1. Обработка осуществляется с использованием автоматизированных средств.
                </p>
                <p className="text-body mb-6">
                  6.2. Оператор принимает необходимые правовые, организационные и технические меры для защиты персональных данных.
                </p>
                <p className="text-body mb-6">
                  6.3. Персональные данные хранятся не дольше, чем этого требуют цели обработки или законодательство РФ.
                </p>

                <h2 className="font-[var(--font-unbounded)] text-xl font-medium mt-10 mb-4">
                  7. Передача персональных данных третьим лицам
                </h2>
                <p className="text-body mb-6">
                  7.1. Оператор вправе передавать персональные данные третьим лицам исключительно в целях оказания услуг.
                </p>
                <p className="text-body mb-6">
                  7.2. Для организации онлайн-бронирования используется сервис EasyWeek.
                  <br />
                  Персональные данные могут передаваться данному сервису в объеме, необходимом для:
                  <br />— оформления бронирования
                  <br />— управления записями
                  <br />— взаимодействия с пользователем
                </p>
                <p className="text-body mb-6">
                  7.3. При оплате услуг персональные данные могут передаваться платежным сервисам (платежным операторам).
                </p>
                <p className="text-body mb-6">
                  7.4. Передача осуществляется только в необходимом объеме и на основании договоров.
                </p>
                <p className="text-body mb-6">
                  7.5. Третьи лица обязуются обеспечивать конфиденциальность данных.
                </p>

                <h2 className="font-[var(--font-unbounded)] text-xl font-medium mt-10 mb-4">
                  8. Трансграничная передача персональных данных
                </h2>
                <p className="text-body mb-6">
                  8.1. При использовании сторонних сервисов допускается трансграничная передача персональных данных.
                </p>
                <p className="text-body mb-6">
                  8.2. Такая передача осуществляется в соответствии с законодательством РФ.
                </p>

                <h2 className="font-[var(--font-unbounded)] text-xl font-medium mt-10 mb-4">
                  9. Права субъекта персональных данных
                </h2>
                <p className="text-body mb-6">
                  Пользователь имеет право:
                  <br />— получать информацию об обработке своих персональных данных
                  <br />— требовать уточнения, блокирования или удаления данных
                  <br />— отозвать согласие на обработку персональных данных
                </p>

                <h2 className="font-[var(--font-unbounded)] text-xl font-medium mt-10 mb-4">
                  10. Обработка с использованием интернет-сервисов
                </h2>
                <p className="text-body mb-6">
                  10.1. На сайте используется сервис EasyWeek.
                </p>
                <p className="text-body mb-6">
                  10.2. Пользователь, предоставляя данные через формы сайта, соглашается с настоящей Политикой.
                </p>
                <p className="text-body mb-6">
                  10.3. Обработка сторонними сервисами осуществляется по их правилам.
                </p>

                <h2 className="font-[var(--font-unbounded)] text-xl font-medium mt-10 mb-4">
                  11. Заключительные положения
                </h2>
                <p className="text-body mb-6">
                  11.1. Пользователь может направить запрос по email Оператора.
                </p>
                <p className="text-body mt-12 pt-8 border-t">
                  11.2. Актуальная версия Политики размещается на сайте.
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
