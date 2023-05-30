import { TooltipProps } from "@mui/material";

export interface ICustomTooltipComponentProps {
  title: string;
  children: JSX.Element;
  props?: TooltipProps;
}
