"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/shared/FadeIn";

const rules = [
  {
    id: "booking-confirmation",
    title: "Бронирование и оплата",
    content: "Бронирование осуществляется через сайт или по телефону. Предоплата 50% при бронировании оставшаяся сумма оплачивается на месте",
  },
  {
    id: "prepayment",
    title: "Отмена бронирования",
    content: "Возврат средств осуществляется при отмене бронирования за 72 часа . Перенос брони возможен так же, как и отмена — за 72 часа до начала съёмки В случае отмены за меньший срок, предоплата возврату не подлежит, а перенос невозможен, так как бронирование помещения, как услуга, считается полностью оказанной. Такие же правила действуют на брони, сделанные за 1-3 дня до съемки! Возврат средств НЕ осуществляется при отмене или переносе этих броней, так как до съемки осталось меньше 3-х дней",
  },
  {
    id: "cancellation",
    title: "Время аренды",
    content: "Минимальное время аренды 1 час. При этом 5 минут до окончания брони отводится на уборку помещения",
  },
  {
    id: "cleaning-time",
    title: "Время работы",
    content: "Фотостудия работает ежедневно с 9:00 до 21:00. Аренда в ночное время обсуждается отдельно",
  },
  {
    id: "late-policy",
    title: "Ограничения",
    content: "Запрещается наклеивать на стены и пол клейкую ленту, а так же использовать хлопушки, блестки, конфетти и тд. В студии категорически запрещено курение, употребление спиртных напитков и наркотических веществ. За несоблюдение правил и порчу имущества взимается штраф в размере стоимости вещи/химчистки",
  },
  {
    id: "equipment",
    title: "Оборудование",
    content: "В нашем пространстве качественный постоянный студийный свет Aputure Amaran Halo 200x. А так же насадки к нему: рефлектор, сфера, софтбокс с сотами. Отпариватель доступен по запросу и входит в стоимость аренды",
  },
  {
    id: "people",
    title: "Количество человек",
    content: "В стоимость аренды включено не более 8 человек",
  },
  {
    id: "animals",
    title: "Съемка с животными",
    content: "Съемка с животными возможна по предварительному согласованию",
  },
  
];


  

export function Rules() {
  const [openId, setOpenId] = useState<string | null>("time");

  const toggleRule = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="rules"
      className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12 2xl:mx-24 py-10 md:py-16 md:py-20 xl:py-28 2xl:py-32 bg-beige"
    >
      <div className="">
        <FadeIn>
          <div>
            {/* Header */}
            <div className="mb-12 grid grid-cols-4 lg:grid-cols-12">
              <div className="col-span-4 lg:col-span-6 lg:col-start-4 text-left lg:text-center">
                <span className="subtitle mb-2 block">
                  / Правила студии
                </span>
                <h2 className="title-section">
                  ВАЖНО ПЕРЕД СЪЁМКОЙ
                </h2>
              </div>
            </div>

            {/* Accordion */}
            <div className="space-y-0">
              {rules.map((rule, index) => (
                <FadeIn key={rule.id} delay={index * 0.03}>
                  <div className="border-t border-b border-foreground/60 last:border-b-0">
                    <button
                      onClick={() => toggleRule(rule.id)}
                      className="w-full flex items-center justify-between py-4 md:py-6 lg:py-8 xl:py-10 text-left transition-colors"
                      aria-expanded={openId === rule.id}
                    >
                      <div className="w-full lg:w-1/2 flex items-start">
                        <span className="mr-4 lg:mr-6 2xl:mr-12 subtitle">
                          {String(index + 1).padStart(2, "/ ")}
                        </span>
                        <span className="text-[clamp(18px,1.6vw,44px)] tracking-tight uppercase pr-4 text-left">
                          {rule.title}
                        </span>
                      </div>
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
                          className="text-foreground/80 w-[clamp(20px,2vw,42px)] h-[clamp(20px,2vw,42px)]"
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
                          <div className="pl-7 md:pl-10 lg:pl-12 xl:pl-14 2xl:pl-16 pb-5 text-body text-foreground text-left">
                            <div className="w-full lg:w-1/2">
                              {rule.content}
                            </div>
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
            <p className="text-body text-primary-light mt-4 text-left">
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
