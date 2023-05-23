import {
  carTypesSelector,
  getCarTypesAsync,
  postCarTypeAsync,
  setIsAddCarTypeOpen,
  useAppDispatch,
  useAppSelector,
} from "@/redux";
import { useFormik } from "formik";
import { validationScheme } from "./constants";
import { useCallback, useEffect } from "react";
import { showToast } from "@/utilities";

export const useAddCarTypeFormComponent = () => {
  const { carTypes } = useAppSelector(carTypesSelector);

  const dispatch = useAppDispatch();

  const handleSubmit = useCallback(
    (values: { carTypeName: string }) => {
      if (carTypes.find((c) => c.name === values.carTypeName)) {
        showToast.showError("Car Type with a such name is already existing");
        return;
      }

      dispatch(postCarTypeAsync({ carTypeName: values.carTypeName })).then(
        (result) => result.payload && dispatch(setIsAddCarTypeOpen(false)),
      );
    },
    [carTypes, dispatch],
  );

  const handleCancel = useCallback(() => {
    dispatch(setIsAddCarTypeOpen(false));
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      carTypeName: "",
    },
    validationSchema: validationScheme,
    onSubmit: (values) => handleSubmit(values),
  });

  useEffect(() => {
    if (carTypes.length) return;
    dispatch(getCarTypesAsync({}));
  }, [carTypes, dispatch]);

  return { formik, handleCancel };
};
