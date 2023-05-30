import { baseTheme } from "@/components/constants";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import { PieChart, Pie, Tooltip } from "recharts";
import { CustomPieTooltipComponent, SelectedSectorComponent } from "./components";
import { styles } from "./styles";
import { IHourOnlineComponentProps } from "./types";
import { useHourOnlineComponent } from "./useHourOnlineComponent";

const HourOnlineComponent = ({ totalPlayers, ...props }: IHourOnlineComponentProps) => {
  const { activeIndex, getFakeHourOnline, handleHover, handleHoverEnd } = useHourOnlineComponent({
    totalPlayers,
  });

  return (
    <Container sx={styles.outerContainer}>
      <Typography variant="textTitle">24-Hour Statistics</Typography>
      <PieChart width={400} height={400}>
        <Pie
          activeIndex={activeIndex}
          activeShape={<SelectedSectorComponent />}
          data={getFakeHourOnline}
          dataKey={"onlineCount"}
          innerRadius={20}
          fill={baseTheme.palette.primary.main}
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverEnd}
        />
        <Tooltip content={<CustomPieTooltipComponent />} />
      </PieChart>
    </Container>
  );
};

export default HourOnlineComponent;
