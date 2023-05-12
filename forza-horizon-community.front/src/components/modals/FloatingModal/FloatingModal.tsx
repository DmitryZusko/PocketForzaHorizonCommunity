import { Modal, Paper } from "@mui/material";
import { PropsWithChildren } from "react";
import { IFloatingModalProps } from "./types";
import { useFloatingModal } from "./useFloatingModal";

const FloatingModal = ({
  open,
  setIsOpen,
  children,
  ...props
}: PropsWithChildren<IFloatingModalProps>) => {
  const { handleClose } = useFloatingModal({ setIsOpen });
  return (
    <Modal open={open} onClose={handleClose} {...props}>
      <Paper>{children}</Paper>
    </Modal>
  );
};

export default FloatingModal;
