import { Button, Grid } from "@mui/material";
import { IFormButtonGroupComponentProps } from "./types";

const FormButtonGroupComponent = ({ handleCancel, ...props }: IFormButtonGroupComponentProps) => {
  return (
    <Grid container spacing={2} {...props}>
      <Grid item xs={6}>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button variant="outlined" onClick={handleCancel}>
          Cancel
        </Button>
      </Grid>
    </Grid>
  );
};

export default FormButtonGroupComponent;
