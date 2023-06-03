import { ContainerProps } from "@mui/material";

export interface ICustomRangeSliderComponentHook {
  validRange: number[];
  min: number;
  max: number;
  handleRangeChange: (event: Event | null, newValue: number | number[]) => void;
}

export interface ICustomRangeSliderComponentProps extends ICustomRangeSliderComponentHook {
  validRange: number[];
  min: number;
  max: number;
  step?: number;
  props?: ContainerProps;
}

export interface ICustomCheckboxListComponentHook {
  entities: string[];
  applyChanges: (newEntry: string[]) => void;
}

export interface ICustomCheckboxListComponentProprs extends ICustomCheckboxListComponentHook {
  props?: ContainerProps;
}
