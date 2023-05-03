import { Grid, Typography } from "@mui/material";
import AchievementStatisticsComponent from "./components/AchievementStatisticsComponent/AchievementStatisticsComponent";
import OnlineStatisticsComponent from "./components/OnlineStatisticsComponent/OnlineStatisticsComponent";

export const StatisticsComponent = () => {
  return (
    <Grid container spacing={2}>
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
