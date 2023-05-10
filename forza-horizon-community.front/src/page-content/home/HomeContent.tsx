import { LatestGuidesComponent, NewsBlockComponent, StatisticsComponent } from "@/components";
import { Container, Grid, Paper, Typography } from "@mui/material";

const HomeContent = () => {
  return (
    <Paper>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h1" align="center">
            Welcome to the Horizon Community!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Container>
            <Typography variant="h4" align="center">
              Here you can explore all available in-game cars and discover variouse tunes and
              designs created by our team.
            </Typography>
          </Container>
        </Grid>
        <Grid item xs={12}>
          <Container>
            <Typography variant="h4" align="center">
              Enjoy Yourself!
            </Typography>
          </Container>
        </Grid>
        <Grid item xs={12}>
          <NewsBlockComponent />
        </Grid>
        <Grid item xs={12}>
          <LatestGuidesComponent />
        </Grid>
        <Grid item>
          <StatisticsComponent />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default HomeContent;
