import {
  logOut,
  logStateSelector,
  signInSelector,
  signUpSelector,
  themeModeSelector,
  toogleThemeMode,
  useAppDispatch,
  useAppSelector,
} from "@/redux";
import { googleLogout } from "@react-oauth/google";
import { useCallback, useEffect, useState } from "react";
import { styles } from "./styles";

export const useNavBarComponent = () => {
  const [navBarTheme, setNavBarTheme] = useState(styles.solidNavBar);

  const { themeMode } = useAppSelector(themeModeSelector);
  const { isLogged } = useAppSelector(logStateSelector);
  const { isSignInOpen } = useAppSelector(signInSelector);
  const { isSignUpOpen } = useAppSelector(signUpSelector);

  const dispatch = useAppDispatch();

  const handleThemeModeChange = () => {
    dispatch(toogleThemeMode());
  };

  const handleLogOut = useCallback(() => {
    dispatch(logOut());
    googleLogout();
  }, [dispatch]);

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

  return {
    isSignInOpen,
    isSignUpOpen,
    isLogged,
    navBarTheme,
    themeMode,
    handleThemeModeChange,
    handleLogOut,
  };
};
