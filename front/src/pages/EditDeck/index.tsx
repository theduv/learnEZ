import { memo, useEffect, useState } from "react";
import { useRoute } from "wouter";
import { CardsList } from "./CardsList";
import { Typography } from "../../ui/Typography";
import { Button } from "../../ui/Button";
import { ModalCreateCard } from "./ModalCreateCard";
import { ModalConfirmDelete } from "./ModalConfirmDelete";
import axios from "axios";
import Card from "../../types/card";
import Deck from "../../types/deck";
import ENUM_COLORS from "../../ui/Typography/colors.enum";
import { toast } from "react-toastify";
import displayError from "../../functions/displayError";

const EditDeckBase = () => {
  const route = useRoute("/edit/deck/:id");
  const [deckInfos, setDeckInfos] = useState<Deck | null>(null);
  const [cards, setCards] = useState<Array<Card>>([]);
  const [cardIdToDelete, setCardIdToDelete] = useState<string | null>(null);
  const [openModalCreate, setOpenModalCreate] = useState<boolean>(false);
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
  const id = route[1]?.id;

  const onClickCreateCard = () => {
    setOpenModalCreate(true);
  };

  const fetchCards = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URI}/deck/get?deckId=${id}`
      );
      setDeckInfos(res.data);
      const res2 = await axios.get(
        `${import.meta.env.VITE_BACKEND_URI}/cards/get?deckId=${id}`
      );
      setCards(res2.data);
    } catch (e) {
      displayError(e, "Error: could not fetch cards.");
    }
  };

  useEffect(() => {
    fetchCards();
  }, [openModalCreate, openModalDelete]);

  return (
    <div className="flex flex-col justify-center space-y-4">
      <div className="flex items-center justify-center">
        <Typography variant="h1" color={ENUM_COLORS.ACCENT}>
          {deckInfos?.title}
        </Typography>
      </div>
      <div>
        <Button onClick={onClickCreateCard} variant="primary">
          Create a card
        </Button>
      </div>
      <CardsList
        cards={cards}
        setOpenModalDelete={setOpenModalDelete}
        setCardIdToDelete={setCardIdToDelete}
      />
      <ModalConfirmDelete
        open={openModalDelete}
        setOpen={setOpenModalDelete}
        cardId={cardIdToDelete}
      />
      <ModalCreateCard
        open={openModalCreate}
        setOpen={setOpenModalCreate}
        deckId={id}
      />
    </div>
  );
};

export const EditDeck = memo(EditDeckBase);
