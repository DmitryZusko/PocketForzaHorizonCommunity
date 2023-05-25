import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";

export const useBoxItemComponent = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return { isDesktop };
};
