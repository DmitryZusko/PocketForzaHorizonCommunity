import { Grid, Typography } from "@mui/material";
import { AchievementStatisticsComponent, OnlineStatisticsComponent } from "./components";

export const StatisticsComponent = ({ ...props }) => {
  return (
    <Grid container spacing={2} {...props}>
      <Grid item xs={12}>
        <Typography variant="h4">In-Game Statistics</Typography>
      </Grid>
      <Grid item xs={12}>
        <OnlineStatisticsComponent />
      </Grid>
      <Grid item xs={12}>
        <AchievementStatisticsComponent />
      </Grid>
    </Grid>
  );
};

export default StatisticsComponent;
