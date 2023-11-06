import { Dispatch, SetStateAction, memo, useState } from "react";
import Deck from "../../../types/deck";
import { SingleDeck } from "./SingleDeck";
import { ModalConfirmDelete } from "./ModalConfirmDelete/index";

interface DecksListProps {
  decks: Array<Deck>;
  setUserDecks: Dispatch<SetStateAction<Array<Deck>>>;
}

const DecksListBase = ({ decks, setUserDecks }: DecksListProps) => {
  const [deckIdToDelete, setDeckIdToDelete] = useState<string | null>(null);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);

  return (
    <div className="h-full ">
      <div className="grid gap-x-6 grid-cols-6 gap-y-4 ">
        {decks.map((deck) => (
          <SingleDeck
            deck={deck}
            key={deck._id}
            setOpenDeleteModal={setOpenDeleteModal}
            setDeckIdToDelete={setDeckIdToDelete}
          />
        ))}
      </div>
      <ModalConfirmDelete
        setUserDecks={setUserDecks}
        deckId={deckIdToDelete}
        open={openDeleteModal}
        setOpen={setOpenDeleteModal}
      />
    </div>
  );
};

export const DecksList = memo(DecksListBase);
