import * as Yup from "yup";

export const validationScheme = Yup.object({
  manufactureName: Yup.string()
    .max(64, "Name should have no more than 64 characters")
    .required("Please, enter a manufacture name"),
  country: Yup.string()
    .max(64, "Country should have no more than 64 characters")
    .required("Please, enter a country"),
});
