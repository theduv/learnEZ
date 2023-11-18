import { Dispatch, SetStateAction, memo } from "react";
import { Modal } from "../../../../ui/Modal";

interface ModalEditCardProps {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

const ModalEditCardBase = ({ openModal, setOpenModal }: ModalEditCardProps) => {
  return (
    <Modal open={openModal} setOpen={setOpenModal} title="Edit a card">
      <div></div>
    </Modal>
  );
};

export const ModalEditCard = memo(ModalEditCardBase);
