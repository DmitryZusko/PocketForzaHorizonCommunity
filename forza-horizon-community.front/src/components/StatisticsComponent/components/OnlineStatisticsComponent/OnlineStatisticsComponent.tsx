import { OnlineStatisticsSkeletonComponent } from "@/components/skeletons";
import { Box, Grid, Grow, Slide } from "@mui/material";
import { CurrentOnlineComponent, HourOnlineComponent, WeeklyOnlineComponent } from "./components";
import { useOnlineStatisticsComponent } from "./useOnlineStatisticsComponent";

const OnlineStatisticsComponent = ({ ...props }) => {
  const { isLoading, totalPlayers } = useOnlineStatisticsComponent();

  return (
    <>
      {isLoading ? (
        <Grow in={isLoading} unmountOnExit>
          <Box>
            <OnlineStatisticsSkeletonComponent />
          </Box>
        </Grow>
      ) : (
        <Slide in={!isLoading} direction="right" timeout={350} mountOnEnter>
          <Grid container {...props}>
            <Grid item xs={12}>
              <CurrentOnlineComponent totalPlayers={totalPlayers} />
            </Grid>
            <Grid item xs={12} md={6}>
              <HourOnlineComponent totalPlayers={totalPlayers} />
            </Grid>
            <Grid item xs={12} md={6}>
              <WeeklyOnlineComponent totalPlayers={totalPlayers} />
            </Grid>
          </Grid>
        </Slide>
      )}
    </>
  );
};

export default OnlineStatisticsComponent;
