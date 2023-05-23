import {
  carNamesSelector,
  getCarNamesAsync,
  postTuneAsync,
  useAppDispatch,
  useAppSelector,
  userSelector,
} from "@/redux";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo } from "react";
import { initialValues, validationScheme } from "./constants";
import { IFormikNewTuneValues } from "./types";

export const useAddNewTuneFormComponent = () => {
  const { isLoadingCarNames, carNames } = useAppSelector(carNamesSelector);
  const { user } = useAppSelector(userSelector);

  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleSubmit = (values: IFormikNewTuneValues) => {
    if (!user) return;

    dispatch(
      postTuneAsync({
        title: values.title,
        forzaShareCode: values.forzaShareCode,
        authorId: user.id,
        carId: values.selectedCarId,
        engineDescription: values.engineDescription,
        engine: values.engine,
        aspiration: values.aspiration,
        intake: values.intake,
        ignition: values.ignition,
        displacement: values.displacement,
        exhaust: values.exhaust,
        handlingDescription: values.handlingDescription,
        brakes: values.brakes,
        suspension: values.suspension,
        antiRollBars: values.antiRollBars,
        rollCage: values.rollCage,
        drivetrainDescription: values.drivetrainDescription,
        clutch: values.clutch,
        transmission: values.transmission,
        differential: values.differential,
        tiresDescription: values.tiresDescription,
        compound: values.compound,
        frontTireWidth: values.frontTireWidth,
        rearTireWidth: values.rearTireWidth,
        frontTrackWidth: values.frontTrackWidth,
        rearTrackWidth: values.rearTrackWidth,
      }),
    ).then((result) => {
      result.payload && router.push("/guides/tunes");
      result.payload && cleanInput();
    });
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
    dispatch(getCarNamesAsync());
  }, [dispatch]);

  return { formik, autocompleteOptions, handleCancel };
};
