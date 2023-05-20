import { setIsSignUpOpen, signUpAsync, useAppDispatch } from "@/redux";
import { useFormik } from "formik";
import { validationScheme } from "./constants";

export const useSignUpFormComponent = () => {
  const dispatch = useAppDispatch();
  const handleSubmit = (values: { email: string; username: string; password: string }) => {
    dispatch(
      signUpAsync({ email: values.email, username: values.username, password: values.password }),
    );
    dispatch(setIsSignUpOpen(false));
  };

  const handleCancel = () => {
    dispatch(setIsSignUpOpen(false));
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    validationSchema: validationScheme,
    onSubmit: (values) => handleSubmit(values),
  });
  return { formik, handleSubmit, handleCancel };
};
