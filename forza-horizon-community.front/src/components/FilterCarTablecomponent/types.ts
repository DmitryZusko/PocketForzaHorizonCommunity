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
}

export interface ICustomCheckboxListComponentHook {
  applyChanges: (newEntry: string[]) => void;
}

export interface ICustomCheckboxListComponentProprs extends ICustomCheckboxListComponentHook {
  entities: string[];
}
