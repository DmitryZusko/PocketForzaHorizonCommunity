import * as Yup from "yup";

export const validationScheme = Yup.object({
  title: Yup.string()
    .min(3, "Title should be at least 3 characters long")
    .max(64, "Title should be no more than 64 characters long")
    .required("Please, enter a title"),
  description: Yup.string().max(255, "Description should be no more than 255 characters long"),
  forzaShareCode: Yup.string()
    .length(11, "Please, enter a valid share code")
    .matches(/\d{3}\s\d{3}\s\d{3}/g, "Please, enter a valid share code")
    .required("Please, enter a share code"),
  selectedCarId: Yup.string().required("Please, select a car"),
});
