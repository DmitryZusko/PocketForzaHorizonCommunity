import { Grid } from "@mui/material";
import {
  DrivetrainDetailsComponent,
  EngineDetailsComponent,
  HandlingDetailsComponent,
  TiresDetailsComponent,
} from "./components";
import { ITuneDetailsBodyComponentProps } from "./types";

const TuneDetailsBodyComponent = ({ selectedEntity, ...props }: ITuneDetailsBodyComponentProps) => {
  return (
    <Grid container {...props}>
      <Grid item xs={12}>
        <EngineDetailsComponent
          engineDescription={selectedEntity?.engineDescription}
          engineType={selectedEntity?.engineType}
          aspirationType={selectedEntity?.aspirationType}
          intake={selectedEntity?.intake}
          ignition={selectedEntity?.ignition}
          displacement={selectedEntity?.displacement}
          exhaust={selectedEntity?.exhaust}
        />
      </Grid>

      <Grid item xs={12}>
        <HandlingDetailsComponent
          handlingDescription={selectedEntity?.handlingDescription}
          brakes={selectedEntity?.brakes}
          suspension={selectedEntity?.suspension}
          antiRollBars={selectedEntity?.antiRollBars}
          rollCage={selectedEntity?.rollCage}
        />
      </Grid>

      <Grid item xs={12}>
        <DrivetrainDetailsComponent
          drivetrainDescription={selectedEntity?.drivetrainDescription}
          clutch={selectedEntity?.clutch}
          transmission={selectedEntity?.transmission}
          differential={selectedEntity?.differential}
        />
      </Grid>

      <Grid item xs={12}>
        <TiresDetailsComponent
          tiresDescription={selectedEntity?.tiresDescription}
          tiresCompound={selectedEntity?.tiresCompound}
          frontTireWidth={selectedEntity?.frontTireWidth}
          rearTireWidth={selectedEntity?.rearTireWidth}
          frontTrackWidth={selectedEntity?.frontTireWidth}
          rearTrackWidth={selectedEntity?.rearTrackWidth}
        />
      </Grid>
    </Grid>
  );
};

export default TuneDetailsBodyComponent;
