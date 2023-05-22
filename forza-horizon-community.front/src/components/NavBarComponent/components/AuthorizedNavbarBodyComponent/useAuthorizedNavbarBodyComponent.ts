import { useMediaQuery, useTheme } from "@mui/material";

export const useAuthorizedNavbarBodyComponent = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up("md"));

  return { isTablet };
};
