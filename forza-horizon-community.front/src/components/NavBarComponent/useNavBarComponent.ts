import {
  logStateSelector,
  themeModeSelector,
  toogleThemeMode,
  useAppDispatch,
  useAppSelector,
} from "@/redux";
import { useEffect, useState } from "react";
import { styles } from "./styles";

export const useNavBarComponent = () => {
  const [navBarTheme, setNavBarTheme] = useState(styles.solidNavBar);

  const { themeMode } = useAppSelector(themeModeSelector);
  const { isLogged } = useAppSelector(logStateSelector);

  const dispatch = useAppDispatch();

  const handleThemeModeChange = () => {
    dispatch(toogleThemeMode());
  };

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

  return { isLogged, navBarTheme, themeMode, handleThemeModeChange };
};
