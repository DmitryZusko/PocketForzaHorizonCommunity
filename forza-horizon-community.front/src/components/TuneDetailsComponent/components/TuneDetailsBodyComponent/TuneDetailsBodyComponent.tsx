import { Grid } from "@mui/material";
import {
  DrivetrainDetailsComponent,
  EngineDetailsComponent,
  HandlingDetailsComponent,
  TiresDetailsComponent,
} from "./components";
import { ITuneDetailsBodyComponentProps } from "./types";

const TuneDetailsBodyComponent = ({ selectedTune, ...props }: ITuneDetailsBodyComponentProps) => {
  return (
    <Grid container {...props}>
      <Grid item xs={12}>
        <EngineDetailsComponent
          engineDescription={selectedTune?.engineDescription}
          engineType={selectedTune?.engineType}
          aspirationType={selectedTune?.aspirationType}
          intake={selectedTune?.intake}
          ignition={selectedTune?.ignition}
          displacement={selectedTune?.displacement}
          exhaust={selectedTune?.exhaust}
        />
      </Grid>

      <Grid item xs={12}>
        <HandlingDetailsComponent
          handlingDescription={selectedTune?.handlingDescription}
          brakes={selectedTune?.brakes}
          suspension={selectedTune?.suspension}
          antiRollBars={selectedTune?.antiRollBars}
          rollCage={selectedTune?.rollCage}
        />
      </Grid>

      <Grid item xs={12}>
        <DrivetrainDetailsComponent
          drivetrainDescription={selectedTune?.drivetrainDescription}
          clutch={selectedTune?.clutch}
          transmission={selectedTune?.transmission}
          differential={selectedTune?.differential}
        />
      </Grid>

      <Grid item xs={12}>
        <TiresDetailsComponent
          tiresDescription={selectedTune?.tiresDescription}
          tiresCompound={selectedTune?.tiresCompound}
          frontTireWidth={selectedTune?.frontTireWidth}
          rearTireWidth={selectedTune?.rearTireWidth}
          frontTrackWidth={selectedTune?.frontTireWidth}
          rearTrackWidth={selectedTune?.rearTrackWidth}
        />
      </Grid>
    </Grid>
  );
};

export default TuneDetailsBodyComponent;
