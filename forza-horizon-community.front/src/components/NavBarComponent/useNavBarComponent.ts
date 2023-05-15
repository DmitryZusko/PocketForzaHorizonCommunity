import { useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { styles } from "./styles";

export const useNavBarComponent = () => {
  const [navBarTheme, setNavBarTheme] = useState(styles.solidNavBar);
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setNavBarTheme(styles.transparentNavBar);
      }
      if (window.scrollY < 100) {
        setNavBarTheme(styles.solidNavBar);
      }
    });
  });

  return { isTablet, navBarTheme };
};
