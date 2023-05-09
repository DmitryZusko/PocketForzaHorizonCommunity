import enumConverter from "@/utilities/enum-converter";
import { Container, Grid, Typography } from "@mui/material";
import { AspirationType } from "../constants/enums/AspirationType";
import { EngineType } from "../constants/enums/EngineType";
import { TiresCompoundType } from "../constants/enums/TiresCompoundType";
import { ITuneCardBodyComponentProps } from "./types";

export const TuneCardBodyComponent = ({
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
          <Typography variant="h6">{enumConverter.convertTo(engineType, EngineType)}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" fontWeight={700}>
            Aspiration:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">
            {enumConverter.convertTo(aspirationType, AspirationType)}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" fontWeight={700}>
            Tires Compount:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">
            {enumConverter.convertTo(tiresCompound, TiresCompoundType)}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
