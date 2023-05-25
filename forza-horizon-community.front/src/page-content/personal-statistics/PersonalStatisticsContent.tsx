import {
  baseTheme,
  ImageBackgroundComponent,
  NavBarComponent,
  PageFooterComponent,
  PersonalStatisticsComponent,
  ScrollUpFabComponent,
} from "@/components";
import { globalStyles } from "@/styles";
import { Box, Container, Typography } from "@mui/material";
import { styles as pageStyles } from "../styles";

const PersonalStatisticsContent = () => {
  return (
    <Box minHeight={"100vh"} sx={globalStyles.centeredColumnFlexContainer}>
      <NavBarComponent />
      <ImageBackgroundComponent>
        <Container sx={pageStyles.imageTextBlock}>
          <Typography variant="imageHeader" align="center">
            Explore Personal Statistics
          </Typography>
          <Typography variant="imageBody" align="center">
            Here you can find your{" "}
            <Box component={"span"} color={baseTheme.palette.secondary.light}>
              in-game achievements
            </Box>{" "}
          </Typography>
        </Container>
      </ImageBackgroundComponent>
      <Box width={"100%"}>
        <PersonalStatisticsComponent />
      </Box>
      <ScrollUpFabComponent />
      <Box sx={pageStyles.footer}>
        <PageFooterComponent />
      </Box>
    </Box>
  );
};

export default PersonalStatisticsContent;
