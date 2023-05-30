import * as Yup from "yup";

export const validationScheme = Yup.object({
  model: Yup.string()
    .max(64, "Model should be no longer than 64 charactres")
    .required("Please, enter a car model"),
  year: Yup.number()
    .min(1900, "Year should be between 1900 and 2100")
    .max(2100, "Year should be between 1900 and 2100")
    .required("Please, enter the year"),
  price: Yup.number()
    .min(5000, "Price should be between 5,000 and 1,000,000,000")
    .max(1000000000, "Price should be between 5,000 and 1,000,000,000")
    .required("Please enter a price"),
  manufactureId: Yup.string().required("Please, select a manufacture"),
  carTypeId: Yup.string().required("Please, select a car type"),
});

export const initialValues = {
  model: "",
  year: 0,
  price: 0,
  manufactureId: "",
  carTypeId: "",
};
