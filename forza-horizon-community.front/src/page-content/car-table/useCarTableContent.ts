import { useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";

export const useCarTableContent = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return { isDesktop, isOpen, handleOpen, handleClose };
};
