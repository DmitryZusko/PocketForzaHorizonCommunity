import { setIsSignUpOpen, signUpSelector, useAppDispatch, useAppSelector } from "@/redux";
import { useCallback } from "react";

export const useSignUpModalComponent = () => {
  const { isSignUpOpen } = useAppSelector(signUpSelector);

  const dispatch = useAppDispatch();

  const handleClose = useCallback(() => {
    dispatch(setIsSignUpOpen(false));
  }, [dispatch]);
  return { isSignUpOpen, handleClose };
};
