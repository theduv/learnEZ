import { Dispatch, SetStateAction, memo } from "react";
import { Divider } from "../../../../ui/Divider";
import { BsFillTrash2Fill } from "react-icons/bs";
import Card from "../../../../types/card";
import { StyledMDEditor } from "./StyledMDEditor";
import { RiEditFill } from "react-icons/ri";

interface UniqueCardProps {
  card: Card;
  setOpenDeleteModal: Dispatch<SetStateAction<boolean>>;
  setCardIdToDelete: Dispatch<SetStateAction<string | null>>;
  setOpenModalEdit: Dispatch<SetStateAction<boolean>>;
}

const UniqueCardBase = ({
  card,
  setOpenDeleteModal,
  setCardIdToDelete,
  setOpenModalEdit,
}: UniqueCardProps) => {
  const onClickDelete = () => {
    setCardIdToDelete(card._id);
    setOpenDeleteModal(true);
  };

  return (
    <div className="bg-dark-gray flex flex-col space-y-6 items-center justify-center p-8">
      <div className="flex flex-col items-center justify-center hyphens-auto h-36">
        <StyledMDEditor source={card.front} />
      </div>
      <Divider />
      <div className="flex flex-col items-center justify-center hyphens-auto h-36">
        <StyledMDEditor source={card.back} />
      </div>
      <Divider />
      <div className="flex justify-between w-full px-4">
        <RiEditFill
          onClick={() => setOpenModalEdit(true)}
          color="#ADD8E6"
          size={25}
          className="cursor-pointer"
        />
        <BsFillTrash2Fill
          onClick={onClickDelete}
          color="#FF7F7F"
          size={25}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export const UniqueCard = memo(UniqueCardBase);
