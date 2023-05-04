import { useAppDispatch, useAppSelector } from "@/redux/app-hooks";
import { getLatestDesigns, latestDesignsSelector } from "@/redux/design";
import { useCallback, useEffect } from "react";

const useDesignBlockComponent = () => {
  const { isLoadingLatest: isLoading, latestDesigns } = useAppSelector(latestDesignsSelector);

  const dispatch = useAppDispatch();

  const loadLatestDesigns = useCallback(
    (amount: number) => {
      dispatch(getLatestDesigns(amount));
    },
    [dispatch],
  );

  useEffect(() => {
    loadLatestDesigns(3);
  }, [loadLatestDesigns]);

  return { isLoading, latestDesigns };
};

export default useDesignBlockComponent;
