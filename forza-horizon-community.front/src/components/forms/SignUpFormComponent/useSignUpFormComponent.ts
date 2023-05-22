import { setIsSignUpOpen, signUpAsync, useAppDispatch } from "@/redux";
import { showToast } from "@/utilities";
import { useFormik } from "formik";
import { validationScheme } from "./constants";

export const useSignUpFormComponent = () => {
  const dispatch = useAppDispatch();
  const handleSubmit = (values: { email: string; username: string; password: string }) => {
    showToast.showPromise(
      dispatch(
        signUpAsync({ email: values.email, username: values.username, password: values.password }),
      ),
      "Creating a new account...",
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
      confirmPassword: "",
    },
    validationSchema: validationScheme,
    onSubmit: (values) => handleSubmit(values),
  });
  return { formik, handleSubmit, handleCancel };
};
