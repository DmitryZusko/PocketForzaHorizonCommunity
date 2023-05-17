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
import { Box, Button, Container, Drawer, Grid, Slide, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styles as pageStyles } from "../styles";
import { styles } from "./styles";
import { useCarTableContent } from "./useCarTableContent";
import {
  AddCarModalComponent,
  AddCarTypeModalComponent,
  AddManufactureModalComponent,
} from "@/components/modals";
import { TimeToLeave, Factory, Category } from "@mui/icons-material/";

const CarTableContent = () => {
  const {
    isDesktop,
    isFilterMenuOpen,
    isAddCarOpen,
    isAddManufactureOpen,
    isAddCarTypeOpen,
    handleFilterMenuOpen,
    handleFilterMenuClose,
    handleAddCarModalOpen,
    handleAddManufactureModalOpen,
    handleAddCarTypeModalOpen,
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
            <Box component="span" color={baseTheme.palette.secondary.main}>
              represented here
            </Box>
          </Typography>
        </Box>
      </ImageBackgroundComponent>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: baseTheme.spacing(10),
        }}
      >
        <Button startIcon={<TimeToLeave />} variant="contained" onClick={handleAddCarModalOpen}>
          {isDesktop && "Add Car"}
        </Button>
        <Button startIcon={<Factory />} variant="contained" onClick={handleAddManufactureModalOpen}>
          {isDesktop && "Add Manufacture"}
        </Button>
        <Button startIcon={<Category />} variant="contained" onClick={handleAddCarTypeModalOpen}>
          {isDesktop && "Add Car Type"}
        </Button>
      </Container>
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
          <Slide in={true} direction={"right"} timeout={750}>
            <Grid item lg={2}>
              <FilterCarTableComponent />
            </Grid>
          </Slide>
        ) : (
          <Drawer anchor="left" open={isFilterMenuOpen} onClose={handleFilterMenuClose}>
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
