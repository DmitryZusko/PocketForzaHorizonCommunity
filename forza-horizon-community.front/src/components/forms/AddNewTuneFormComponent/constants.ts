import * as Yup from "yup";

const defaultSparePartRequiredMessage = "Please, select a spare part";
const defaultDescriptionMessage = "Description should be no more than 511 characters long";

export const validationScheme = Yup.object({
  title: Yup.string()
    .min(3, "Title should be at least 3 characters long")
    .max(64, "Title should be no more than 64 characters long")
    .required("Please, enter a title"),
  forzaShareCode: Yup.string()
    .length(11, "Please, enter a valid share code")
    .matches(/\d{3}\s\d{3}\s\d{3}/g, "Please, enter a valid share code")
    .required("Please, enter a share code"),
  selectedCarId: Yup.string().required("Please, select a car"),
  engineDescription: Yup.string().max(511, defaultDescriptionMessage),
  engine: Yup.string().required(defaultSparePartRequiredMessage),
  aspiration: Yup.string().required(defaultSparePartRequiredMessage),
  intake: Yup.string().required(defaultSparePartRequiredMessage),
  ignition: Yup.string().required(defaultSparePartRequiredMessage),
  displacement: Yup.string().required(defaultSparePartRequiredMessage),
  exhaust: Yup.string().required(defaultSparePartRequiredMessage),
  handlingDescription: Yup.string().max(511, defaultDescriptionMessage),
  brakes: Yup.string().required(defaultSparePartRequiredMessage),
  suspension: Yup.string().required(defaultSparePartRequiredMessage),
  antiRollBars: Yup.string().required(defaultSparePartRequiredMessage),
  rollCage: Yup.string().required(defaultSparePartRequiredMessage),
  drivetrainDescription: Yup.string().max(511, defaultDescriptionMessage),
  clutch: Yup.string().required(defaultSparePartRequiredMessage),
  transmission: Yup.string().required(defaultSparePartRequiredMessage),
  differential: Yup.string().required(defaultSparePartRequiredMessage),
  tiresDescription: Yup.string().max(511, defaultDescriptionMessage),
  compound: Yup.string().required(defaultSparePartRequiredMessage),
  frontTireWidth: Yup.string().required(defaultSparePartRequiredMessage),
  rearTireWidth: Yup.string().required(defaultSparePartRequiredMessage),
  frontTrackWidth: Yup.string().required(defaultSparePartRequiredMessage),
  rearTrackWidth: Yup.string().required(defaultSparePartRequiredMessage),
});

export const initialValues = {
  title: "",
  forzaShareCode: "",
  selectedCarId: "",
  engineDescription: "",
  engine: "",
  aspiration: "",
  intake: "",
  ignition: "",
  displacement: "",
  exhaust: "",
  handlingDescription: "",
  brakes: "",
  suspension: "",
  antiRollBars: "",
  rollCage: "",
  drivetrainDescription: "",
  clutch: "",
  transmission: "",
  differential: "",
  tiresDescription: "",
  compound: "",
  frontTireWidth: "",
  rearTireWidth: "",
  frontTrackWidth: "",
  rearTrackWidth: "",
};
