import { CarTableComponent, FilterCarTableComponent } from "@/components";
import { NavBarBodyComponent } from "@/components/NavBarComponent/components";
import { Grid } from "@mui/material";

const CarTableContent = () => {
  return (
    <Grid container>
      <NavBarBodyComponent />
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
