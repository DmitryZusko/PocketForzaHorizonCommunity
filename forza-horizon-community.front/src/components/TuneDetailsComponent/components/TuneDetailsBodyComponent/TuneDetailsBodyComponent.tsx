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
        <Image alt={"EngineIcon"} src="/EnumIcons/EngineIcon.png" width={100} height={100} />
        <Typography>
          {" "}
          {enumConverter.convertTo(selectedTune?.engineType || "", EngineType)}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Image
          alt={"AspirationIcon"}
          src="/EnumIcons/AspirationIcon.png"
          width={100}
          height={100}
        />
        <Typography>
          {" "}
          {enumConverter.convertTo(selectedTune?.aspirationType || "", AspirationType)}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Image alt={"IntakeIcon"} src="/EnumIcons/IntakeIcon.png" width={100} height={100} />
        <Typography> {enumConverter.convertTo(selectedTune?.intake || "", IntakeType)}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Image alt={"IgnitionIcon"} src="/EnumIcons/IgnitionIcon.png" width={100} height={100} />
        <Typography>
          {" "}
          {enumConverter.convertTo(selectedTune?.ignition || "", IgnitionType)}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Image
          alt={"DisplacementIcon"}
          src="/EnumIcons/DisplacementIcon.png"
          width={100}
          height={100}
        />
        <Typography>
          {" "}
          {enumConverter.convertTo(selectedTune?.displacement || "", DisplacementType)}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Image alt={"ExhaustIcon"} src="/EnumIcons/ExhaustIcon.png" width={100} height={100} />
        <Typography>
          {" "}
          {enumConverter.convertTo(selectedTune?.exhaust || "", ExhaustType)}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>{selectedTune?.handlingDescription}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Image alt={"BrakesIcon"} src="/EnumIcons/BrakesIcon.png" width={100} height={100} />
        <Typography> {enumConverter.convertTo(selectedTune?.brakes || "", BrakesType)}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Image
          alt={"SuspensionIcon"}
          src="/EnumIcons/SuspensionIcon.png"
          width={100}
          height={100}
        />
        <Typography>
          {" "}
          {enumConverter.convertTo(selectedTune?.suspension || "", SuspensionType)}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Image
          alt={"AntiRollBarsIcon"}
          src="/EnumIcons/AntiRollBarsIcon.png"
          width={100}
          height={100}
        />
        <Typography>
          {" "}
          {enumConverter.convertTo(selectedTune?.antiRollBars || "", AntiRollBarsType)}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Image alt={"RollCageIcon"} src="/EnumIcons/RollCageIcon.png" width={100} height={100} />
        <Typography>
          {" "}
          {enumConverter.convertTo(selectedTune?.rollCage || "", RollCageType)}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>{selectedTune?.drivetrainDescription}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Image alt={"ClutchIcon"} src="/EnumIcons/ClutchIcon.png" width={100} height={100} />
        <Typography> {enumConverter.convertTo(selectedTune?.clutch || "", ClutchType)}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Image
          alt={"TransmissionIcon"}
          src="/EnumIcons/TransmissionIcon.png"
          width={100}
          height={100}
        />
        <Typography>
          {" "}
          {enumConverter.convertTo(selectedTune?.transmission || "", TransmissionType)}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Image
          alt={"DifferentialIcon"}
          src="/EnumIcons/DifferentialIcon.png"
          width={100}
          height={100}
        />
        <Typography>
          {" "}
          {enumConverter.convertTo(selectedTune?.differential || "", DifferentialType)}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>{selectedTune?.tiresDescription}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Image
          alt={"TiresCompoundIcon"}
          src="/EnumIcons/TiresCompoundIcon.png"
          width={100}
          height={100}
        />
        <Typography>
          {" "}
          {enumConverter.convertTo(selectedTune?.tiresCompound || "", TiresCompoundType)}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Image alt={"TireWidthIcon"} src="/EnumIcons/TiresWidthIcon.png" width={100} height={100} />
        <Typography>
          {" "}
          {enumConverter.convertTo(selectedTune?.frontTireWidth || "", TiresWidthType)}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Image alt={"TireWidthIcon"} src="/EnumIcons/TiresWidthIcon.png" width={100} height={100} />
        <Typography>
          {" "}
          {enumConverter.convertTo(selectedTune?.rearTireWidth || "", TiresWidthType)}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Image
          alt={"frontTrackWidthIcon"}
          src="/EnumIcons/FrontTrackWidthIcon.png"
          width={100}
          height={100}
        />
        <Typography>
          {" "}
          {enumConverter.convertTo(selectedTune?.frontTrackWidth || "", TrackWidthType)}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Image
          alt={"rearTrackWidthIcon"}
          src="/EnumIcons/RearTrackWidthIcon.png"
          width={100}
          height={100}
        />
        <Typography>
          {" "}
          {enumConverter.convertTo(selectedTune?.rearTrackWidth || "", TrackWidthType)}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default TuneDetailsBodyComponent;
