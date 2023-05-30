import { GridProps } from "@mui/material";

export interface IGuideCardFooterComponentProps {
  isDesign?: boolean;
  shareCode: string;
  rating: number;
  author: string;
  creationDate: Date;
  carModel: string;
  props?: GridProps;
}
