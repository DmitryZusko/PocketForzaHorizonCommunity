import { BoxProps, SelectChangeEvent } from "@mui/material";
import { ReactNode } from "react";

export interface ISparePartSelectComponentHook {
  enumerator: any;
}

export interface ISparePartSelectComponentProps extends ISparePartSelectComponentHook {
  imageSrc: string;
  label: string;
  name: string;
  value: string;
  error: boolean | undefined;
  handleValueChange: (event: SelectChangeEvent<string>, child: ReactNode) => void;
  handleBlur: {
    (e: React.FocusEvent<any, Element>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
  props?: BoxProps;
}
