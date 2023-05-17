import {
  baseTheme,
  ImageBackgroundComponent,
  NavBarComponent,
  PageFooterComponent,
  TuneListComponent,
} from "@/components";
import { globalStyles } from "@/styles";
import { Box, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import { styles as pageStyles } from "../styles";

const TuneListContent = () => {
  return (
    <Box minHeight={"100vh"} sx={globalStyles.centeredColumnFlexContainer}>
      <NavBarComponent />
      <ImageBackgroundComponent>
        <Container sx={pageStyles.imageTextBlock}>
          <Typography variant="imageHeader" align="center">
            Discover New Car Tunes
          </Typography>
          <Typography variant="imageBody" align="center">
            All tunes are created by{" "}
            <Box component="div" color={baseTheme.palette.secondary.main}>
              our community
            </Box>
          </Typography>
        </Container>
      </ImageBackgroundComponent>
      <TuneListComponent />
      <Box sx={pageStyles.footer}>
        <PageFooterComponent />
      </Box>
    </Box>
  );
};

export default TuneListContent;
