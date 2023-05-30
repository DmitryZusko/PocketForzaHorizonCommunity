import { globalStyles } from "@/styles";
import { Container, Grid, Slider, TextField } from "@mui/material";
import { ICustomRangeSliderComponentProps } from "../../types";
import { useCustomRangeSliderComponent } from "./useCustomRangeSliderComponent";

const CustomRangeSliderComponent = ({
  validRange,
  min,
  max,
  step,
  handleRangeChange,
  ...props
}: ICustomRangeSliderComponentProps) => {
  const { selectedRange, handleSignleChange, validateMin, validateMax } =
    useCustomRangeSliderComponent({ min, max, validRange, handleRangeChange });
  return (
    <Container
      {...props}
      sx={[globalStyles.centeredColumnFlexContainer, { padding: "10px!important" }]}
    >
      <Grid container sx={globalStyles.centeredRowFlexContainer}>
        <Grid item xs={6} sx={globalStyles.centeredRowFlexContainer}>
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
        <Grid item xs={6} sx={globalStyles.centeredRowFlexContainer}>
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
      </Grid>
      <Slider
        value={selectedRange}
        onChange={handleRangeChange}
        valueLabelDisplay="auto"
        min={min}
        max={max}
        step={step}
        disableSwap
      />
    </Container>
  );
};

export default CustomRangeSliderComponent;
