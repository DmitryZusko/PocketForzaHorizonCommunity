import { OutlinedInputProps } from "@mui/material";

export interface IPasswordFieldComponentProps {
  label: string;
  helperText: string | false | undefined;
  props?: OutlinedInputProps;
}
