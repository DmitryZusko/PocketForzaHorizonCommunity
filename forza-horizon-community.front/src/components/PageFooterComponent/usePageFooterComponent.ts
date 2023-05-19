import { useTheme } from "@mui/material";
import { useMemo } from "react";
import { styles } from "./styles";

export const usePageFooterComponent = () => {
  const theme = useTheme();

  const outerBoxStyles = useMemo(() => {
    const style = styles.outerContainer;
    style.backgroundColor = theme.palette.specificBackground.main;
    return style;
  }, [theme]);

  return { outerBoxStyles };
};
