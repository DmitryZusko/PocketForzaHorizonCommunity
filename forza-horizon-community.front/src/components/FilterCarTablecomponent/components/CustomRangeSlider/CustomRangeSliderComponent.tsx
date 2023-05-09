import { Grid, Slider, TextField } from "@mui/material";
import { ICustomRangeSliderComponentProps } from "../../types";
import useCustomRangeSliderComponent from "./useCustomRangeSliderComponent";

export default function CustomRangeSliderComponent({
  validRange,
  min,
  max,
  step,
  handleRangeChange,
  ...props
}: ICustomRangeSliderComponentProps) {
  const { selectedRange, handleSignleChange, validateMin, validateMax } =
    useCustomRangeSliderComponent({ min, max, validRange, handleRangeChange });
  return (
    <Grid container spacing={2} {...props}>
      <Grid item xs={6}>
        <TextField
          type="number"
          value={selectedRange[0] || 0}
          onChange={handleSignleChange(0)}
          onBlur={() => validateMin()}
          inputProps={{
            step: step,
            min: min,
            max: max,
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          type="number"
          value={selectedRange[1] || 0}
          onChange={handleSignleChange(1)}
          onBlur={() => validateMax()}
          inputProps={{
            min: min,
            max: max,
            step: step,
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Slider
          value={selectedRange}
          onChange={handleRangeChange}
          valueLabelDisplay="auto"
          min={min}
          max={max}
          step={step}
          disableSwap
        />
      </Grid>
    </Grid>
  );
}
