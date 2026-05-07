import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex-1 overflow-hidden min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/image14.webp')",
          filter: "grayscale(100%)",
        }}
      />
      <div className="absolute inset-0 bg-black/40" />

      <section className="relative z-10 min-h-screen flex items-center justify-center py-8 md:py-12">
        <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12 2xl:max-w-[1600px] 2xl:mx-auto w-full">
          <div className="flex flex-col items-center justify-center text-center gap-4">
            <h1 className="title-section text-beige">404</h1>
            <p className="text-body text-beige/90">Страница не найдена</p>
            <p className="text-subtitle text-beige/80">
              Возможно, ссылка устарела или была введена неверно
            </p>
            <Link
              href="/"
              className="mt-4 inline-flex items-center justify-center border border-beige px-8 py-3 text-subtitle text-beige transition-colors hover:bg-beige hover:text-black"
            >
              Вернуться на главную
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
