import { globalStyles } from "@/styles";
import { Box, CircularProgress } from "@mui/material";

const DefaultLoaderComponent = ({ ...props }) => {
  return (
    <Box sx={globalStyles.centeredColumnFlexContainer} {...props}>
      <CircularProgress />
    </Box>
  );
};

export default DefaultLoaderComponent;
