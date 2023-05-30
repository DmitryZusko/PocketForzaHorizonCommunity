import { defaultLatestGuidesAmount } from "@/components/constants";
import { getLatestTunesAsync, tuneLastestSelector, useAppDispatch, useAppSelector } from "@/redux";
import { useCallback, useEffect } from "react";

export const useTunesBlockComponent = () => {
  const { isLoadingLatest: isLoading, latestTunes } = useAppSelector(tuneLastestSelector);

  const dispatch = useAppDispatch();

  const loadLatestTunes = useCallback(() => {
    dispatch(getLatestTunesAsync(defaultLatestGuidesAmount));
  }, [dispatch]);

  useEffect(() => {
    loadLatestTunes();
  }, [loadLatestTunes]);
  return { isLoading, latestTunes };
};
