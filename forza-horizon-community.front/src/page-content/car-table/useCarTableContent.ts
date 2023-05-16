import {
  addModalsSelector,
  setIsAddCarOpen,
  setIsAddCarTypeOpen,
  setIsAddManufactureOpen,
  useAppDispatch,
  useAppSelector,
} from "@/redux";
import { useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";

export const useCarTableContent = () => {
  const { isAddCarOpen, isAddManufactureOpen, isAddCarTypeOpen } =
    useAppSelector(addModalsSelector);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  const theme = useTheme();
  const dispatch = useAppDispatch();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  const handleAddCarModalOpen = () => {
    dispatch(setIsAddCarOpen(true));
  };

  const handleAddManufactureModalOpen = () => {
    dispatch(setIsAddManufactureOpen(true));
  };

  const handleAddCarTypeModalOpen = () => {
    dispatch(setIsAddCarTypeOpen(true));
  };

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
    handleAddCarModalOpen,
    handleAddManufactureModalOpen,
    handleAddCarTypeModalOpen,
  };
};
