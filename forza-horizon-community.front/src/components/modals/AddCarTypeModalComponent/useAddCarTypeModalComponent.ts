import {
  addCarTypeModalSelector,
  setIsAddCarTypeOpen,
  useAppDispatch,
  useAppSelector,
} from "@/redux";
import { useCallback } from "react";

export const useAddCarTypeModalComponent = () => {
  const { isAddCarTypeOpen } = useAppSelector(addCarTypeModalSelector);

  const dispatch = useAppDispatch();

  const handleClose = useCallback(() => {
    dispatch(setIsAddCarTypeOpen(false));
  }, [dispatch]);

  return { isAddCarTypeOpen, handleClose };
};
