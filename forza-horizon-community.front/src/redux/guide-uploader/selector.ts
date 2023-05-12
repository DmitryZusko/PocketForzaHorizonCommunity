import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const guideUploaderState = ({ guideUploader }: RootState) => guideUploader;

export const designUploaderSelector = createSelector(
  guideUploaderState,
  ({ isDesignThumbnailError, designThumbnail, isDesignGalleryError, designGallery }) => ({
    isDesignThumbnailError,
    designThumbnail,
    isDesignGalleryError,
    designGallery,
  }),
);
