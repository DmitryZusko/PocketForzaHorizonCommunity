import { BoxProps } from "@mui/material";

export interface IDrivetrainDetailsComponentProps {
  drivetrainDescription: string | undefined;
  clutch: string | undefined;
  transmission: string | undefined;
  differential: string | undefined;
  props?: BoxProps;
}
