import { carNamesSelector, getCarNames, useAppDispatch, useAppSelector } from "@/redux";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo } from "react";
import { initialValues, validationScheme } from "./constants";
import { IFormikNewTuneValues } from "./types";

export const useAddNewTuneFormComponent = () => {
  const { isLoadingCarNames, carNames } = useAppSelector(carNamesSelector);

  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleSubmit = (values: IFormikNewTuneValues) => {
    console.log(values.title);
    console.log(values.forzaShareCode);
    console.log(values.selectedCarId);
    console.log(values.engineDescription);
    console.log(values.engine);
    console.log(values.aspiration);
    console.log(values.intake);
    console.log(values.ignition);
    console.log(values.displacement);
    console.log(values.exhaust);
    console.log(values.handlingDescription);
    console.log(values.brakes);
    console.log(values.suspension);
    console.log(values.antiRollBars);
    console.log(values.rollCage);
    console.log(values.drivetrainDescription);
    console.log(values.clutch);
    console.log(values.transmission);
    console.log(values.differential);
    console.log(values.tiresDescription);
    console.log(values.compound);
    console.log(values.frontTireWidth);
    console.log(values.rearTireWidth);
    console.log(values.frontTrackWidth);
    console.log(values.rearTrackWidth);

    cleanInput();
  };

  const handleCancel = () => {
    cleanInput();
    router.push("/guides/tunes");
  };

  const formik = useFormik({
    validateOnChange: false,
    initialValues: initialValues,
    validationSchema: validationScheme,
    onSubmit: (values) => handleSubmit(values),
  });

  const autocompleteOptions = useMemo(() => {
    return carNames.map((item) => ({
      label: item.carName,
      id: item.id,
    }));
  }, [carNames]);

  const cleanInput = useCallback(() => {
    formik.values = initialValues;
  }, [formik]);

  useEffect(() => {
    dispatch(getCarNames());
  }, [dispatch]);

  return { formik, autocompleteOptions, handleCancel };
};
