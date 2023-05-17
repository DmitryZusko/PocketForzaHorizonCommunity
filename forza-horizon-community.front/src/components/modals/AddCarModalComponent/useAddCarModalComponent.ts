import { addCarModalSelector, setIsAddCarOpen, useAppDispatch, useAppSelector } from "@/redux";
import { useCallback } from "react";

export const useAddCarModalComponent = () => {
  const { isAddCarOpen } = useAppSelector(addCarModalSelector);

  const dispatch = useAppDispatch();

  const handleClose = useCallback(() => {
    dispatch(setIsAddCarOpen(false));
  }, [dispatch]);
  return { isAddCarOpen, handleClose };
};
