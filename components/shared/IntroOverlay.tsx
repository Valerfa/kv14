"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function IntroOverlay() {
  const pathname = usePathname();
  const [shouldRender, setShouldRender] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (pathname !== "/") return;

    let hideTimer: ReturnType<typeof setTimeout> | undefined;
    let firstFrame = 0;
    let secondFrame = 0;

    firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => {
        if (window.scrollY > 0) return;

        setShouldRender(true);
        setIsVisible(true);

        hideTimer = setTimeout(() => {
          setIsVisible(false);
        }, 600);
      });
    });

    return () => {
      cancelAnimationFrame(firstFrame);
      cancelAnimationFrame(secondFrame);
      if (hideTimer) clearTimeout(hideTimer);
    };
  }, [pathname]);

  if (pathname !== "/" || !shouldRender) return null;

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
