import { CardProps } from "@mui/material";

export interface IBaseCardProps {
  thumbnail?: string;
  cardTitle: string;
  body: JSX.Element;
  footer?: JSX.Element;
  imageWidth?: number;
  imageHeight?: number;
  props?: CardProps;
}
