import { ITuneFullInfo } from "@/data-transfer-objects";
import { GridProps } from "@mui/material";

export interface ITuneDetailsBodyComponentProps {
  selectedTune: ITuneFullInfo | undefined;
  props?: GridProps;
}
