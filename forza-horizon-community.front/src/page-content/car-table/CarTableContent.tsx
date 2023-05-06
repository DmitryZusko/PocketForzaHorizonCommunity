import CarTableComponent from "@/components/CarTableComponent/CarTableComponent";
import FilterCarTableComponent from "@/components/FilterCarTablecomponent/FilterCarTablecomponent";
import { Grid } from "@mui/material";

export default function CarTableContent() {
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
}
