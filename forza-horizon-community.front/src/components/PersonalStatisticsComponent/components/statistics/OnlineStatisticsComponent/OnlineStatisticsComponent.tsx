import { Box, BoxProps } from "@mui/material";
import { BoxItemComponent } from "../../BoxItemComponent";
import { styles } from "../styles";
import { useOnlineStatisticsComponent } from "./useOnlineStatisticsComponent";

const OnlineStatisticsComponent = (props?: BoxProps) => {
  const { data } = useOnlineStatisticsComponent();
  return (
    <Box sx={styles.outerContainer} {...props}>
      {data.map((item, index) => (
        <BoxItemComponent key={item.header} header={item.header} body={item.body} index={index} />
      ))}
    </Box>
  );
};

export default OnlineStatisticsComponent;
