import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const tuneStateSelector = ({ tune }: RootState) => tune;

export const tuneLastestSelector = createSelector(
  tuneStateSelector,
  ({ isLoadingLatest, latestTunes }) => ({
    isLoadingLatest,
    latestTunes,
  }),
);
