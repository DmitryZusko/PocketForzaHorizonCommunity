import { ITune } from "./Tune";

export interface ITuneFullInfo extends ITune {
  engineDescription: string;
  intake: string;
  ignition: string;
  displacement: string;
  exhaust: string;

  handlingDescription: string;
  brakes: string;
  suspension: string;
  antiRollBars: string;
  rollCage: string;

  drivetrainDescription: string;
  clutch: string;
  transmission: string;
  differential: string;

  tiresDescription: string;
  frontTireWidth: string;
  rearTireWidth: string;
  frontTrackWidth: string;
  rearTrackWidth: string;
}
