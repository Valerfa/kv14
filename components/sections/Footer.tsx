"use client";

import Link from "next/link";
import { FadeIn } from "@/components/shared/FadeIn";

const footerLinks = [
  { href: "/privacy", label: "Политика конфиденциальности" },
  { href: "/offer", label: "Договор публичной оферты" },
  { href: "/rules", label: "Правила студии" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-primary text-beige">
      <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12 2xl:mx-24 my-6 md:my-8 lg:my-10 xl:my-12 2xl:my-16">
        <FadeIn>
          {/* Desktop layout */}
          <div className="hidden md:grid md:grid-cols-3 md:gap-8 md:items-start mb-10">
            {/* 1. Логотип */}
            <div>
              <Link href="/" className="mb-8 inline-flex items-center text-beige">
                <svg
                  width="81"
                  height="68"
                  viewBox="0 0 81 68"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 lg:h-32 w-auto"
                  aria-hidden="true"
                >
                  <path
                    d="M22.5911 51.3951L2.7002 23.8139L21.9344 2.7H28.8774L9.45561 24.0992L29.5342 51.3951H22.5911Z"
                    fill="currentColor"
                  />
                  <path
                    d="M39.3721 15.7192V40.0667V64.4143H33.5549V21.9012H33.2735L21.5453 29.7951V23.8033L33.5549 15.7192H39.3721Z"
                    fill="currentColor"
                  />
                  <path
                    d="M43.842 54.428V49.5775L64.9527 15.7192H68.4242V23.2327H66.0786L50.1283 48.8166V49.1971H78.5573V54.428H43.842ZM66.4539 64.4143V15.7192H71.9896V64.4143H66.4539Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>

            </div>

            {/* 2. Контакты */}
            <div className="flex flex-col gap-2">
              <div className="text-footer uppercase mb-2 text-beige">Контакты</div>
              <div>
                <p className="text-footer uppercase tracking-widest mb-1 text-beige/60">Телефон</p>
                <p className="text-footer">+7 (904) 251-66-91</p>
              </div>
              <div>
                <p className="text-footer uppercase tracking-widest mb-1 text-beige/60">VK</p>
                <a
                  href="https://vk.com/kv014"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-footer hover:text-beige/80 transition-colors"
                >
                  https://vk.com/kv014
                </a>
              </div>
              <div>
                <p className="text-footer uppercase tracking-widest mb-1 text-beige/60">Instagram</p>
                <a
                  href="https://www.instagram.com/kvartira.014"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-footer hover:text-beige/80 transition-colors"
                >
                  @kvartira.014
                </a>
                <p className="w-1/2 text-[clamp(9px,0.9vw,24px)] text-primary-light mt-4">
                *Социальная сеть Instagram принадлежит Meta Platforms Inc., деятельность которой признана экстремистской и запрещена на территории РФ.
                </p>
              </div>
            </div>

            {/* 3. Адрес */}
            <div>
              <div className="text-footer uppercase mb-4 text-beige">Адрес</div>
              <p className="text-footer">г. Владимир, ул. Ильича, д. 4</p>
              <p className="text-footer text-beige/60">(за Торговыми рядами)</p>
            

<div className="bg-beige/5 p-2 md:p-4 mt-8 rounded-lg">
            <div className="text-footer uppercase mb-4 text-beige">Юридическая информация</div>
              <div className="flex flex-col items-start gap-3">
                {footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-footer text-beige/60 hover:text-beige transition-colors text-left underline underline-offset-1 hover:opacity-80"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="text-footer text-beige/80 mt-4 space-y-2">
                <p>Индивидуальный предприниматель: </p>
                <p>Лютикова Анна Николаевна</p>
                <p>ИНН: 332712457398</p>
                <p>ОГРНИП 326330000040200</p>
              </div>
              </div>
              </div>
          </div>

          {/* Mobile layout */}
          <div className="md:hidden flex flex-col space-y-8 mb-8">
            <Link href="/" className="inline-flex items-center text-beige">
              <svg
                width="81"
                height="68"
                viewBox="0 0 81 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-auto"
                aria-hidden="true"
              >
                <path
                  d="M22.5911 51.3951L2.7002 23.8139L21.9344 2.7H28.8774L9.45561 24.0992L29.5342 51.3951H22.5911Z"
                  fill="currentColor"
                />
                <path
                  d="M39.3721 15.7192V40.0667V64.4143H33.5549V21.9012H33.2735L21.5453 29.7951V23.8033L33.5549 15.7192H39.3721Z"
                  fill="currentColor"
                />
                <path
                  d="M43.842 54.428V49.5775L64.9527 15.7192H68.4242V23.2327H66.0786L50.1283 48.8166V49.1971H78.5573V54.428H43.842ZM66.4539 64.4143V15.7192H71.9896V64.4143H66.4539Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
            
            <div>
              <p className="text-footer">г. Владимир, ул. Ильича, д. 4</p>
              <p className="text-footer text-beige/60">(за Торговыми рядами)</p>
            </div>
            
            <div className="space-y-3">
              <div>
                <p className="text-footer uppercase mb-1 text-beige/60">Телефон</p>
                <p className="text-footer">+7 (904) 251-66-91</p>
              </div>
              <div>
                <p className="text-footer uppercase mb-1 text-beige/60">VK</p>
                <a
                  href="https://vk.com/kv014"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-footer hover:text-beige/80 transition-colors"
                >
                  https://vk.com/kv014
                </a>
              </div>
              <div>
                <p className="text-footer uppercase mb-1 text-beige/60">Instagram</p>
                <a
                  href="https://instagram.com/kvartira.014"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-footer hover:text-beige/80 transition-colors"
                >
                  @kvartira.014
                </a>
              </div>
            </div>
            
            <p className="text-[clamp(9px,0.9vw,24px)] text-beige/60 leading-relaxed w-1/2">
              *Социальная сеть Instagram принадлежит Meta Platforms Inc., деятельность которой признана экстремистской и запрещена на территории РФ.
            </p>
            <div className="bg-beige/5 p-4 mt-4 rounded-lg flex flex-col items-start gap-4 text-left md:items-start">
              <div className="text-footer uppercase text-beige">
                Юридическая информация
              </div>
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-footer text-beige/60 hover:text-beige transition-colors text-left underline underline-offset-1 hover:opacity-80"
                >
                  {link.label}
                </Link>
              ))}
              <div className="text-footer text-beige/80 mt-4 space-y-2">
              <p>Индивидуальный предприниматель: </p>
                <p>Лютикова Анна Николаевна</p>
                <p>ИНН: 332712457398</p>
                <p>ОГРНИП 326330000040200</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t 2xl:border-t-2 border-beige/20 mb-4" />

          {/* Bottom row */}
          <div className="text-left">
            <p className="text-footer text-beige/80 text-left">
              © Квартира 14, {currentYear}. Все права защищены
            </p>
            
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
