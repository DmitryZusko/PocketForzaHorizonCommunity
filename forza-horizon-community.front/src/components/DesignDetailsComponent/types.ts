import { GridProps } from "@mui/material";

export interface IDesignDetailsComponentHook {
  id: string;
}

export interface IDesignDetailsComponentProps extends IDesignDetailsComponentHook {
  props?: GridProps;
}
