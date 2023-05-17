import {
  baseTheme,
  DesginListComponent,
  ImageBackgroundComponent,
  NavBarComponent,
  PageFooterComponent,
} from "@/components";
import { globalStyles } from "@/styles";
import { Box, Container, Typography } from "@mui/material";
import { styles as pageStyles } from "../styles";

const DesignListContent = () => {
  return (
    <Box minHeight={"100vh"} sx={globalStyles.centeredColumnFlexContainer}>
      <NavBarComponent />
      <ImageBackgroundComponent>
        <Container sx={pageStyles.imageTextBlock}>
          <Typography variant="imageHeader" align="center">
            Discover New Car Liveries
          </Typography>
          <Typography variant="imageBody" align="center">
            All designs are created by{" "}
            <Box component="span" color={baseTheme.palette.secondary.main}>
              our community
            </Box>
          </Typography>
        </Container>
      </ImageBackgroundComponent>
      <DesginListComponent />
      <Box sx={pageStyles.footer}>
        <PageFooterComponent />
      </Box>
    </Box>
  );
};

export default DesignListContent;
