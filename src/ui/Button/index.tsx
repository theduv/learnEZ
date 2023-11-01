import { clsx } from "clsx";
import { memo, ReactNode } from "react";

interface ButtonProps {
  loading?: boolean;
  children: ReactNode;
  onClick?: () => {};
}

const ButtonBase = ({ children, loading = false, onClick }: ButtonProps) => {
  const classNameContent = clsx(
    "px-4 py-2 rounded-md bg-blue-600 text-white font-medium",
    {
      "bg-blue-500": loading,
    }
  );

  return (
    <button onClick={onClick} className={classNameContent}>
      {children}
    </button>
  );
};

export const Button = memo(ButtonBase);
