import { globalStyles } from "@/styles";
import { Button, Grid } from "@mui/material";
import { styles } from "./styles";
import { IFormButtonGroupComponentProps } from "./types";

const FormButtonGroupComponent = ({ handleCancel, ...props }: IFormButtonGroupComponentProps) => {
  return (
    <Grid container spacing={2} {...props} sx={styles.outerContainer}>
      <Grid item xs={6} sx={globalStyles.centeredRowFlexContainer}>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Grid>
      <Grid item xs={6} sx={globalStyles.centeredRowFlexContainer}>
        <Button variant="outlined" onClick={handleCancel}>
          Cancel
        </Button>
      </Grid>
    </Grid>
  );
};

export default FormButtonGroupComponent;
