import { googleSignInAsync, setIsSignInOpen, signInAsync, useAppDispatch } from "@/redux";
import { CredentialResponse } from "@react-oauth/google";
import { useFormik } from "formik";
import { useCallback } from "react";
import { validationScheme } from "./constants";

export const useSingInFormComponent = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (values: { email: string; password: string }) => {
    dispatch(signInAsync({ email: values.email, password: values.password }));
    dispatch(setIsSignInOpen(false));
  };

  const handleGoogleSignIn = useCallback(
    (credentialResponse: CredentialResponse) => {
      dispatch(googleSignInAsync({ googleToken: credentialResponse.credential || "" }));
      dispatch(setIsSignInOpen(false));
    },
    [dispatch],
  );

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
  return { formik, handleGoogleSignIn, handleCancel };
};
