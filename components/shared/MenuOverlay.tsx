"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type MenuOverlayProps = {
  isOpen: boolean;
  onClose: () => void;
  links: Array<{ label: string; href: string }>;
};

export function MenuOverlay({ isOpen, onClose, links }: MenuOverlayProps) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          id="mobile-nav-sheet"
          role="dialog"
          aria-modal="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 bg-primary"
        >
          <div className="flex min-h-screen flex-col px-8 pb-10 pt-28">
            <div className="flex flex-1 flex-col items-center justify-center">
              <nav className="flex min-h-[60vh] flex-col items-center justify-center gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14 text-center">
                {links.map(({ label, href }) => (
                  <Link
                    key={href + label}
                    href={href}
                    onClick={onClose}
                    className="uppercase text-[clamp(28px,3vw,600px)] font-medium text-beige transition-opacity hover:opacity-75"
                  >
                    {label}
                  </Link>
                ))}
              </nav>

              <div className="mt-10 flex items-center justify-center gap-6 text-beige">
                <a
                  href="tel:+79042516691"
                  onClick={onClose}
                  className="inline-flex md:hidden transition-opacity duration-200 hover:opacity-70"
                  aria-label="Позвонить"
                >
                  <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M93.4061 92.29L85.1796 97.7203C79.8838 101.367 57.3161 105.467 26.6134 68.2726C-2.98543 32.4633 5.47822 12.6052 9.4484 8.0257L16.2799 0.925144C17.8905 -0.448428 20.3206 -0.286864 21.7052 1.37234L39.6719 22.6255L39.683 22.6365C40.9975 24.1937 40.9545 26.6177 39.2253 28.0779V28.0939L31.2629 33.8368C28.111 36.9617 30.8587 41.8803 34.0806 46.6318L49.4022 64.7226C56.5298 71.6026 60.4354 74.781 63.8459 72.5075L70.4673 65.1213C72.089 63.7582 74.5081 63.9253 75.8927 65.574L93.8704 86.8271V86.8382C95.1784 88.4003 95.1298 90.8194 93.4061 92.29Z" fill="currentColor" />
                  </svg>
                </a>
                <div className="hidden md:flex">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="tel:+79042516691"
                        onClick={onClose}
                        className="inline-flex transition-opacity duration-200 hover:opacity-70"
                        aria-label="Позвонить"
                      >
                        <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path d="M93.4061 92.29L85.1796 97.7203C79.8838 101.367 57.3161 105.467 26.6134 68.2726C-2.98543 32.4633 5.47822 12.6052 9.4484 8.0257L16.2799 0.925144C17.8905 -0.448428 20.3206 -0.286864 21.7052 1.37234L39.6719 22.6255L39.683 22.6365C40.9975 24.1937 40.9545 26.6177 39.2253 28.0779V28.0939L31.2629 33.8368C28.111 36.9617 30.8587 41.8803 34.0806 46.6318L49.4022 64.7226C56.5298 71.6026 60.4354 74.781 63.8459 72.5075L70.4673 65.1213C72.089 63.7582 74.5081 63.9253 75.8927 65.574L93.8704 86.8271V86.8382C95.1784 88.4003 95.1298 90.8194 93.4061 92.29Z" fill="currentColor" />
                        </svg>
                      </a>
                    </TooltipTrigger>
                    <TooltipContent className="z-[100] bg-beige text-black text-sm px-3 py-2 md shadow-none">
                      Телефон студии: +7 (904) 251-66-91
                    </TooltipContent>
                  </Tooltip>
                </div>
                <a
                  href="https://www.instagram.com/kvartira.014"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="inline-flex transition-opacity duration-200 hover:opacity-70"
                  aria-label="Instagram"
                >
                  <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M69.25 6H30.75C17 6 6 17 6 30.75V47.25V69.25C6 83 17 94 30.75 94H69.25C83 94 94 83 94 69.25V47.25V30.75C94 17 83 6 69.25 6ZM50 33.5C59.075 33.5 66.5 40.925 66.5 50C66.5 59.075 59.075 66.5 50 66.5C40.925 66.5 33.5 59.075 33.5 50C33.5 40.925 40.925 33.5 50 33.5ZM66.5 25.25C66.5 22.225 68.975 19.75 72 19.75C75.025 19.75 77.5 22.225 77.5 25.25C77.5 28.275 75.025 30.75 72 30.75C68.975 30.75 66.5 28.275 66.5 25.25Z" fill="currentColor" />
                  </svg>
                </a>
                <a
                  href="#"
                  onClick={onClose}
                  className="inline-flex transition-opacity duration-200 hover:opacity-70"
                  aria-label="VK"
                >
                  <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M89.01 61.49C89.01 61.49 97.095 69.475 99.095 73.17C99.1339 73.2233 99.1642 73.2824 99.185 73.345C100 74.71 100.2 75.78 99.8 76.57C99.125 77.875 96.84 78.53 96.065 78.585H81.775C80.78 78.585 78.71 78.325 76.19 76.585C74.265 75.24 72.35 73.025 70.495 70.86C67.725 67.645 65.33 64.855 62.905 64.855C62.5987 64.8544 62.2945 64.9051 62.005 65.005C60.17 65.585 57.84 68.2 57.84 75.165C57.84 77.345 56.12 78.585 54.915 78.585H48.37C46.14 78.585 34.53 77.805 24.235 66.95C11.62 53.66 0.289962 27 0.179962 26.765C-0.525038 25.04 0.954962 24.1 2.55496 24.1H16.985C18.92 24.1 19.55 25.27 19.99 26.32C20.5 27.525 22.39 32.345 25.49 37.76C30.51 46.57 33.595 50.155 36.06 50.155C36.5231 50.1564 36.9784 50.0357 37.38 49.805C40.6 48.035 40 36.535 39.85 34.165C39.85 33.705 39.845 29.03 38.195 26.77C37.015 25.15 35.005 24.52 33.79 24.29C34.115 23.82 34.805 23.1 35.69 22.675C37.895 21.575 41.88 21.415 45.835 21.415H48.03C52.32 21.475 53.43 21.75 54.99 22.145C58.13 22.895 58.19 24.93 57.915 31.86C57.835 33.84 57.75 36.07 57.75 38.695C57.75 39.255 57.725 39.88 57.725 40.515C57.63 44.07 57.505 48.075 60.015 49.72C60.3405 49.9228 60.7164 50.0302 61.1 50.03C61.97 50.03 64.575 50.03 71.64 37.905C74.74 32.55 77.14 26.235 77.305 25.76C77.445 25.495 77.865 24.75 78.375 24.45C78.7378 24.257 79.1441 24.1606 79.555 24.17H96.53C98.38 24.17 99.635 24.45 99.88 25.15C100.29 26.285 99.8 29.75 92.05 40.23C90.745 41.975 89.6 43.485 88.595 44.805C81.57 54.025 81.57 54.49 89.01 61.49Z" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
