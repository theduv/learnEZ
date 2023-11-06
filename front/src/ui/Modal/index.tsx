import clsx from "clsx";
import { Dispatch, memo, ReactNode, SetStateAction } from "react";
import { Typography } from "../Typography";
import { AiFillCloseCircle } from "react-icons/ai";
import ENUM_COLORS from "../Typography/colors.enum";

interface ModalProps {
  children: ReactNode;
  title?: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const ModalBase = ({ children, title, open, setOpen }: ModalProps) => {
  //TODO: close modal on click away
  const onClickCross = () => {
    setOpen(false);
  };

  return (
    <div
      className={clsx(
        "z-10 bg-opacity-20 -top-4 left-0 bg-offwhite h-full w-full absolute flex items-center justify-center", // not sure why but need to set top to -4
        { hidden: !open }
      )}
    >
      <div
        className={clsx("bg-offblack rounded-md transition transform", {
          "scale-0": !open,
          "scale-110 delay-300 duration-300": open,
        })}
      >
        <div className="w-full h-5 bg-dark-gray p-6 flex items-center justify-between text-offwhite">
          <div />
          <Typography bold variant="h1" color={ENUM_COLORS.OFFWHITE}>
            {title}
          </Typography>
          <AiFillCloseCircle
            style={{ marginLeft: 24 }}
            size={32}
            onClick={onClickCross}
            className="cursor-pointer"
          />
        </div>
        <div className="p-8 text-offwhite">{children}</div>
      </div>
    </div>
  );
};

export const Modal = memo(ModalBase);
