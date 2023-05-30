import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const tuneStateSelector = ({ tune }: RootState) => tune;

export const tunesSelector = createSelector(
  tuneStateSelector,
  ({ entities, page, pageSize, totalEntities }) => ({
    entities,
    page,
    pageSize,
    totalEntities,
  }),
);

export const tuneLastestSelector = createSelector(
  tuneStateSelector,
  ({ isLoadingLatest, latestEntities }) => ({
    isLoadingLatest,
    latestEntities,
  }),
);

export const selectedTuneSelector = createSelector(
  tuneStateSelector,
  ({ isLoadingSelected, selectedEntity }) => ({ isLoadingSelected, selectedEntity }),
);
