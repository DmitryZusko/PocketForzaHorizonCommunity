import { defaultCardDescriptionLimit, defaultLatestGuidesAmount } from "@/components/constants";
import {
  getLatestDesignsAsync,
  latestDesignsSelector,
  useAppDispatch,
  useAppSelector,
} from "@/redux";
import { useCallback, useEffect } from "react";

const useDesignBlockComponent = () => {
  const { isLoadingLatest: isLoading, latestDesigns } = useAppSelector(latestDesignsSelector);

  const dispatch = useAppDispatch();

  const loadLatestDesigns = useCallback(
    (page: number, amount: number, descriptionLimit: number) => {
      dispatch(getLatestDesignsAsync({ page, pageSize: amount, descriptionLimit }));
    },
    [dispatch],
  );

  useEffect(() => {
    loadLatestDesigns(0, defaultLatestGuidesAmount, defaultCardDescriptionLimit);
  }, [loadLatestDesigns]);

  return { isLoading, latestDesigns };
};

export default useDesignBlockComponent;
