import { Grid } from "@mui/material";
import { DesignBlockComponent, TunesBlockComponent } from "./component";
import { styles } from "./styles";

const LatestGuidesComponent = ({ ...props }) => {
  return (
    <Grid container spacing={2} {...props}>
      <Grid item xs={12}>
        <DesignBlockComponent />
      </Grid>
      <Grid item xs={12} sx={styles.nextBlock}>
        <TunesBlockComponent />
      </Grid>
    </Grid>
  );
};

export default LatestGuidesComponent;
