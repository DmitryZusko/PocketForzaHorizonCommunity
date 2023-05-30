import { ITuneFullInfo } from "@/data-transfer-objects";
import { GridProps } from "@mui/material";

export interface ITuneDetailsBodyComponentProps {
  selectedEntity: ITuneFullInfo | undefined;
  props?: GridProps;
}
