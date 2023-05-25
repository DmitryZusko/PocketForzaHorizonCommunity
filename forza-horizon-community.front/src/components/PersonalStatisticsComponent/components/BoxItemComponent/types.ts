import { BoxProps } from "@mui/system";

export interface IBoxItemComponentProps {
  header: string;
  body: string;
  index: number;
  props?: BoxProps;
}
