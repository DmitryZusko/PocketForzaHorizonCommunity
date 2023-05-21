import {
  setIsSignInOpen,
  setIsSignUpOpen,
  themeModeSelector,
  useAppDispatch,
  useAppSelector,
} from "@/redux";

export const useAuthButtonsComponent = () => {
  const { themeMode } = useAppSelector(themeModeSelector);
  const dispatch = useAppDispatch();
  const handleSignInClick = () => {
    dispatch(setIsSignInOpen(true));
  };
  const handleSignUpClick = () => {
    dispatch(setIsSignUpOpen(true));
  };
  return { themeMode, handleSignInClick, handleSignUpClick };
};
