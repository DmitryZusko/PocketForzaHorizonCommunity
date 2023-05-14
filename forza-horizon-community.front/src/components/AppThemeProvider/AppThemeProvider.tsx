import { Theme, ThemeProvider } from "@mui/material";
import { PropsWithChildren, useState } from "react";
import { baseTheme } from "../constants";

const AppThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>(baseTheme);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppThemeProvider;
