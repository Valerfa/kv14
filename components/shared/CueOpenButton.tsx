"use client";

import { cn } from "@/lib/utils";

type CueOpenButtonProps = {
  className: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export function CueOpenButton({
  className,
  children,
  onClick,
}: CueOpenButtonProps) {
  return (
    <button
      type="button"
      onClick={() => {
        onClick?.();
        if (typeof window !== "undefined") {
          (window as any).cqOpenDef_wcmovccfzx0002kyu4b2970se7?.();
        }
      }}
      className={cn("cursor-pointer", className)}
    >
      {children}
    </button>
  );
}
