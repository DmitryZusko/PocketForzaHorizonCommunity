import {
  setIsAddCarOpen,
  setIsAddCarTypeOpen,
  setIsAddManufactureOpen,
  useAppDispatch,
} from "@/redux";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import { useCallback } from "react";

export const useAdminCarButtonsComponent = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  const dispatch = useAppDispatch();

  const handleAddCar = useCallback(() => {
    dispatch(setIsAddCarOpen(true));
  }, [dispatch]);

  const handleAddManufacture = useCallback(() => {
    dispatch(setIsAddManufactureOpen(true));
  }, [dispatch]);

  const handleAddCarType = useCallback(() => {
    dispatch(setIsAddCarTypeOpen(true));
  }, [dispatch]);

  return { isDesktop, handleAddCar, handleAddManufacture, handleAddCarType };
};
