import { ThemeMode } from "@/components";
import { createSlice } from "@reduxjs/toolkit";
import { ActionWithPayload, ISettingsState } from "../types";

const initialState: ISettingsState = {
  themeMode: "light",
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setThemeMode: (state, { payload }: ActionWithPayload<ThemeMode>) => {
      state.themeMode = payload;
    },
    toogleThemeMode: (state) => {
      state.themeMode = state.themeMode === "light" ? "dark" : "light";
      console.log(state.themeMode);
    },
  },
});

export const { setThemeMode, toogleThemeMode } = settingsSlice.actions;

export default settingsSlice.reducer;
