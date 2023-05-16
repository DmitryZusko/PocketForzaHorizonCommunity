import {
  baseTheme,
  CarTableComponent,
  FilterCarTableComponent,
  ImageBackgroundComponent,
  NavBarComponent,
  PageFooterComponent,
  ScrollUpFabComponent,
} from "@/components";
import { globalStyles } from "@/styles";
import { Box, Button, Drawer, Grid, Slide, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styles as pageStyles } from "../styles";
import { styles } from "./styles";
import { useCarTableContent } from "./useCarTableContent";

const CarTableContent = () => {
  const { isDesktop, isOpen, handleOpen, handleClose } = useCarTableContent();
  return (
    <Box sx={globalStyles.centeredColumnFlexContainer}>
      <NavBarComponent />
      <ImageBackgroundComponent>
        <Box sx={pageStyles.imageTextBlock}>
          <Typography variant="imageHeader" align="center">
            Explore in-game cars
          </Typography>
          <Typography variant="imageBody" align="center">
            All available cars are{" "}
            <Box component="span" color={baseTheme.palette.secondary.main}>
              represented here
            </Box>
          </Typography>
        </Box>
      </ImageBackgroundComponent>
      <Grid container>
        {!isDesktop && (
          <Button onClick={handleOpen} variant="contained" size="large" sx={styles.filterButton}>
            <MenuIcon fontSize="large" sx={styles.filterButtonIcon} />
          </Button>
        )}
        {isDesktop ? (
          <Slide in={true} direction={"right"} timeout={750}>
            <Grid item lg={2}>
              <FilterCarTableComponent />
            </Grid>
          </Slide>
        ) : (
          <Drawer anchor="left" open={isOpen} onClose={handleClose}>
            <FilterCarTableComponent />
          </Drawer>
        )}
        <Slide in={true} direction={"right"} timeout={750}>
          <Grid item xs={12} lg={10}>
            <CarTableComponent />
          </Grid>
        </Slide>
      </Grid>
      <ScrollUpFabComponent />
      <PageFooterComponent />
    </Box>
  );
};

export default CarTableContent;
