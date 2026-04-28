import Link from "next/link";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/shared/FadeIn";

export default function NotFound() {
  return (
    <>
      <main className="flex-1">
        <section className="min-h-[60vh] flex items-center justify-center py-20">
          <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12 2xl:max-w-[1600px] 2xl:mx-auto text-center">
            <FadeIn>
              <span className="font-[var(--font-unbounded)] text-8xl md:text-9xl font-medium text-muted block mb-6">
                404
              </span>
              <h1 className="font-[var(--font-unbounded)] text-2xl md:text-3xl font-medium tracking-tight mb-4">
                Страница не найдена
              </h1>
              <p className="text-muted-foreground max-w-md mx-auto mb-8">
                Кажется, страница, которую вы ищете, не существует или была перемещена.
              </p>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-4 text-body font-medium bg-primary text-primary-foreground full hover:bg-primary/90 transition-colors"
              >
                Вернуться на главную
              </Link>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
