import { Dispatch, SetStateAction, memo, useState } from "react";
import Card from "../../../types/card";
import { UniqueCard } from "./UniqueCard";
import { ModalEditCard } from "./ModalEditCard";

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
  const [openModalEdit, setOpenModalEdit] = useState(false);

  return (
    <div className="flex">
      <div className="grid grid-cols-5 gap-x-2 gap-y-8">
        {cards.map((card) => (
          <UniqueCard
            setOpenModalEdit={setOpenModalEdit}
            card={card}
            key={card._id}
            setCardIdToDelete={setCardIdToDelete}
            setOpenDeleteModal={setOpenModalDelete}
          />
        ))}
      </div>
      <ModalEditCard
        openModal={openModalEdit}
        setOpenModal={setOpenModalEdit}
      />
    </div>
  );
};

export const CardsList = memo(CardsListBase);
