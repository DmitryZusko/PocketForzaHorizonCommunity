import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const carStateSelector = ({ car }: RootState) => car;

export const paginatedCarsSelector = createSelector(
  carStateSelector,
  ({ isLoadingCars, cars, totalEntities, totalPages }) => ({
    isLoadingCars,
    cars,
    totalEntities,
    totalPages,
  }),
);
