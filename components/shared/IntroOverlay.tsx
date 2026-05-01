"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function IntroOverlay() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || pathname !== "/") return;

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [mounted, pathname]);

  if (!mounted || pathname !== "/") return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-beige transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden
    >
      <span className="text-primary font-medium tracking-tight text-[clamp(24px,6vw,800px)] uppercase">
        Квартира 14
      </span>
    </div>
  );
}
