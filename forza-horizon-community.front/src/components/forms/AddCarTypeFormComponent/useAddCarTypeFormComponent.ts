import {
  carTypesSelector,
  postCarType,
  setIsAddCarTypeOpen,
  useAppDispatch,
  useAppSelector,
} from "@/redux";
import { useFormik } from "formik";
import { validationScheme } from "./constants";
import { useCallback } from "react";
import { showToast } from "@/utilities";

export const useAddCarTypeFormComponent = () => {
  const { carTypes } = useAppSelector(carTypesSelector);

  const dispatch = useAppDispatch();

  const handleSubmit = useCallback(
    (values: { carTypeName: string }) => {
      if (carTypes.find((c) => c.name === values.carTypeName)) {
        showToast.showError("Car Type with a sych name is already existing");
        return;
      }

      dispatch(postCarType({ carTypeName: values.carTypeName }));
      dispatch(setIsAddCarTypeOpen(false));
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
  return { formik, handleCancel };
};
