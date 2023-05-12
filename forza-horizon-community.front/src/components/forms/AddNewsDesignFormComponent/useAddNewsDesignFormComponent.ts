import {
  carNamesSelector,
  designUploaderSelector,
  getCarNames,
  setDesignGallery,
  setDesignThumbnail,
  setIsDesignGalleryError,
  setIsDesignThumbnailError,
  useAppDispatch,
  useAppSelector,
} from "@/redux";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo } from "react";
import { validationScheme } from "./constants";

export const useAddNewsDesignFormComponent = () => {
  const { isDesignThumbnailError, designThumbnail, isDesignGalleryError, designGallery } =
    useAppSelector(designUploaderSelector);

  const { isLoadingCarNames, carNames } = useAppSelector(carNamesSelector);

  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleSubmit = (values: {
    title: string;
    description: string;
    forzaShareCode: string;
    selectedCarId: string;
  }) => {
    if (isDesignThumbnailError || isDesignGalleryError) return;
    console.log(values.title);
    console.log(values.forzaShareCode);
    console.log(values.selectedCarId);
    console.log(designThumbnail);
    console.log(designGallery);
    console.log(values.description);

    cleanInput();
  };

  const handleCancel = () => {
    cleanInput();
    router.push("/designs");
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      forzaShareCode: "",
      selectedCarId: "",
    },
    validationSchema: validationScheme,
    onSubmit: (values) => handleSubmit(values),
  });

  const autocompleteOptions = useMemo(() => {
    return carNames.map((item) => ({
      label: item.carName,
      id: item.id,
    }));
  }, [carNames]);

  const handleThumbnailChange = useCallback(
    (images: File[]) => {
      dispatch(setDesignThumbnail(images[0]));
    },
    [dispatch],
  );

  const handleGalleryChange = useCallback(
    (images: File[]) => {
      dispatch(setDesignGallery(images));
    },
    [dispatch],
  );

  const handleThumbnailErrorChange = useCallback(
    (value: boolean) => {
      dispatch(setIsDesignThumbnailError(value));
    },
    [dispatch],
  );

  const handleGalleryErrorChange = useCallback(
    (value: boolean) => {
      dispatch(setIsDesignGalleryError(value));
    },
    [dispatch],
  );

  const cleanInput = useCallback(() => {
    formik.values = formik.initialValues;
    dispatch(setIsDesignThumbnailError(false));
    dispatch(setIsDesignGalleryError(false));
    dispatch(setDesignThumbnail(undefined));
    dispatch(setDesignGallery([]));
  }, [formik, dispatch]);

  useEffect(() => {
    dispatch(getCarNames());
  }, [dispatch]);

  return {
    formik,
    autocompleteOptions,
    handleThumbnailErrorChange,
    handleGalleryErrorChange,
    handleThumbnailChange,
    handleGalleryChange,
    handleCancel,
  };
};
