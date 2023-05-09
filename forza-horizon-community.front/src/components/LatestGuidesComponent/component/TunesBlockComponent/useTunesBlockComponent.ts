import { defaultLatestGuidesAmount } from "@/components/constants/applicationConstants";
import { useAppDispatch, useAppSelector } from "@/redux/app-hooks";
import { getLatestTunes, tuneLastestSelector } from "@/redux/tune";
import { useCallback, useEffect } from "react";

const useTunesBlockComponent = () => {
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

export default useTunesBlockComponent;
