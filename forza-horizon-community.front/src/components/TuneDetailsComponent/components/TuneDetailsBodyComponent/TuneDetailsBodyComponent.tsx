import {
  AntiRollBarsType,
  AspirationType,
  BrakesType,
  ClutchType,
  DifferentialType,
  DisplacementType,
  EngineType,
  ExhaustType,
  IgnitionType,
  IntakeType,
  RollCageType,
  SuspensionType,
  TiresCompoundType,
  TiresWidthType,
  TrackWidthType,
  TransmissionType,
} from "@/components/constants";
import { enumConverter } from "@/utilities";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import { ITuneDetailsBodyComponentProps } from "./types";

const TuneDetailsBodyComponent = ({ selectedTune }: ITuneDetailsBodyComponentProps) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography>{selectedTune?.engineDescription}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Image alt={"EngineIcon"} src="/EngineIcon" width={100} height={100} />
        <Typography>
          {" "}
          {enumConverter.convertTo(selectedTune?.engineType || "", EngineType)}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Image alt={"AspirationIcon"} src="/AspirationIcon" width={100} height={100} />
        <Typography>
          {" "}
          {enumConverter.convertTo(selectedTune?.aspirationType || "", AspirationType)}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Image alt={"IntakeIcon"} src="/IntakeIcon" width={100} height={100} />
        <Typography> {enumConverter.convertTo(selectedTune?.intake || "", IntakeType)}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Image alt={"IgnitionIcon"} src="/IgnitionIcon" width={100} height={100} />
        <Typography>
          {" "}
          {enumConverter.convertTo(selectedTune?.ignition || "", IgnitionType)}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Image alt={"DisplacementIcon"} src="/DisplacementIcon" width={100} height={100} />
        <Typography>
          {" "}
          {enumConverter.convertTo(selectedTune?.displacement || "", DisplacementType)}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Image alt={"ExhaustIcon"} src="/ExhaustIcon" width={100} height={100} />
        <Typography>
          {" "}
          {enumConverter.convertTo(selectedTune?.exhaust || "", ExhaustType)}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>{selectedTune?.handlingDescription}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Image alt={"BrakesIcon"} src="/BrakesIcon" width={100} height={100} />
        <Typography> {enumConverter.convertTo(selectedTune?.brakes || "", BrakesType)}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Image alt={"SuspensionIcon"} src="/SuspensionIcon" width={100} height={100} />
        <Typography>
          {" "}
          {enumConverter.convertTo(selectedTune?.suspension || "", SuspensionType)}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Image alt={"AntiRollBarsIcon"} src="/AntiRollBarsIcon" width={100} height={100} />
        <Typography>
          {" "}
          {enumConverter.convertTo(selectedTune?.antiRollBars || "", AntiRollBarsType)}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Image alt={"RollCageIcon"} src="/RollCageIcon" width={100} height={100} />
        <Typography>
          {" "}
          {enumConverter.convertTo(selectedTune?.rollCage || "", RollCageType)}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>{selectedTune?.drivetrainDescription}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Image alt={"ClutchIcon"} src="/ClutchIcon" width={100} height={100} />
        <Typography> {enumConverter.convertTo(selectedTune?.clutch || "", ClutchType)}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Image alt={"TransmissionIcon"} src="/TransmissionIcon" width={100} height={100} />
        <Typography>
          {" "}
          {enumConverter.convertTo(selectedTune?.transmission || "", TransmissionType)}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Image alt={"DifferentialIcon"} src="/DifferentialIcon" width={100} height={100} />
        <Typography>
          {" "}
          {enumConverter.convertTo(selectedTune?.differential || "", DifferentialType)}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>{selectedTune?.tiresDescription}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Image alt={"TiresCompoundIcon"} src="/TiresCompoundIcon" width={100} height={100} />
        <Typography>
          {" "}
          {enumConverter.convertTo(selectedTune?.tiresCompound || "", TiresCompoundType)}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Image alt={"TireWidthIcon"} src="/TireWidthIcon" width={100} height={100} />
        <Typography>
          {" "}
          {enumConverter.convertTo(selectedTune?.frontTireWidth || "", TiresWidthType)}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Image alt={"TireWidthIcon"} src="/TireWidthIcon" width={100} height={100} />
        <Typography>
          {" "}
          {enumConverter.convertTo(selectedTune?.rearTireWidth || "", TiresWidthType)}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Image alt={"frontTrackWidthIcon"} src="/TrackWidthIcon" width={100} height={100} />
        <Typography>
          {" "}
          {enumConverter.convertTo(selectedTune?.frontTrackWidth || "", TrackWidthType)}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Image alt={"rearTrackWidthIcon"} src="/TrackWidthIcon" width={100} height={100} />
        <Typography>
          {" "}
          {enumConverter.convertTo(selectedTune?.rearTrackWidth || "", TrackWidthType)}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default TuneDetailsBodyComponent;
