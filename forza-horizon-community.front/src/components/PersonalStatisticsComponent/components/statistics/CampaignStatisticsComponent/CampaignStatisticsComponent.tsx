import { Box, BoxProps } from "@mui/material";
import { BoxItemComponent } from "../../BoxItemComponent";
import { styles } from "../styles";
import { useCampaignStatisticsComponent } from "./useCampaignStatisticsComponent";

const CampaignStatisticsComponent = (props?: BoxProps) => {
  const { data } = useCampaignStatisticsComponent();
  return (
    <Box sx={styles.outerContainer} {...props}>
      {data.map((item, index) => (
        <BoxItemComponent key={item.header} header={item.header} body={item.body} index={index} />
      ))}
    </Box>
  );
};

export default CampaignStatisticsComponent;
