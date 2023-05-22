import { setIsSignInOpen, signInSelector, useAppDispatch, useAppSelector } from "@/redux";
import { useCallback, useState } from "react";

export const useSignInModalComponent = () => {
  const { isSignInOpen } = useAppSelector(signInSelector);
  const [isResetPassword, setIsResetPassword] = useState(false);

  const dispatch = useAppDispatch();

  const handleClose = useCallback(() => {
    dispatch(setIsSignInOpen(false));
    setIsResetPassword(false);
  }, [dispatch]);

  const handleForgotPasswordClick = () => {
    setIsResetPassword(true);
  };
  return { isSignInOpen, isResetPassword, handleClose, handleForgotPasswordClick };
};
