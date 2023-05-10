import { Grid } from "@mui/material";
import { HourOnlineComponent, WeeklyOnlineComponent } from "./components";

const OnlineStatisticsComponent = ({ ...props }) => {
  return (
    <Grid container {...props}>
      <Grid item xs={12}>
        <HourOnlineComponent />
      </Grid>
      <Grid item xs={12}>
        <WeeklyOnlineComponent />
      </Grid>
    </Grid>
  );
};

export default OnlineStatisticsComponent;
