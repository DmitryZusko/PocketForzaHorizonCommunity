import { IAchivement } from "@/data-transfer-objects";
import { BoxProps } from "@mui/material";

export interface IAchievementItemComponentProps {
  achievement: IAchivement;
  props?: BoxProps;
}
