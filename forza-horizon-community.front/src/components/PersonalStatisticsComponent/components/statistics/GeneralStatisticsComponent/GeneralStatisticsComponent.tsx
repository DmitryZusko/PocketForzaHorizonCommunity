import { Box, BoxProps } from "@mui/material";
import { BoxItemComponent } from "../../BoxItemComponent";
import { styles } from "../styles";
import { useGeneralStatisticsComponent } from "./useGeneralStatisticsComponent";

const GeneralStatisticsComponent = (props?: BoxProps) => {
  const { data } = useGeneralStatisticsComponent();
  return (
    <Box sx={styles.outerContainer} {...props}>
      {data.map((item, index) => (
        <BoxItemComponent key={item.header} header={item.header} body={item.body} index={index} />
      ))}
    </Box>
  );
};

export default GeneralStatisticsComponent;
