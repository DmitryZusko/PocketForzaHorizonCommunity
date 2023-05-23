import { resetPasswordAsync, useAppDispatch } from "@/redux";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { validationScheme } from "./constants";

export const useResetPasswordFormComponent = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const getParamsPromQuery = () => {
    const query = router.query;
    return { userId: query.u?.toString() || "", resetToken: query.t?.toString() || "" };
  };

  const handleSubmit = (values: { newPassword: string; confirmPassword: string }) => {
    const queryParams = getParamsPromQuery();
    dispatch(
      resetPasswordAsync({
        userId: queryParams.userId,
        resetToken: queryParams.resetToken,
        password: values.newPassword,
      }),
    ).then((result) => result.payload && router.push("/"));
  };

  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: validationScheme,
    onSubmit: (values) => handleSubmit(values),
  });
  return { formik };
};
