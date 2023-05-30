import { addModalsSelector, useAppSelector } from "@/redux";
import { useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";

export const useCarTableContent = () => {
  const { isAddCarOpen, isAddManufactureOpen, isAddCarTypeOpen } =
    useAppSelector(addModalsSelector);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  const handleFilterMenuOpen = () => {
    setIsFilterMenuOpen(true);
  };

  const handleFilterMenuClose = () => {
    setIsFilterMenuOpen(false);
  };
  return {
    isDesktop,
    isFilterMenuOpen,
    isAddCarOpen,
    isAddManufactureOpen,
    isAddCarTypeOpen,
    handleFilterMenuOpen,
    handleFilterMenuClose,
  };
};
