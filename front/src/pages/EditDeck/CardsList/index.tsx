import { Dispatch, SetStateAction, memo, useState } from "react";
import Card from "../../../types/card";
import { UniqueCard } from "./UniqueCard";
import { ModalConfirmDelete } from "./ModalConfirmDelete/index";

interface CardsListProps {
  cards: Array<Card>;
  setOpenModalDelete: Dispatch<SetStateAction<boolean>>;
  setCardIdToDelete: Dispatch<SetStateAction<string | null>>;
}

const CardsListBase = ({
  cards,
  setCardIdToDelete,
  setOpenModalDelete,
}: CardsListProps) => {
  return (
    <div className="flex">
      <div className="grid grid-cols-5 gap-x-2 gap-y-8">
        {cards.map((card) => (
          <UniqueCard
            card={card}
            key={card._id}
            setCardIdToDelete={setCardIdToDelete}
            setOpenDeleteModal={setOpenModalDelete}
          />
        ))}
      </div>
    </div>
  );
};

export const CardsList = memo(CardsListBase);
