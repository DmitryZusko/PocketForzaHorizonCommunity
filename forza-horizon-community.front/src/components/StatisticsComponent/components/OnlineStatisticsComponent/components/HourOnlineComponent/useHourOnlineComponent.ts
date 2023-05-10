import {
  getCurrentOnline,
  playerStatisticsSelector,
  useAppDispatch,
  useAppSelector,
} from "@/redux";
import { useCallback, useEffect, useMemo } from "react";

export const useHourOnlineComponent = () => {
  const { isLoadingPlayersNumber: isLoading, totalPlayers } =
    useAppSelector(playerStatisticsSelector);

  const dispatch = useAppDispatch();

  const loadPlayersCount = useCallback(() => {
    dispatch(getCurrentOnline());
  }, [dispatch]);

  const getFakeHourOnline = useMemo(() => {
    let data = [];
    for (let i = 1; i <= 24; i++) {
      data.push({
        hour: i,
        onlineCount: Math.floor(totalPlayers + totalPlayers * (Math.random() - 0.5)),
      });
    }

    return data;
  }, [totalPlayers]);

  useEffect(() => {
    loadPlayersCount();
  }, [loadPlayersCount]);

  return {
    isLoading,
    totalPlayers,
    getFakeHourOnline,
  };
};
