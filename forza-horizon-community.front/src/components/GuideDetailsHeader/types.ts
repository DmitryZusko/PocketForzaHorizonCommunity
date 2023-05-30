import { GridProps } from "@mui/material";
import { IDetailsTextBlockComponentProps } from "./components";

export interface IGuideDetailsHeaderProps extends IDetailsTextBlockComponentProps {
  thumbnail?: string;
  props?: GridProps;
}
