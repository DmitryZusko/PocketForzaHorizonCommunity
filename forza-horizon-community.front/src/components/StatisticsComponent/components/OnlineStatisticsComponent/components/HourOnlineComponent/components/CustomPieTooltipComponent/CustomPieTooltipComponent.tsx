import { Box, Typography } from "@mui/material";
import { styles } from "./styles";

const CustomPieTooltipComponent = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    //in case of numerating arrays starting from 0 first hour will be 0 AM. To prevent a such
    //error a displayed hour should be +1
    const labelText =
      payload[0].name <= 13 ? `${payload[0].name + 1} AM` : `${payload[0].name - 11} PM`;
    return (
      <Box sx={styles.outerBox}>
        <Typography variant="smallText">
          {labelText}:{" "}
          <Typography component="span" variant="smallBoldText">
            {payload[0].value}
          </Typography>{" "}
          players
        </Typography>
      </Box>
    );
  }

  return null;
};

export default CustomPieTooltipComponent;
