"use client";

import { useEffect } from "react";

const OPEN_FN = "cqOpenDef_wcmovccfzx0002kyu4b2970se7";

export function CueWidget() {
  useEffect(() => {
    const root = document.getElementById("cq-widget-root");
    const overlay = document.getElementById("cq-overlay");
    const close = document.getElementById("cq-close");

    if (!root || !overlay || !close) {
      return;
    }

    const openWidget = () => {
      root.classList.add("is-open");
      document.body.style.overflow = "hidden";
    };

    const closeWidget = () => {
      root.classList.remove("is-open");
      document.body.style.overflow = "";
    };

    (window as any)[OPEN_FN] = openWidget;

    overlay.addEventListener("click", closeWidget);
    close.addEventListener("click", closeWidget);

    const onEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeWidget();
      }
    };
    document.addEventListener("keydown", onEsc);

    return () => {
      overlay.removeEventListener("click", closeWidget);
      close.removeEventListener("click", closeWidget);
      document.removeEventListener("keydown", onEsc);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div id="cq-widget-root" className="cq-widget-root">
      <button
        type="button"
        className="cq-fab"
        onClick={() => (window as any)[OPEN_FN]?.()}
      >
        Забронировать
      </button>

      <div id="cq-overlay" className="cq-overlay" />
      <div className="cq-panel">
        <button id="cq-close" type="button" className="cq-close" aria-label="Закрыть">
          ×
        </button>
        <iframe
          title="Cue booking widget"
          src="https://kvartira14.cue.business/services"
          className="cq-iframe"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </div>
  );
}
