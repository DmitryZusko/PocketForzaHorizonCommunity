import { BoxProps } from "@mui/material";

export interface ICustomLinkComponentProps {
  href: string;
  target: LinkTarget;
  props?: BoxProps;
}

export type LinkTarget = "_blank" | "_parent" | "_self" | "_top";
