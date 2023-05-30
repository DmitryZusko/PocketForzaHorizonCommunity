import { globalStyles } from "@/styles";
import { enumFormater } from "@/utilities";
import { Container, Grid, Typography } from "@mui/material";
import { AspirationType, baseTheme, EngineType, TiresCompoundType } from "../constants";
import { ITuneCardBodyComponentProps } from "./types";

const TuneCardBodyComponent = ({
  engineType,
  aspirationType,
  tiresCompound,
}: ITuneCardBodyComponentProps) => {
  return (
    <Container sx={globalStyles.centeredRowFlexContainer}>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Typography variant="textBody" color={baseTheme.palette.primary.main}>
            Engine Type:
          </Typography>
        </Grid>
        <Grid item xs={6} textAlign="center">
          <Typography variant="textBody">
            {enumFormater.getValueByStringKey(engineType, EngineType)}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="textBody" color={baseTheme.palette.primary.main}>
            Aspiration:
          </Typography>
        </Grid>
        <Grid item xs={6} textAlign="center">
          <Typography variant="textBody">
            {enumFormater.getValueByStringKey(aspirationType, AspirationType)}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="textBody" color={baseTheme.palette.primary.main}>
            Tires Compount:
          </Typography>
        </Grid>
        <Grid item xs={6} textAlign="center">
          <Typography variant="textBody">
            {enumFormater.getValueByStringKey(tiresCompound, TiresCompoundType)}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TuneCardBodyComponent;
