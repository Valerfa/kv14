"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MenuOverlay } from "@/components/shared/MenuOverlay";

const navLinks = [
  { label: "Главная", href: "/" },
  { label: "Правила", href: "/#rules" },
  { label: "Как нас найти", href: "/location" },
];

export function Header() {
  const [activeOverlay, setActiveOverlay] = useState<"menu" | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const isOverlayOpen = activeOverlay !== null;

  useEffect(() => {
    document.body.style.overflow = isOverlayOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOverlayOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const close = () => setActiveOverlay(null);
  const headerTextClass = isOverlayOpen
    ? "text-beige"
    : isScrolled
      ? "text-primary"
      : "text-beige";

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full">
        <div className="px-2 pt-2">
          <div
            className={`flex items-center px-4 py-2 transition-all duration-300 ${
              isOverlayOpen
                ? "bg-transparent"
                : isScrolled
                  ? "bg-beige shadow-md"
                  : "bg-transparent"
            }`}
          >
            <Link
              href="/"
              className={`relative block shrink-0 transition-colors duration-300 ${headerTextClass}`}
              onClick={close}
              aria-label="Квартира 14"
            >
            <svg
              width="81"
              height="68"
              viewBox="0 0 81 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-auto md:h-8"
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

            <div className="ml-auto flex items-center gap-4">
              <Link
                href="/booking"
                onClick={close}
                className={`text-sm font-medium underline underline-offset-4 hover:opacity-75 uppercase transition-colors duration-300 ${headerTextClass}`}
              >
                Забронировать
              </Link>
              <button
                type="button"
                onClick={() =>
                  setActiveOverlay(activeOverlay === "menu" ? null : "menu")
                }
                className={`flex items-center justify-center full p-2 transition-colors duration-300 hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${headerTextClass}`}
                aria-expanded={isOverlayOpen}
                aria-controls="mobile-nav-sheet"
                aria-label={isOverlayOpen ? "Закрыть меню" : "Открыть меню"}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isOverlayOpen ? (
                    <motion.span
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="inline-flex"
                    >
                      <X className="size-6 md:size-7" strokeWidth={1.5} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="inline-flex"
                    >
                      <Menu className="size-6 md:size-7" strokeWidth={1.5} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </header>

      <MenuOverlay
        isOpen={activeOverlay === "menu"}
        onClose={close}
        links={navLinks}
      />
    </>
  );
}
