import {
  getCurrentOnline,
  playerStatisticsSelector,
  useAppDispatch,
  useAppSelector,
} from "@/redux";
import { useEffect, useCallback } from "react";

export const useOnlineStatisticsComponent = () => {
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
