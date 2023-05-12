import { createSlice } from "@reduxjs/toolkit";
import { ActionWithPayload, IGuideUploaderState } from "../types";

const initialState: IGuideUploaderState = {
  isDesignThumbnailError: false,
  designThumbnail: undefined,
  isDesignGalleryError: false,
  designGallery: [],
};

const guideUploaderSlice = createSlice({
  name: "guideUploader",
  initialState,
  reducers: {
    setIsDesignThumbnailError: (state, { payload }: ActionWithPayload<boolean>) => {
      state.isDesignThumbnailError = payload;
    },
    setIsDesignGalleryError: (state, { payload }: ActionWithPayload<boolean>) => {
      state.isDesignGalleryError = payload;
    },
    setDesignThumbnail: (state, { payload }: ActionWithPayload<File | undefined>) => {
      state.designThumbnail = payload;
    },
    setDesignGallery: (state, { payload }: ActionWithPayload<File[]>) => {
      state.designGallery = payload;
    },
  },
});

export const {
  setIsDesignThumbnailError,
  setIsDesignGalleryError,
  setDesignThumbnail,
  setDesignGallery,
} = guideUploaderSlice.actions;

export default guideUploaderSlice.reducer;
