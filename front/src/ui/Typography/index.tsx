import clsx from "clsx";
import { ReactNode, memo } from "react";
import ENUM_COLORS from "./colors.enum";

interface TypographyProps {
  color?: ENUM_COLORS;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  italic?: boolean;
  bold?: boolean;
  truncate?: boolean;
  children: ReactNode;
  opacity?:
    | 0
    | 5
    | 10
    | 20
    | 25
    | 30
    | 40
    | 50
    | 60
    | 70
    | 75
    | 80
    | 90
    | 95
    | 100;
}

const TypographyBase = ({
  color = ENUM_COLORS.OFFWHITE,
  variant = "p",
  italic = false,
  bold = false,
  truncate = false,
  opacity = 100,
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
    "text-offblack": color === ENUM_COLORS.OFFBLACK,
    "text-offwhite": color === ENUM_COLORS.OFFWHITE,
    "text-night": color === ENUM_COLORS.NIGHT,
    "text-accent": color === ENUM_COLORS.ACCENT,
    "text-red-600": color === ENUM_COLORS.DARK_RED,
    "text-ellipsis break-all line-clamp-1": truncate,
    "text-opacity-0": opacity === 0,
    "text-opacity-5": opacity === 5,
    "text-opacity-10": opacity === 10,
    "text-opacity-20": opacity === 20,
    "text-opacity-25": opacity === 25,
    "text-opacity-30": opacity === 30,
    "text-opacity-40": opacity === 40,
    "text-opacity-50": opacity === 50,
    "text-opacity-60": opacity === 60,
    "text-opacity-70": opacity === 70,
    "text-opacity-75": opacity === 75,
    "text-opacity-80": opacity === 80,
    "text-opacity-90": opacity === 90,
    "text-opacity-95": opacity === 95,
    "text-opacity-100": opacity === 100,
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
