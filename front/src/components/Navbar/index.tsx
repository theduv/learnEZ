import { memo } from "react";
import { Link } from "wouter";
import { Typography } from "../../ui/Typography";
import { Button } from "../../ui/Button";
import { useState } from "react";
import { ModalConfirmDisconnect } from "./ModalConfirmDisconnect";
import ENUM_COLORS from "../../ui/Typography/colors.enum";
import { useAuth } from "../../hooks/useAuth";

const NavbarBase = () => {
  const [openModal, setOpenModal] = useState(false);
  const { userData } = useAuth();

  const onClickDisconnect = () => {
    setOpenModal(true);
  };

  return (
    <div className="bg-dark-gray from-red-600 p-4 flex flex-col justify-between">
      <div className="flex flex-col">
        <Typography variant="h1" color={ENUM_COLORS.ACCENT} bold>
          <Link href="/">LearnEZ</Link>
        </Typography>
        <Typography variant="h4" italic>
          {userData ? userData.username : ""}
        </Typography>
      </div>
      <Button variant="primary" onClick={onClickDisconnect}>
        Disconnect
      </Button>
      <ModalConfirmDisconnect open={openModal} setOpen={setOpenModal} />
    </div>
  );
};

export const Navbar = memo(NavbarBase);
