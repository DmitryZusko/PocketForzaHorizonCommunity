import {
  carNamesSelector,
  designUploaderSelector,
  getCarNamesAsync,
  postDesignAsync,
  setDesignGallery,
  setDesignThumbnail,
  setIsDesignGalleryError,
  setIsDesignThumbnailError,
  useAppDispatch,
  useAppSelector,
  userSelector,
} from "@/redux";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo } from "react";
import { validationScheme } from "./constants";

export const useAddNewsDesignFormComponent = () => {
  const { isDesignThumbnailError, designThumbnail, isDesignGalleryError, designGallery } =
    useAppSelector(designUploaderSelector);

  const { carNames } = useAppSelector(carNamesSelector);
  const { user } = useAppSelector(userSelector);

  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleSubmit = (values: {
    title: string;
    description: string;
    forzaShareCode: string;
    selectedCarId: string;
  }) => {
    if (isDesignThumbnailError || isDesignGalleryError) return;
    if (!designThumbnail) return;
    if (!user) return;

    dispatch(
      postDesignAsync({
        title: values.title,
        forzaShareCode: values.forzaShareCode,
        authorId: user.id,
        carId: values.selectedCarId,
        thumbnail: designThumbnail,
        gallery: designGallery,
        description: values.description,
      }),
    ).then((result) => {
      result.payload && router.push("/guides/designs");
      result.payload && cleanInput();
    });
  };

  const handleCancel = () => {
    cleanInput();
    router.push("/guides/designs");
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
    dispatch(getCarNamesAsync());
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
