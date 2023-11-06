import { memo, Dispatch, SetStateAction } from "react";
import { Modal } from "../../ui/Modal";
import { Button } from "../../ui/Button";
import { useAuth0 } from "@auth0/auth0-react";

interface ModalConfirmDisconnectProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const ModalConfirmDisconnectBase = ({
  open,
  setOpen,
}: ModalConfirmDisconnectProps) => {
  const { logout } = useAuth0();

  const onClickYes = async () => {
    await logout({ logoutParams: { returnTo: window.location.origin } });
    setOpen(false);
  };

  const onClickNo = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      setOpen={setOpen}
      title="Do you really want to disconnect ?"
    >
      <div className="flex space-x-8 justify-center">
        <Button variant="primary" onClick={onClickYes}>
          Yes
        </Button>
        <Button variant="secondary" onClick={onClickNo}>
          No
        </Button>
      </div>
    </Modal>
  );
};

export const ModalConfirmDisconnect = memo(ModalConfirmDisconnectBase);
