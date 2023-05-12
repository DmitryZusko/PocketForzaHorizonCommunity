import { useCallback } from "react";
import { IFloatingModalHook } from "./types";

export const useFloatingModal = ({ setIsOpen }: IFloatingModalHook) => {
  const handleClose = useCallback(() => {}, []);
  return { handleClose };
};
