import { setThemeMode, themeModeSelector, useAppDispatch, useAppSelector } from "@/redux";
import { createTheme, useMediaQuery } from "@mui/material";
import deepmerge from "deepmerge";
import { useEffect, useMemo } from "react";
import { baseTheme, baseThemeOptions, darkThemeOptions } from "../constants";

export const useAppThemeProvider = () => {
  const { themeMode } = useAppSelector(themeModeSelector);
  const isDarkPrefered = useMediaQuery("(prefers-color-scheme: dark");

  const dispatch = useAppDispatch();

  const theme = useMemo(
    () =>
      themeMode === "light"
        ? baseTheme
        : createTheme(deepmerge(baseThemeOptions, darkThemeOptions)),
    [themeMode],
  );

  useEffect(() => {
    if (isDarkPrefered !== (themeMode === "dark")) {
      dispatch(setThemeMode(isDarkPrefered ? "dark" : "light"));
    }
  }, []);

  return { theme };
};
