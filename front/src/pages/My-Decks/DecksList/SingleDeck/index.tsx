import { Dispatch, SetStateAction, memo, useState } from "react";
import { Typography } from "../../../../ui/Typography";
import { PiCardsThin } from "react-icons/pi";
import { BsFillTrash2Fill, BsFillPlayFill } from "react-icons/bs";
import { RiEditFill } from "react-icons/ri";
import Deck from "../../../../types/deck";
import ENUM_COLORS from "../../../../ui/Typography/colors.enum";
import { Divider } from "../../../../ui/Divider";
import { Link } from "wouter";

interface SingleDeckProps {
  deck: Deck;
  setOpenDeleteModal: Dispatch<SetStateAction<boolean>>;
  setDeckIdToDelete: Dispatch<SetStateAction<string | null>>;
}

const SingleDeckBase = ({
  deck,
  setOpenDeleteModal,
  setDeckIdToDelete,
}: SingleDeckProps) => {
  const onClickDelete = () => {
    setDeckIdToDelete(deck._id);
    setOpenDeleteModal(true);
  };

  return (
    <div className="bg-dark-gray px-4 py-6 transform flex flex-col items-center space-y-6 animate overflow-hidden hover:scale-105 duration-200 ">
      <Typography
        variant="h2"
        color={ENUM_COLORS.OFFWHITE}
        bold
        truncate
        opacity={50}
      >
        {deck.title}
      </Typography>
      <Divider />
      <div className="relative">
        <PiCardsThin size={140} color={"#FFFCF2"} opacity="40%" />
        <div className="absolute top-1/2 right-1/2">
          <Typography
            color={ENUM_COLORS.OFFWHITE}
            bold
            variant="h1"
            opacity={40}
          >
            {deck.cards.length}
          </Typography>
        </div>
      </div>
      <Divider />
      <div className="flex justify-between w-full px-4">
        <BsFillTrash2Fill
          color="#FF7F7F"
          size={25}
          onClick={onClickDelete}
          className="cursor-pointer"
        />
        <Link href={`/edit/deck/${deck._id}`}>
          <RiEditFill color="#ADD8E6" size={25} className="cursor-pointer" />
        </Link>
        <BsFillPlayFill color="#77DD77" size={25} className="cursor-pointer" />
      </div>
    </div>
  );
};

export const SingleDeck = memo(SingleDeckBase);
