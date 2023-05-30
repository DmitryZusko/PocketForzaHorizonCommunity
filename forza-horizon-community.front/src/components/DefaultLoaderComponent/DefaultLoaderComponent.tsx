import { globalStyles } from "@/styles";
import { Box, BoxProps, CircularProgress } from "@mui/material";

const DefaultLoaderComponent = (props?: BoxProps) => {
  return (
    <Box sx={globalStyles.centeredColumnFlexContainer} {...props}>
      <CircularProgress />
    </Box>
  );
};

export default DefaultLoaderComponent;
