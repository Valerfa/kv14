"use client";

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
      className={className}
    >
      {children}
    </button>
  );
}
