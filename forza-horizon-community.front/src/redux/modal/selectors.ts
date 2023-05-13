import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const modalStateSelector = ({ modal }: RootState) => modal;

export const addManufactureSelector = createSelector(
  modalStateSelector,
  ({ isAddManufactureOpen }) => ({ isAddManufactureOpen }),
);

export const addCarTypeSelector = createSelector(modalStateSelector, ({ isAddCarTypeOpen }) => ({
  isAddCarTypeOpen,
}));
