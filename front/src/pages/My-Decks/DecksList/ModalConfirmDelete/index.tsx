import { Dispatch, SetStateAction, memo } from "react";
import { Button } from "../../../../ui/Button";
import { Modal } from "../../../../ui/Modal";
import { Typography } from "../../../../ui/Typography";
import axios from "axios";
import Deck from "../../../../types/deck";

interface ModalConfirmDeleteProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  deckId: string | null;
  setUserDecks: Dispatch<SetStateAction<Array<Deck>>>;
}

const ModalConfirmDeleteBase = ({
  open,
  setOpen,
  deckId,
  setUserDecks,
}: ModalConfirmDeleteProps) => {
  const onClickCancel = () => {
    setOpen(false);
  };

  const onClickDelete = async () => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_BACKEND_URI}/deleteDeck/${deckId}`
      );
      setUserDecks((oldDecks) =>
        oldDecks.filter((deck) => deck._id !== deckId)
      );
      setOpen(false);
    } catch (e) {
      console.log(e); //TODO: toast
    }
  };

  return (
    <Modal
      open={open}
      setOpen={setOpen}
      title="Are you sure that you want to delete this deck ?"
    >
      <div className="flex flex-col items-center justify-center space-y-4">
        <Typography variant="h1">This action is irreversible.</Typography>
        <div className="flex space-x-4">
          <Button variant="primary" onClick={onClickDelete}>
            Delete this deck
          </Button>
          <Button variant="secondary" onClick={onClickCancel}>
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export const ModalConfirmDelete = memo(ModalConfirmDeleteBase);
