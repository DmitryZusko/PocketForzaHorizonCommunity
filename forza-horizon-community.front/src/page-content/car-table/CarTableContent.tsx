import CarTableComponent from "@/components/CarTableComponent/CarTableComponent";
import { Grid } from "@mui/material";

export default function CarTableContent() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <CarTableComponent />
      </Grid>
    </Grid>
  );
}
