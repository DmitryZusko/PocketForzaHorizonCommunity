import {
  ImageBackgroundComponent,
  InternalServerErrorComponent,
  NavBarComponent,
  PageFooterComponent,
  ScrollUpFabComponent,
} from "@/components";
import { Box, Container, Typography } from "@mui/material";
import { styles as pageStyles } from "../styles";
import { globalStyles } from "@/styles";

const InternalServerErrorContent = () => {
  return (
    <Box minHeight={"100vh"} sx={globalStyles.centeredColumnFlexContainer}>
      <NavBarComponent />
      <ImageBackgroundComponent>
        <Container sx={pageStyles.imageTextBlock}>
          <Typography variant="imageHeader" align="center">
            Error 500
          </Typography>
          <Typography variant="imageBody" align="center">
            Page Not Found
          </Typography>
        </Container>
      </ImageBackgroundComponent>
      <InternalServerErrorComponent />
      <ScrollUpFabComponent />
      <Box sx={pageStyles.footer}>
        <PageFooterComponent />
      </Box>
    </Box>
  );
};

export default InternalServerErrorContent;
