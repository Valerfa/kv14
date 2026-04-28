"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/shared/FadeIn";

const rules = [
  {
    id: "booking-confirmation",
    title: "Подтверждение брони",
    content: "Бронь считается подтвержденной только после внесения предоплаты.",
  },
  {
    id: "prepayment",
    title: "Предоплата",
    content: "Минимальный размер предоплаты — 50%.",
  },
  {
    id: "cancellation",
    title: "Отмена бронирования",
    content: "При отмене менее чем за 72 часа предоплата не возвращается.",
  },
  {
    id: "cleaning-time",
    title: "Время аренды",
    content: "Время аренды включает 5 минут на уборку и освобождение зала.",
  },
  {
    id: "late-policy",
    title: "Опоздание и задержка",
    content: "Опоздание не продлевает время брони, задержка оплачивается дополнительно.",
  },
  {
    id: "restrictions",
    title: "Ограничения",
    content: "Запрещены действия и материалы, способные повредить интерьер. При ущербе взимается компенсация.",
  },
];

export function Rules() {
  const [openId, setOpenId] = useState<string | null>("time");

  const toggleRule = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="rules" className="py-16 lg:py-24 bg-beige">
      <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12 2xl:max-w-[1600px] 2xl:mx-auto">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <span className="subtitle mb-2 block md:text-center">
                / Правила студии
              </span>
              <h2 className="title-section mb-8 md:text-center">
                ВАЖНО ПЕРЕД СЪЁМКОЙ
              </h2>
            </div>

            {/* Accordion */}
            <div className="space-y-0">
              {rules.map((rule, index) => (
                <FadeIn key={rule.id} delay={index * 0.03}>
                  <div className="border-t border-b border-foreground/60 last:border-b-0">
                    <button
                      onClick={() => toggleRule(rule.id)}
                      className="w-full flex items-center justify-between py-5 text-left hover:bg-foreground/5 transition-colors"
                      aria-expanded={openId === rule.id}
                    >
                      <span className="font-medium text-body md:text-lg pr-4 md:text-center">{rule.title}</span>
                      <motion.div
                        animate={{ rotate: openId === rule.id ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-foreground/60"
                        >
                          <path
                            d="M6.63569 0.633545L6.07814 1.23333L9.85428 5.00947C10.1195 5.27436 10.4504 5.46388 10.8131 5.55857L10.9018 5.57969H0V6.42446H10.9018L10.8131 6.44558C10.4504 6.54028 10.1195 6.7298 9.85428 6.99469L6.07814 10.7708L6.63147 11.3664L12 6.00208L6.63569 0.633545Z"
                            fill="currentColor"
                          />
                        </svg>
                      </motion.div>
                    </button>
                    <AnimatePresence initial={false}>
                      {openId === rule.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                          <div className="px-4 md:px-6 pb-5 text-sm md:text-body text-foreground whitespace-pre-line md:text-center">
                            {rule.content}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </FadeIn>
              ))}
            </div>

            <div className="grid grid-cols-4">
            <div className="col-span-3 col-start-2">
            <p className="text-body text-primary-light mt-4 md:text-center">
              С полным сводом правил можно ознакомиться по{" "}
              <Link href="/rules" className="underline underline-offset-4 hover:opacity-80 transition-opacity">
                ссылке
              </Link>
              .
            </p>
          </div>
          </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
