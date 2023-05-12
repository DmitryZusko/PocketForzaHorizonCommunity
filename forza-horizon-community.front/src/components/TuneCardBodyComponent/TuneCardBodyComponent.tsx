import { enumFormater } from "@/utilities";
import { Container, Grid, Typography } from "@mui/material";
import { AspirationType, EngineType, TiresCompoundType } from "../constants";
import { ITuneCardBodyComponentProps } from "./types";

const TuneCardBodyComponent = ({
  engineType,
  aspirationType,
  tiresCompound,
}: ITuneCardBodyComponentProps) => {
  return (
    <Container sx={{ display: "flex", flexDirection: "column" }}>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Typography variant="h6" fontWeight={700}>
            Engine Type:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">
            {enumFormater.getValueByStringKey(engineType, EngineType)}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" fontWeight={700}>
            Aspiration:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">
            {enumFormater.getValueByStringKey(aspirationType, AspirationType)}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" fontWeight={700}>
            Tires Compount:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">
            {enumFormater.getValueByStringKey(tiresCompound, TiresCompoundType)}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TuneCardBodyComponent;
