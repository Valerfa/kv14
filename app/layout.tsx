import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import { Header } from "@/components/shared/Header";
import { IntroOverlay } from "@/components/shared/IntroOverlay";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Квартира 14 — Фотостудия",
  description: "Фотостудия Квартира 14 — минималистичное пространство для ваших съемок",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <head>
        <Script
          src="https://booking.booknow.ru/widget.js"
          strategy="beforeInteractive"
        />
      </head>
      <body
        className="min-h-full flex flex-col font-sans"
        style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
      >
        <TooltipProvider delayDuration={200}>
          <IntroOverlay />
          <Header />
          <div className="flex min-h-0 flex-1 flex-col">{children}</div>
        </TooltipProvider>
      </body>
    </html>
  );
}
