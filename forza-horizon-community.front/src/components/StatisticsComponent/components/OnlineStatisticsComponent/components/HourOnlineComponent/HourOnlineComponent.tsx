import { Chart, PieSeries } from "@devexpress/dx-react-chart-material-ui";
import { Grid, Typography } from "@mui/material";
import useHourOnlineComponent from "./useHourOnlineComponent";

const HourOnlineComponent = ({ ...props }) => {
  const { isLoading, totalPlayers, getFakeHourOnline } = useHourOnlineComponent();

  return (
    <Grid container spacing={2} {...props}>
      <Grid item xs={12} md={9}>
        <Chart data={getFakeHourOnline}>
          <PieSeries valueField="onlineCount" argumentField="hour" />
        </Chart>
      </Grid>
      <Grid item xs={12} md={3}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h5" fontWeight={700} align="center">
              Current online
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" align="center">
              {totalPlayers} players
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HourOnlineComponent;
