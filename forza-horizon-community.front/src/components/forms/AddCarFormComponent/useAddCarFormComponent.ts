import {
  carTypesSelector,
  getCarTypes,
  getManufactures,
  manufacturesSelector,
  postCar,
  setIsAddCarOpen,
  useAppDispatch,
  useAppSelector,
} from "@/redux";
import { useFormik } from "formik";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { initialValues, validationScheme } from "./constants";
import { IFormikNewCarValues } from "./types";

export const useAddCarFormComponent = () => {
  const thumbnail = useRef<File | undefined>(undefined);
  const thumbnailError = useRef<boolean>(false);

  const { isLoadingManufacture, manufactures } = useAppSelector(manufacturesSelector);
  const { isLoadingCarTypes, carTypes, totalCarTypes } = useAppSelector(carTypesSelector);

  const dispatch = useAppDispatch();

  const handleSubmit = (values: IFormikNewCarValues) => {
    if (thumbnail.current === undefined) return;

    console.log(values.carTypeId);
    console.log(values.manufactureId);
    console.log(values.model);
    console.log(values.price);
    console.log(values.year);

    dispatch(
      postCar({
        model: values.model,
        year: values.year,
        price: values.price,
        image: thumbnail.current,
        manufactureId: values.manufactureId,
        carTypeId: values.carTypeId,
      }),
    );
    handleCancel();
  };

  const handleCancel = () => {
    dispatch(setIsAddCarOpen(false));
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationScheme,
    onSubmit: (values) => handleSubmit(values),
  });

  const manufactureAutocompleteOptions = useMemo(() => {
    return manufactures.map((item) => ({
      label: item.name,
      id: item.id,
    }));
  }, [manufactures]);

  const carTypesAutocompleteOptions = useMemo(() => {
    return carTypes.map((item) => ({
      label: item.name,
      id: item.id,
    }));
  }, [carTypes]);

  const handleThumbnailChange = useCallback(
    (images: File[]) => {
      thumbnail.current = images[0];
    },
    [thumbnail],
  );

  const handleThumbnailErrorChange = useCallback((value: boolean) => {
    thumbnailError.current = value;
  }, []);

  useEffect(() => {
    dispatch(getManufactures({}));
    dispatch(getCarTypes({}));
  }, [dispatch]);

  return {
    formik,
    manufactureAutocompleteOptions,
    carTypesAutocompleteOptions,
    handleThumbnailChange,
    handleThumbnailErrorChange,
    handleCancel,
  };
};
