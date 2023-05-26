import {
  carTypesSelector,
  getCarTypesAsync,
  getManufacturesAsync,
  manufacturesSelector,
  postCarAsync,
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

  const { manufactures } = useAppSelector(manufacturesSelector);
  const { carTypes } = useAppSelector(carTypesSelector);

  const dispatch = useAppDispatch();

  const handleSubmit = (values: IFormikNewCarValues) => {
    if (thumbnail.current === undefined) return;

    dispatch(
      postCarAsync({
        model: values.model,
        year: values.year,
        price: values.price,
        image: thumbnail.current,
        manufactureId: values.manufactureId,
        carTypeId: values.carTypeId,
      }),
    ).then((result) => result.payload && dispatch(setIsAddCarOpen(false)));
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

  const handleThumbnailErrorChange = (value: boolean) => {
    thumbnailError.current = value;
  };

  useEffect(() => {
    if (carTypes.length) return;
    dispatch(getCarTypesAsync({}));
  }, [carTypes, dispatch]);

  useEffect(() => {
    if (manufactures.length) return;

    dispatch(getManufacturesAsync({}));
  }, [manufactures, dispatch]);

  return {
    formik,
    manufactureAutocompleteOptions,
    carTypesAutocompleteOptions,
    handleThumbnailChange,
    handleThumbnailErrorChange,
    handleCancel,
  };
};
