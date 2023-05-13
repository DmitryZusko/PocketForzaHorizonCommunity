import {
  addManufactureModalSelector,
  setIsAddManufactureOpen,
  useAppDispatch,
  useAppSelector,
} from "@/redux";
import { useCallback } from "react";

export const useAddManufactureModalComponent = () => {
  const dispatch = useAppDispatch();

  const { isAddManufactureOpen } = useAppSelector(addManufactureModalSelector);

  const handleClose = useCallback(() => {
    dispatch(setIsAddManufactureOpen(false));
  }, [dispatch]);
  return { isAddManufactureOpen, handleClose };
};
