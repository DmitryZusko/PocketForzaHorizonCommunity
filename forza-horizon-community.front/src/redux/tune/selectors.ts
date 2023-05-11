import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const tuneStateSelector = ({ tune }: RootState) => tune;

export const tunesSelector = createSelector(
  tuneStateSelector,
  ({ latestTunes, tunes, page, pageSize, totalEntities }) => ({
    latestTunes,
    tunes,
    page,
    pageSize,
    totalEntities,
  }),
);

export const tuneLastestSelector = createSelector(
  tuneStateSelector,
  ({ isLoadingLatest, latestTunes }) => ({
    isLoadingLatest,
    latestTunes,
  }),
);

export const selectedTuneSelector = createSelector(
  tuneStateSelector,
  ({ isLoadingSelected, selectedTune }) => ({ isLoadingSelected, selectedTune }),
);
