import fileSizeConverter from "@/utilities/file-size-converter";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { ErrorColor, IImageUploaderComponentHook } from "./types";

export const useImageUploaderComponent = ({
  isRequired,
  maxImageSizeInMB,
  threshold,
  handleErrorChange,
  handleImagesChange,
}: IImageUploaderComponentHook) => {
  const [images, setImages] = useState<File[]>([]);
  const [preview, setPreview] = useState<string[] | undefined>();
  const [displayError, setDisplayError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<{
    errorColor: ErrorColor;
    errorMessage: string;
  }>({ errorColor: "error", errorMessage: "" });

  const manageErrors = useCallback(
    (value: boolean) => {
      if (isRequired) {
        handleErrorChange(value);
        setDisplayError(value);

        setErrorMessage({
          errorColor: "error",
          errorMessage: `Please, select up to ${threshold} images`,
        });

        return;
      }

      setDisplayError(value);

      setErrorMessage({
        errorColor: "info",
        errorMessage: `You can select up to ${threshold} images`,
      });
    },
    [isRequired, threshold, handleErrorChange],
  );

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    if (e.target.files.length > threshold) return;

    let newImages: File[] = [];

    for (let index = 0; index < e.target.files.length; index++) {
      if (e.target.files[index].size > fileSizeConverter.fromMegaByteToByte(maxImageSizeInMB)) {
        setErrorMessage({
          errorColor: "error",
          errorMessage: `File shpuld be up to ${maxImageSizeInMB} MB`,
        });
        return;
      }
      newImages.push(e.target.files[index]);
    }

    setImages(newImages);
    handleImagesChange(newImages);
  };

  useEffect(() => {
    if (images.length < 1 || images.length > threshold) {
      manageErrors(true);
    } else {
      manageErrors(false);
    }
  }, [images, threshold, manageErrors]);

  useEffect(() => {
    if (images.length < 1) {
      setPreview(undefined);
    }

    const urls = images?.map((image) => URL.createObjectURL(image));

    setPreview(urls);

    return () => {
      urls?.forEach((url) => {
        URL.revokeObjectURL(url);
      });
    };
  }, [images]);
  return { errorMessage, displayError, preview, handleImageUpload };
};
