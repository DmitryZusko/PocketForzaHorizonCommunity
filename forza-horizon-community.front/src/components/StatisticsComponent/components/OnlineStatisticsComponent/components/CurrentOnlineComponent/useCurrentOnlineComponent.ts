import {
  getCurrentOnline,
  playerStatisticsSelector,
  useAppDispatch,
  useAppSelector,
} from "@/redux";
import { useCallback, useEffect } from "react";

export const useCurrentOnlineComponent = () => {
  const { isLoadingPlayersNumber: isLoading, totalPlayers } =
    useAppSelector(playerStatisticsSelector);

  const dispatch = useAppDispatch();

  const loadPlayersCount = useCallback(() => {
    dispatch(getCurrentOnline());
  }, [dispatch]);

  useEffect(() => {
    loadPlayersCount();
  }, [loadPlayersCount]);
  return { isLoading, totalPlayers };
};
