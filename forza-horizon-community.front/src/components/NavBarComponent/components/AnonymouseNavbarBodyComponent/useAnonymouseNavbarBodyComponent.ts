import { useMediaQuery, useTheme } from "@mui/material";

export const useAnonymouseNavbarBodyComponent = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up("md"));

  return { isTablet };
};
