import { BarSeries, Chart } from "@devexpress/dx-react-chart-material-ui";
import { Box } from "@mui/material";
import { useWeeklyOnlineComponent } from "./useWeeklyOnlineComponent";

const WeeklyOnlineComponent = ({ ...props }) => {
  const { getFakeWeeklyOnline } = useWeeklyOnlineComponent();
  return (
    <Box {...props}>
      <Chart data={getFakeWeeklyOnline}>
        <BarSeries valueField="onlineCount" argumentField="date" />
      </Chart>
    </Box>
  );
};

export default WeeklyOnlineComponent;
