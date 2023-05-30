import { ThemeProvider } from "@mui/material";
import { PropsWithChildren } from "react";
import { useAppThemeProvider } from "./useAppThemeProvider";

const AppThemeProvider = ({ children }: PropsWithChildren) => {
  const { theme } = useAppThemeProvider();

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppThemeProvider;
