import CarTableComponent from "@/components/CarTableComponent/CarTableComponent";
import FilterCarTableComponent from "@/components/FilterCarTableComponent/FilterCarTableComponent";
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
