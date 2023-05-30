import { addModalsSelector, useAppSelector } from "@/redux";

export const useAdminPanelComponent = () => {
  const { isAddCarOpen, isAddManufactureOpen, isAddCarTypeOpen } =
    useAppSelector(addModalsSelector);
  return { isAddCarOpen, isAddManufactureOpen, isAddCarTypeOpen };
};
