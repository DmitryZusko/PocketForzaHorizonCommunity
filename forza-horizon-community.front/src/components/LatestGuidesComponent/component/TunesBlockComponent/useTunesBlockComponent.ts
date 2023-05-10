import { defaultLatestGuidesAmount } from "@/components/constants";
import { getLatestTunes, tuneLastestSelector, useAppDispatch, useAppSelector } from "@/redux";
import { useCallback, useEffect } from "react";

export const useTunesBlockComponent = () => {
  const { isLoadingLatest: isLoading, latestTunes } = useAppSelector(tuneLastestSelector);

  const dispatch = useAppDispatch();

  const loadLatestTunes = useCallback(() => {
    dispatch(getLatestTunes(defaultLatestGuidesAmount));
  }, [dispatch]);

  useEffect(() => {
    loadLatestTunes();
  }, [loadLatestTunes]);
  return { isLoading, latestTunes };
};
