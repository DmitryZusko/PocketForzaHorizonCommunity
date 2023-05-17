import {
  baseTheme,
  GuidesComponent,
  ImageBackgroundComponent,
  NavBarComponent,
  PageFooterComponent,
} from "@/components";
import { globalStyles } from "@/styles";
import { Box, Container, Typography } from "@mui/material";
import { styles as pageStyles } from "../styles";

const GuidesPageContent = () => {
  return (
    <Box minHeight={"100vh"} sx={globalStyles.centeredColumnFlexContainer}>
      <NavBarComponent />
      <ImageBackgroundComponent>
        <Container sx={pageStyles.imageTextBlock}>
          <Typography variant="imageHeader" align="center">
            Explore Our Guides
          </Typography>
          <Typography variant="imageBody" align="center">
            We spend hours making the{" "}
            <Box component={"span"} color={baseTheme.palette.secondary.light}>
              fastest tunes
            </Box>{" "}
            and painting the{" "}
            <Box component={"span"} color={baseTheme.palette.secondary.light}>
              most beautiful liveries
            </Box>
          </Typography>
        </Container>
      </ImageBackgroundComponent>
      <GuidesComponent />
      <Box sx={pageStyles.footer}>
        <PageFooterComponent />
      </Box>
    </Box>
  );
};

export default GuidesPageContent;
