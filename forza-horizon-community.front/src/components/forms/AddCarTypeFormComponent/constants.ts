import * as Yup from "yup";

export const validationScheme = Yup.object({
  carTypeName: Yup.string()
    .max(64, "Name should have no more than 64 characters")
    .required("Please, enter a car type name"),
});
