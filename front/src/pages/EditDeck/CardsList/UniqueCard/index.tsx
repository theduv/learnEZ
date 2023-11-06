import { Dispatch, SetStateAction, memo } from "react";
import { Typography } from "../../../../ui/Typography";
import { Divider } from "../../../../ui/Divider";
import { BsFillTrash2Fill } from "react-icons/bs";
import Card from "../../../../types/card";
import ENUM_COLORS from "../../../../ui/Typography/colors.enum";

interface UniqueCardProps {
  card: Card;
  setOpenDeleteModal: Dispatch<SetStateAction<boolean>>;
  setCardIdToDelete: Dispatch<SetStateAction<string | null>>;
}

const UniqueCardBase = ({
  card,
  setOpenDeleteModal,
  setCardIdToDelete,
}: UniqueCardProps) => {
  const onClickDelete = () => {
    setCardIdToDelete(card._id);
    setOpenDeleteModal(true);
  };

  return (
    <div className="bg-dark-gray flex flex-col space-y-6 items-center justify-center p-14">
      <Typography color={ENUM_COLORS.OFFWHITE}>{card.front}</Typography>
      <Divider />
      <Typography color={ENUM_COLORS.OFFWHITE}>{card.back}</Typography>
      <Divider />
      <BsFillTrash2Fill
        onClick={onClickDelete}
        color="#FF7F7F"
        size={25}
        className="cursor-pointer"
      />
    </div>
  );
};

export const UniqueCard = memo(UniqueCardBase);
