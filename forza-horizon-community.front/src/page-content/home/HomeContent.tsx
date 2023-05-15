import {
  baseTheme,
  CustomAccordionComponent,
  ImageBackgroundComponent,
  LatestGuidesComponent,
  NavBarComponent,
  NewsBlockComponent,
  ScrollUpFabComponent,
  StatisticsComponent,
} from "@/components";
import { Box, Container, Fade, Typography } from "@mui/material";
import { styles } from "./styles";
import { styles as pageStyles } from "../styles";

import { useHomeContent } from "./useHomeContent";

const HomeContent = () => {
  const {
    newsAccordionInView,
    guidesAccordionInView,
    statisticsAccordionInView,
    newsAccordionRef,
    guidesAccordionRef,
    statisticsAccordionRef,
  } = useHomeContent();
  return (
    <Box sx={pageStyles.outerBlock}>
      <NavBarComponent />
      <ImageBackgroundComponent>
        <Container sx={styles.imageTextBlock}>
          <Typography variant="imageHeader" align="center" sx={styles.textBlock}>
            Welcome to the Horizon Community!
          </Typography>
          <Typography variant="imageBody" align="center" sx={styles.textBlock}>
            Here you can explore all available in-game{" "}
            <Box component="span" color={baseTheme.palette.secondary.light}>
              cars and discover variouse
            </Box>{" "}
            tunes and designs created{" "}
            <Box component="span" color={baseTheme.palette.secondary.light}>
              by our team
            </Box>
          </Typography>
          <Typography variant="imageBody" align="center" sx={styles.textBlock}>
            Enjoy Yourself!
          </Typography>
        </Container>
      </ImageBackgroundComponent>

      <Box sx={styles.accordionBox} ref={newsAccordionRef}>
        <Fade
          in={newsAccordionInView}
          timeout={750}
          mountOnEnter
          easing={baseTheme.transitions.easing.sharp}
        >
          <CustomAccordionComponent title="News" isExpandedByDefault={true}>
            <NewsBlockComponent />
          </CustomAccordionComponent>
        </Fade>
      </Box>
      <Box sx={styles.accordionBox} ref={guidesAccordionRef}>
        <Fade
          in={guidesAccordionInView}
          timeout={750}
          mountOnEnter
          easing={baseTheme.transitions.easing.sharp}
        >
          <CustomAccordionComponent title="Our Latest Guides" isExpandedByDefault={true}>
            <LatestGuidesComponent />
          </CustomAccordionComponent>
        </Fade>
      </Box>
      <Box sx={styles.accordionBox} ref={statisticsAccordionRef}>
        <Fade
          in={statisticsAccordionInView}
          timeout={750}
          mountOnEnter
          easing={baseTheme.transitions.easing.sharp}
        >
          <CustomAccordionComponent
            title="In-Game Statistics"
            isExpandedByDefault={false}
            unmountOnExit={true}
          >
            <StatisticsComponent />
          </CustomAccordionComponent>
        </Fade>
      </Box>
      <ScrollUpFabComponent />
    </Box>
  );
};

export default HomeContent;
