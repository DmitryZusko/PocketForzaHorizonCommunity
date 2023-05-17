import { globalStyles } from "@/styles";
import { Box, Modal } from "@mui/material";
import { PropsWithChildren } from "react";
import { IFloatingModalProps } from "./types";

const FloatingModal = ({
  open,
  handleClose,
  children,
  ...props
}: PropsWithChildren<IFloatingModalProps>) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      {...props}
      sx={globalStyles.centeredColumnFlexContainer}
    >
      <Box>{children}</Box>
    </Modal>
  );
};

export default FloatingModal;
