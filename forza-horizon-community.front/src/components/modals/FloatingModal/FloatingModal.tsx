import { defaultAnimationDuration } from "@/components/constants";
import { globalStyles } from "@/styles";
import { Box, Modal, Zoom } from "@mui/material";
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
      <Zoom in={open} timeout={defaultAnimationDuration}>
        <Box>{children}</Box>
      </Zoom>
    </Modal>
  );
};

export default FloatingModal;
