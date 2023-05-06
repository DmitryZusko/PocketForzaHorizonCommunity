import { Grid, Typography } from "@mui/material";
import DesignBlockComponent from "./component/DesignBlockComponent/DesignBlockComponent";
import TunesBlockComponent from "./component/TunesBlockComponent/TunesBlockComponent";

const LatestGuidesComponent = ({ ...props }) => {
  return (
    <Grid container spacing={2} {...props}>
      <Grid item xs={12}>
        <Typography variant="h4">Check our latests guides</Typography>
      </Grid>
      <Grid item xs={12}>
        <DesignBlockComponent />
      </Grid>
      <Grid item xs={12}>
        <TunesBlockComponent />
      </Grid>
    </Grid>
  );
};

export default LatestGuidesComponent;
