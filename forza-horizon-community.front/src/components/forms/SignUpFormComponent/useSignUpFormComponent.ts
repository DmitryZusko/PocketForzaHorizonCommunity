import { AccessRole } from "@/components/constants";
import { registerFunctionUserAsync, setIsSignUpOpen, signUpAsync, useAppDispatch } from "@/redux";
import { useFormik } from "formik";
import { validationScheme } from "./constants";
import { ISignUpFormComponentHook } from "./types";

export const useSignUpFormComponent = ({
  signUpRole = AccessRole.user,
}: ISignUpFormComponentHook) => {
  const dispatch = useAppDispatch();
  const handleSubmit = (values: { email: string; username: string; password: string }) => {
    if (signUpRole !== AccessRole.user) {
      dispatch(
        registerFunctionUserAsync({
          email: values.email,
          username: values.username,
          password: values.password,
          role: signUpRole,
        }),
      ).then((result) => result.payload && formik.resetForm());
      return;
    }

    dispatch(
      signUpAsync({
        email: values.email,
        username: values.username,
        password: values.password,
      }),
    ).then((result) => result.payload && dispatch(setIsSignUpOpen(false)));
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
  return { formik, handleCancel };
};
