import { useAppDispatch, useAppSelector } from "@/redux";
import { addManufactureSelector, setIsAddManufactureOpen } from "@/redux/modal";
import { useCallback } from "react";

export const useAddManufactureModalComponent = () => {
  const dispatch = useAppDispatch();

  const { isAddManufactureOpen } = useAppSelector(addManufactureSelector);

  const handleClose = useCallback(() => {
    dispatch(setIsAddManufactureOpen(false));
  }, [dispatch]);
  return { isAddManufactureOpen, handleClose };
};
