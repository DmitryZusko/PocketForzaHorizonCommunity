import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const settingsStateSelector = ({ settings }: RootState) => settings;

export const themeModeSelector = createSelector(settingsStateSelector, ({ themeMode }) => ({
  themeMode,
}));
