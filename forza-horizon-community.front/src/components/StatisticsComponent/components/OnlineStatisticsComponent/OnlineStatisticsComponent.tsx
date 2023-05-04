import { Grid } from "@mui/material";
import HourOnlineComponent from "./components/HourOnlineComponent/HourOnlineComponent";
import WeeklyOnlineComponent from "./components/WeeklyOnlineComponent/WeeklyOnlineComponent";

const OnlineStatisticsComponent = () => {
  return (
    <Grid container>
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
