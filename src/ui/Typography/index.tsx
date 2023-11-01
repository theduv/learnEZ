import clsx from "clsx";
import { ReactNode, memo } from "react";
import ENUM_COLORS from "./colors.enum";

interface TypographyProps {
  color?: ENUM_COLORS;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  italic?: boolean;
  bold?: boolean;
  children: ReactNode;
}

const TypographyBase = ({
  color = ENUM_COLORS.OFFWHITE,
  variant = "p",
  italic = false,
  bold = false,
  children,
}: TypographyProps) => {
  const classNameContent = clsx({
    italic,
    "font-bold": bold,
    "text-2xl": variant === "h1",
    "text-xl": variant === "h2",
    "text-lg": variant === "h3",
    "text-base": variant === "h4" || variant === "p",
    "text-sm": variant === "h5",
    "text-xs": variant === "h6",
    "text-gray-200": color === ENUM_COLORS.OFFWHITE,
    "text-white": color === ENUM_COLORS.WHITE,
    "text-black": color === ENUM_COLORS.BLACK,
    "text-blue-300": color === ENUM_COLORS.LIGHT_BLUE,
    "text-blue-700": color === ENUM_COLORS.DARK_BLUE,
    "text-gray-900": color === ENUM_COLORS.OFFBLACK,
  });

  switch (variant) {
    case "h1":
      return <h1 className={classNameContent}>{children}</h1>;
    case "h2":
      return <h2 className={classNameContent}>{children}</h2>;
    case "h3":
      return <h3 className={classNameContent}>{children}</h3>;
    case "h4":
      return <h4 className={classNameContent}>{children}</h4>;
    case "h5":
      return <h5 className={classNameContent}>{children}</h5>;
    case "h6":
      return <h6 className={classNameContent}>{children}</h6>;
    case "p":
      return <p className={classNameContent}>{children}</p>;
  }
};

export const Typography = memo(TypographyBase);
