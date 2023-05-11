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

export const designsSelector = createSelector(
  designStateSelector,
  ({ isLoadingDesigns, designs, pageSize, totalEntities }) => ({
    isLoadingDesigns,
    designs,
    pageSize,
    totalEntities,
  }),
);

export const selectedDesignSelector = createSelector(
  designStateSelector,
  ({ isLoadingSelected, selectedDesign }) => ({ isLoadingSelected, selectedDesign }),
);
