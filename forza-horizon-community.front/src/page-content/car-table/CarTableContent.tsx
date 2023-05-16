import {
  baseTheme,
  CarTableComponent,
  FilterCarTableComponent,
  ImageBackgroundComponent,
  NavBarComponent,
} from "@/components";
import { Box, Grid, Typography } from "@mui/material";
import { styles as pageStyles } from "../styles";

const CarTableContent = () => {
  return (
    <Box sx={pageStyles.outerBlock}>
      <NavBarComponent />
      <ImageBackgroundComponent>
        <Box sx={pageStyles.imageTextBlock}>
          <Typography variant="imageHeader">Explore in-game cars</Typography>
          <Typography variant="imageBody">
            All available cars are{" "}
            <Box component="span" color={baseTheme.palette.secondary.main}>
              represented here
            </Box>
          </Typography>
        </Box>
      </ImageBackgroundComponent>
      <Grid container>
        <Grid item xs={2}>
          <FilterCarTableComponent />
        </Grid>
        <Grid item xs={10}>
          <CarTableComponent />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CarTableContent;
