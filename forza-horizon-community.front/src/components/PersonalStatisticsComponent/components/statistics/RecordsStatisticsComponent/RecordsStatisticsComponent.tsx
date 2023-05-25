import { Box } from "@mui/material";
import { BoxItemComponent } from "../../BoxItemComponent";
import { styles } from "../styles";
import { useRecordsStatisticsComponent } from "./useRecordsStatisticsComponent";

const RecordsStatisticsComponent = () => {
  const { data } = useRecordsStatisticsComponent();
  return (
    <Box sx={styles.outerContainer}>
      {data.map((item, index) => (
        <BoxItemComponent key={item.header} header={item.header} body={item.body} index={index} />
      ))}
    </Box>
  );
};

export default RecordsStatisticsComponent;
