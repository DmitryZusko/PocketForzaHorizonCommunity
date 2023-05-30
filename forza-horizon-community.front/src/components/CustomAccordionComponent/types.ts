import { AccordionProps } from "@mui/material";

export interface ICustomAccordionComponentHook {
  isExpandedByDefault: boolean;
}

export interface ICustomAccordionComponentProps extends ICustomAccordionComponentHook {
  title: string;
  unmountOnExit?: boolean;
  props?: AccordionProps;
}
