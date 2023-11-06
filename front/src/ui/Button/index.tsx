import { clsx } from "clsx";
import { memo, ReactNode } from "react";

interface ButtonProps {
  loading?: boolean;
  children: ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

const ButtonBase = ({
  children,
  loading = false,
  onClick,
  variant = "secondary",
}: ButtonProps) => {
  const classNameContent = clsx("transition px-4 py-2 rounded-sm font-medium", {
    "bg-blue-500": loading,
    "bg-offblack-secondary border border-black text-offwhite font-bold hover:bg-black duration-300":
      variant === "primary",
    "bg-offwhite text-offblack font-bold border-2 hover:bg-white duration-300":
      variant === "secondary",
  });

  return (
    <button onClick={onClick} className={classNameContent}>
      {children}
    </button>
  );
};

export const Button = memo(ButtonBase);
