import { Dispatch, SetStateAction, memo } from "react";
import axios from "axios";
import { Modal } from "../../../ui/Modal";
import { Button } from "../../../ui/Button";
import { Typography } from "../../../ui/Typography";
import ENUM_COLORS from "../../../ui/Typography/colors.enum";

interface ModalConfirmDeleteProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  cardId: string | null;
}

const ModalConfirmDeleteBase = ({
  open,
  setOpen,
  cardId,
}: ModalConfirmDeleteProps) => {
  const onClickConfirm = async () => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_BACKEND_URI}/card/delete/${cardId}`
      );
      setOpen(false);
    } catch (e) {
      console.log(e); //TODO: toast
    }
  };

  const onClickCancel = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      setOpen={setOpen}
      title="Do you really want to remove this card ?"
    >
      <div className="flex flex-col space-y-4 items-center">
        <Typography variant="h1" color={ENUM_COLORS.OFFWHITE}>
          This action is irreversible.
        </Typography>
        <div className="flex items-center space-x-4">
          <Button variant="primary" onClick={onClickConfirm}>
            Delete this card
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
