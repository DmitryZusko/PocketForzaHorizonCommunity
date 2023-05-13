import { Modal, Paper } from "@mui/material";
import { PropsWithChildren } from "react";
import { IFloatingModalProps } from "./types";

const FloatingModal = ({
  open,
  handleClose,
  children,
  ...props
}: PropsWithChildren<IFloatingModalProps>) => {
  return (
    <Modal open={open} onClose={handleClose} {...props}>
      <Paper>{children}</Paper>
    </Modal>
  );
};

export default FloatingModal;
