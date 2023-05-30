import { sendResetPasswordMessageAsync, setIsForgotPasswordOpen, useAppDispatch } from "@/redux";
import { useFormik } from "formik";
import { validationScheme } from "./constants";

export const useEnterEmailFormComponent = () => {
  const dispatch = useAppDispatch();
  const handleSubmit = (values: { email: string }) => {
    dispatch(sendResetPasswordMessageAsync({ email: values.email })).then(
      (result) => result.payload && dispatch(setIsForgotPasswordOpen(false)),
    );
  };

  const handleCancel = () => {
    dispatch(setIsForgotPasswordOpen(false));
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationScheme,
    onSubmit: (values) => handleSubmit(values),
  });
  return { formik, handleCancel };
};
