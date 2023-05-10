import { CarTableComponent, FilterCarTableComponent } from "@/components";
import { Grid } from "@mui/material";

const CarTableContent = () => {
  return (
    <Grid container>
      <Grid item xs={3}>
        <FilterCarTableComponent />
      </Grid>
      <Grid item xs={9}>
        <CarTableComponent />
      </Grid>
    </Grid>
  );
};

export default CarTableContent;
