import { ModalProps } from "@mui/material";

export interface IFloatingModalHook {
  handleClose: () => void;
}

export interface IFloatingModalProps extends IFloatingModalHook {
  open: boolean;
  props?: ModalProps;
}
