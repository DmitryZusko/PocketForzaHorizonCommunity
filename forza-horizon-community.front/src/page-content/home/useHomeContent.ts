import { isNewsLoadingSelector, useAppSelector } from "@/redux";

export const useHomeContent = () => {
  const { isLoading: isNewsLoading } = useAppSelector(isNewsLoadingSelector);
  return { isNewsLoading };
};
