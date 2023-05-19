import { globalStyles } from "@/styles";
import { Box, Typography } from "@mui/material";
import { baseTheme } from "../constants";
import { IInfiniteScrollEndComponent } from "./types";

const InfiniteScrollEndComponent = ({ text }: IInfiniteScrollEndComponent) => {
  return (
    <Box sx={globalStyles.centeredColumnFlexContainer}>
      <Typography variant="textTitle" color={baseTheme.palette.primary.main}>
        {text}
      </Typography>
    </Box>
  );
};

export default InfiniteScrollEndComponent;
