import { Dispatch, SetStateAction, memo, useState } from "react";
import { Modal } from "../../../ui/Modal";
import { TextInput } from "../../../ui/TextInput";
import { Button } from "../../../ui/Button";
import axios from "axios";

interface ModalCreateCardProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  deckId: string | undefined;
}

const ModalCreateCardBase = ({
  open,
  setOpen,
  deckId,
}: ModalCreateCardProps) => {
  const [frontValue, setFrontValue] = useState<string>("");
  const [backValue, setBackValue] = useState<string>("");

  const onClickSubmit = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URI}/card/create`, {
        front: frontValue,
        back: backValue,
        deckId,
      });
      setFrontValue("");
      setBackValue("");
      setOpen(false);
    } catch (e) {
      console.log(e); //TODO: toast
    }
  };

  return (
    <Modal open={open} setOpen={setOpen} title="Create a new card">
      <div className="flex flex-col space-y-4 justify-center">
        <TextInput
          placeholder="To be"
          description="Front"
          value={frontValue}
          setValue={setFrontValue}
        />
        <TextInput
          placeholder="Å være"
          description="Back"
          value={backValue}
          setValue={setBackValue}
        />
        <Button variant="primary" onClick={onClickSubmit}>
          Create card
        </Button>
      </div>
    </Modal>
  );
};

export const ModalCreateCard = memo(ModalCreateCardBase);
