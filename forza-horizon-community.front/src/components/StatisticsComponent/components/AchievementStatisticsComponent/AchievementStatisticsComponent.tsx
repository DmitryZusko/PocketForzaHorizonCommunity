import { Grid } from "@mui/material";
import AchievementItemComponent from "./components/AchievementItemComponent/AchievementItemComponent";
import useAchievementStatisticsComponent from "./useAchievementStatisticsComponent";

const AchievementStatisticsComponent = () => {
  const { isLoadingAchievements, achievements } = useAchievementStatisticsComponent();

  return (
    <Grid container spacing={2}>
      {achievements.map((achievement) => (
        <Grid item xs={6} key={achievement.name}>
          <AchievementItemComponent achievement={achievement} />
        </Grid>
      ))}
    </Grid>
  );
};

export default AchievementStatisticsComponent;
