import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const designStateSelector = ({ design }: RootState) => design;

export const latestDesignsSelector = createSelector(
  designStateSelector,
  ({ isLoadingLatest, latestDesigns }) => ({
    isLoadingLatest,
    latestDesigns,
  }),
);
