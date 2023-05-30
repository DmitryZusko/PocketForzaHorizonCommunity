import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const designStateSelector = ({ design }: RootState) => design;

export const latestDesignsSelector = createSelector(
  designStateSelector,
  ({ isLoadingLatest, latestEntities }) => ({
    isLoadingLatest,
    latestEntities,
  }),
);

export const designsSelector = createSelector(
  designStateSelector,
  ({ isLoadingEntities, entities, page, pageSize, totalEntities }) => ({
    isLoadingEntities,
    entities,
    page,
    pageSize,
    totalEntities,
  }),
);

export const selectedDesignSelector = createSelector(
  designStateSelector,
  ({ isLoadingSelected, selectedEntity }) => ({ isLoadingSelected, selectedEntity }),
);
