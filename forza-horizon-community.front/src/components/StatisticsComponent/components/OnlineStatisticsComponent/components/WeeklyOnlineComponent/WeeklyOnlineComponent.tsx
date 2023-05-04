import { BarSeries, Chart } from "@devexpress/dx-react-chart-material-ui";
import { Box } from "@mui/material";
import useWeeklyOnlineComponent from "./useWeeklyOnlineComponent";

const WeeklyOnlineComponent = () => {
  const { getFakeWeeklyOnline } = useWeeklyOnlineComponent();
  return (
    <Box>
      <Chart data={getFakeWeeklyOnline}>
        <BarSeries valueField="onlineCount" argumentField="date" />
      </Chart>
    </Box>
  );
};

export default WeeklyOnlineComponent;
