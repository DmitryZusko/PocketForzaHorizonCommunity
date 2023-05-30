import { Grid, GridProps } from "@mui/material";
import { AchievementStatisticsComponent, OnlineStatisticsComponent } from "./components";

export const StatisticsComponent = (props?: GridProps) => {
  return (
    <Grid container spacing={2} {...props}>
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
