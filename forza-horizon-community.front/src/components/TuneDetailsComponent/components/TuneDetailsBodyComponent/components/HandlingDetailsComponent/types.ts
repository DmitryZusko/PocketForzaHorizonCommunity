import { BoxProps } from "@mui/material";

export interface IHandlingDetailsComponentProps {
  handlingDescription: string | undefined;
  brakes: string | undefined;
  suspension: string | undefined;
  antiRollBars: string | undefined;
  rollCage: string | undefined;
  props?: BoxProps;
}
