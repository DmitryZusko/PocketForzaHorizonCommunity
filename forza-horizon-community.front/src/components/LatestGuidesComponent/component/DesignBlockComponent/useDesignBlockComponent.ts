import {
  defaultCardDescriptionLimit,
  defaultLatestGuidesAmount,
} from "@/components/constants/applicationConstants";
import { useAppDispatch, useAppSelector } from "@/redux/app-hooks";
import { getLatestDesigns, latestDesignsSelector } from "@/redux/design";
import { useCallback, useEffect } from "react";

const useDesignBlockComponent = () => {
  const { isLoadingLatest: isLoading, latestDesigns } = useAppSelector(latestDesignsSelector);

  const dispatch = useAppDispatch();

  const loadLatestDesigns = useCallback(
    (page: number, amount: number, descriptionLimit: number) => {
      dispatch(getLatestDesigns({ page, pageSize: amount, descriptionLimit }));
    },
    [dispatch],
  );

  useEffect(() => {
    loadLatestDesigns(0, defaultLatestGuidesAmount, defaultCardDescriptionLimit);
  }, [loadLatestDesigns]);

  return { isLoading, latestDesigns };
};

export default useDesignBlockComponent;
