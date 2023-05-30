import { defaultAnimationDuration } from "@/components/constants";
import { AchievementSkeletonComponent } from "@/components/skeletons";
import { Box, Container, ContainerProps, Grid, Grow, Slide, Typography } from "@mui/material";
import { AchievementItemComponent } from "./components";
import { styles } from "./styles";
import { useAchievementStatisticsComponent } from "./useAchievementStatisticsComponent";

const AchievementStatisticsComponent = (props?: ContainerProps) => {
  const { isLoadingAchievements, achievements } = useAchievementStatisticsComponent();

  return (
    <Container {...props} sx={styles.outerContainer}>
      <>
        <Typography variant="blockTitle" sx={styles.blockTitle} align="center">
          Top-10 Players Achievements
        </Typography>
        {isLoadingAchievements ? (
          <Grow in={isLoadingAchievements} unmountOnExit>
            <Grid container>
              <Grid item xs={6} md={3}>
                <AchievementSkeletonComponent />
              </Grid>
              <Grid item xs={6} md={3}>
                <AchievementSkeletonComponent />
              </Grid>
              <Grid item xs={6} md={3}>
                <AchievementSkeletonComponent />
              </Grid>
              <Grid item xs={6} md={3}>
                <AchievementSkeletonComponent />
              </Grid>
            </Grid>
          </Grow>
        ) : (
          achievements.map((achievement) => (
            <Slide
              key={achievement.name}
              in={!isLoadingAchievements}
              direction="right"
              mountOnEnter
              timeout={defaultAnimationDuration}
            >
              <Box sx={styles.achievementBox}>
                <AchievementItemComponent achievement={achievement} />
              </Box>
            </Slide>
          ))
        )}
      </>
    </Container>
  );
};

export default AchievementStatisticsComponent;
