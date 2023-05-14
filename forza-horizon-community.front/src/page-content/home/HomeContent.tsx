import {
  CustomAccordionComponent,
  ImageBackgroundComponent,
  LatestGuidesComponent,
  NavBarComponent,
  NewsBlockComponent,
  ScrollUpFabComponent,
} from "@/components";
import { Box, Container, Typography } from "@mui/material";
import { styles } from "./styles";

const HomeContent = () => {
  return (
    <Box sx={styles.outerBlock}>
      <NavBarComponent />
      <ImageBackgroundComponent>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="imageHeader" align="center" sx={styles.textBlock}>
            Welcome to the Horizon Community!
          </Typography>
          <Typography variant="imageBody" align="center" sx={styles.textBlock}>
            Here you can explore all available in-game{" "}
            <Box component="span" color="white">
              cars and discover variouse
            </Box>{" "}
            tunes and designs created{" "}
            <Box component="span" color="white">
              by our team
            </Box>
          </Typography>
          <Typography variant="imageBody" align="center" sx={styles.textBlock}>
            Enjoy Yourself!
          </Typography>
        </Container>
      </ImageBackgroundComponent>
      <CustomAccordionComponent title="News" isExpandedByDefault={true}>
        <NewsBlockComponent />
      </CustomAccordionComponent>
      <CustomAccordionComponent title="Our Latest Guides" isExpandedByDefault={true}>
        <LatestGuidesComponent />
      </CustomAccordionComponent>
      <ScrollUpFabComponent />
    </Box>
  );
};

export default HomeContent;
