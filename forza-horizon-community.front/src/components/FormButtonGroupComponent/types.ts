import { GridProps } from "@mui/material";

export interface IFormButtonGroupComponentProps {
  handleCancel: () => void;
  handleSubmit?: () => void;
  props?: GridProps;
}
