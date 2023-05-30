import {
  AdminCarButtonsComponent,
  baseTheme,
  CarTableComponent,
  FilterCarTableComponent,
  ImageBackgroundComponent,
  longerAnimationDuration,
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
import {
  AddCarModalComponent,
  AddCarTypeModalComponent,
  AddManufactureModalComponent,
} from "@/components/modals";

const CarTableContent = () => {
  const {
    isDesktop,
    isFilterMenuOpen,
    isAddCarOpen,
    isAddManufactureOpen,
    isAddCarTypeOpen,
    handleFilterMenuOpen,
    handleFilterMenuClose,
  } = useCarTableContent();
  return (
    <Box sx={globalStyles.centeredColumnFlexContainer}>
      {isAddCarOpen && <AddCarModalComponent />}
      {isAddCarTypeOpen && <AddCarTypeModalComponent />}
      {isAddManufactureOpen && <AddManufactureModalComponent />}
      <NavBarComponent />
      <ImageBackgroundComponent>
        <Box sx={pageStyles.imageTextBlock}>
          <Typography variant="imageHeader" align="center">
            Explore in-game cars
          </Typography>
          <Typography variant="imageBody" align="center">
            All available cars are{" "}
            <Box component="span" color={baseTheme.palette.secondary.light}>
              represented here
            </Box>
          </Typography>
        </Box>
      </ImageBackgroundComponent>
      <AdminCarButtonsComponent />
      <Grid container>
        {!isDesktop && (
          <Button
            onClick={handleFilterMenuOpen}
            variant="contained"
            size="large"
            sx={styles.filterButton}
          >
            <MenuIcon fontSize="large" sx={styles.filterButtonIcon} />
          </Button>
        )}
        {isDesktop ? (
          <Slide in={true} direction={"right"} timeout={longerAnimationDuration}>
            <Grid item lg={2}>
              <FilterCarTableComponent />
            </Grid>
          </Slide>
        ) : (
          <Drawer
            anchor="left"
            open={isFilterMenuOpen}
            onClose={handleFilterMenuClose}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <FilterCarTableComponent />
          </Drawer>
        )}
        <Slide in={true} direction={"right"} timeout={longerAnimationDuration}>
          <Grid item xs={12} lg={10}>
            <CarTableComponent />
          </Grid>
        </Slide>
      </Grid>
      <ScrollUpFabComponent />
      <Box sx={pageStyles.footer}>
        <PageFooterComponent />
      </Box>
    </Box>
  );
};

export default CarTableContent;
