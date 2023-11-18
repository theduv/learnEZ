import { memo, useState, useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { DecksList } from "./DecksList";
import { Button } from "../../ui/Button/index.tsx";
import { ModalCreateDeck } from "./ModalCreateDeck/index.tsx";
import { TextInput } from "../../ui/TextInput/index.tsx";
import Deck from "../../types/deck";
import axios from "axios";
import displayError from "../../functions/displayError.ts";

const MyDecksBase = () => {
  const [userDecks, setUserDecks] = useState<Array<Deck>>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const { userData } = useAuth();

  const onClickCreateDeck = () => {
    setOpenModal(true);
  };

  const fetchDecks = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URI}/getDecksFromUser?userId=${
          userData._id
        }`
      );
      setUserDecks(res.data);
    } catch (e) {
      displayError(e, "Error: could not fetch");
    }
  };

  useEffect(() => {
    if (userData._id && openModal === false) fetchDecks();
  }, [userData._id, openModal]);

  return (
    <div className="flex flex-col space-y-8 h-full">
      <div className="flex flex-col space-y-4">
        <div>
          <Button onClick={onClickCreateDeck} variant="primary">
            Create a new deck
          </Button>
        </div>
        <TextInput
          placeholder="Norwegian vocabulary"
          value={searchValue}
          description="Search for a deck"
          setValue={setSearchValue}
        />
      </div>
      <DecksList
        decks={userDecks.filter((deck) =>
          deck.title.toLowerCase().includes(searchValue.toLowerCase())
        )}
        setUserDecks={setUserDecks}
      />
      <ModalCreateDeck open={openModal} setOpen={setOpenModal} />
    </div>
  );
};

export const MyDecks = memo(MyDecksBase);
