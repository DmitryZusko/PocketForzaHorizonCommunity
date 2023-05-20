import { setIsSignInOpen, signInAsync, useAppDispatch } from "@/redux";
import { useFormik } from "formik";
import { validationScheme } from "./constants";

export const useSingInFormComponent = () => {
  const dispatch = useAppDispatch();
  const handleSubmit = (values: { email: string; password: string }) => {
    dispatch(signInAsync({ email: values.email, password: values.password }));
    dispatch(setIsSignInOpen(false));
  };

  const handleCancel = () => {
    dispatch(setIsSignInOpen(false));
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationScheme,
    onSubmit: (values) => handleSubmit(values),
  });
  return { formik, handleSubmit, handleCancel };
};
