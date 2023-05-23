import {
  ImageBackgroundComponent,
  NavBarComponent,
  PageFooterComponent,
  PageNotFoundComponent,
  ScrollUpFabComponent,
} from "@/components";
import { globalStyles } from "@/styles";
import { Box, Container, Typography } from "@mui/material";
import { styles as pageStyles } from "../styles";

const PageNotFoundContent = () => {
  return (
    <Box minHeight={"100vh"} sx={globalStyles.centeredColumnFlexContainer}>
      <NavBarComponent />
      <ImageBackgroundComponent>
        <Container sx={pageStyles.imageTextBlock}>
          <Typography variant="imageHeader" align="center">
            Error 404
          </Typography>
          <Typography variant="imageBody" align="center">
            Page Not Found
          </Typography>
        </Container>
      </ImageBackgroundComponent>
      <PageNotFoundComponent />
      <ScrollUpFabComponent />
      <Box sx={pageStyles.footer}>
        <PageFooterComponent />
      </Box>
    </Box>
  );
};

export default PageNotFoundContent;
