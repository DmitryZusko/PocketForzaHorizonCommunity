import { setIsSignInOpen, signInSelector, useAppDispatch, useAppSelector } from "@/redux";
import { useCallback } from "react";

export const useSignInModalComponent = () => {
  const { isSignInOpen } = useAppSelector(signInSelector);

  const dispatch = useAppDispatch();

  const handleClose = useCallback(() => {
    dispatch(setIsSignInOpen(false));
  }, [dispatch]);
  return { isSignInOpen, handleClose };
};
