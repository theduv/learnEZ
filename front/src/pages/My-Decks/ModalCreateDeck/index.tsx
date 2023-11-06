import { memo, Dispatch, SetStateAction, useState } from "react";
import { Modal } from "../../../ui/Modal";
import { TextInput } from "../../../ui/TextInput";
import { Button } from "../../../ui/Button";
import axios from "axios";
import { useAuth } from "../../../hooks/useAuth";

interface ModalCreateDeckProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const ModalCreateDeckBase = ({ open, setOpen }: ModalCreateDeckProps) => {
  const [titleValue, setTitleValue] = useState<string>("");
  const { userData } = useAuth();

  const onSaveDeck = async () => {
    if (titleValue === "") return;
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URI}/createDeck`, {
        title: titleValue,
        userId: userData._id,
      });
      setTitleValue("");
      setOpen(false);
    } catch (e) {
      console.log(e); // TODO: toast
    }
  };

  return (
    <Modal open={open} setOpen={setOpen} title="Create a new deck">
      <div className="flex flex-col space-y-4 items-center justify-start">
        <TextInput
          value={titleValue}
          setValue={setTitleValue}
          placeholder="Norwegian vocabulary"
          description="Deck title"
        />
        <Button variant="primary" onClick={onSaveDeck}>
          Save
        </Button>
      </div>
    </Modal>
  );
};

export const ModalCreateDeck = memo(ModalCreateDeckBase);
