export type ErrorColor = "error" | "info";

export interface IImageUploaderComponentHook {
  threshold: number;
  maxImageSizeInMB: number;
  isRequired: boolean;
  handleErrorChange: (errorState: boolean) => void;
  handleImagesChange: (images: File[]) => void;
}

export interface IImageUploaderComponentProps extends IImageUploaderComponentHook {
  buttonText: string;
}
