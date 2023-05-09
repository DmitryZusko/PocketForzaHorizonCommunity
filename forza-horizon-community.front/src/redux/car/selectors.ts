import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const carStateSelector = ({ car }: RootState) => car;

export const paginatedCarsSelector = createSelector(
  carStateSelector,
  ({ isLoadingCars, cars, page, pageSize, totalEntities }) => ({
    isLoadingCars,
    cars,
    page,
    pageSize,
    totalEntities,
  }),
);

export const pagePropsSelector = createSelector(carStateSelector, ({ page, pageSize }) => ({
  page,
  pageSize,
}));
