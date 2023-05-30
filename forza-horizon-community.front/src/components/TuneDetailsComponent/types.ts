import { GridProps } from "@mui/material";

export interface ITuneDetailsComponentHook {
  id: string;
}

export interface ITuneDetailsComponentProps extends ITuneDetailsComponentHook {
  props?: GridProps;
}
