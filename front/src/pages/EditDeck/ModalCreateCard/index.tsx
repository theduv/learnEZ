import { Dispatch, SetStateAction, memo, useState } from "react";
import { Modal } from "../../../ui/Modal";
import { TextInput } from "../../../ui/TextInput";
import { Button } from "../../../ui/Button";
import axios from "axios";
import displayError from "../../../functions/displayError";

import MDEditor from "@uiw/react-md-editor";
import { toast } from "react-toastify";
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
      toast.success("Card successfully created !");
      setOpen(false);
    } catch (e) {
      displayError(e, "Error: could not create card.");
    }
  };

  return (
    <Modal open={open} setOpen={setOpen} title="Create a new card">
      <div className="flex flex-col space-y-2 justify-center">
        <MDEditor
          height={300}
          style={{ width: 800 }}
          value={frontValue}
          onChange={(e: any) => setFrontValue(e)}
        />
        <MDEditor
          height={300}
          style={{ width: 800 }}
          value={backValue}
          onChange={(e: any) => setBackValue(e)}
        />
        <Button variant="primary" onClick={onClickSubmit}>
          Create card
        </Button>
      </div>
    </Modal>
  );
};

export const ModalCreateCard = memo(ModalCreateCardBase);
