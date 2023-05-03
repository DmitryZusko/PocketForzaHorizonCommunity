import { createSelector } from "reselect";
import { RootState } from "../store";

export const gameStatisticsStateSelector = ({ gameStatistics }: RootState) => gameStatistics;

export const gameStatisticsSelector = createSelector(
  gameStatisticsStateSelector,
  ({ isLoadingPlayersNumber, totalPlayers, isLoadingAchievements, achievements }) => ({
    isLoadingPlayersNumber,
    totalPlayers,
    isLoadingAchievements,
    achievements,
  }),
);

export const playerStatisticsSelector = createSelector(
  gameStatisticsSelector,
  ({ isLoadingPlayersNumber, totalPlayers }) => ({
    isLoadingPlayersNumber,
    totalPlayers,
  }),
);

export const playersCountSelector = createSelector(
  gameStatisticsSelector,
  (state) => state.totalPlayers,
);

export const achievementSelector = createSelector(
  gameStatisticsSelector,
  ({ isLoadingAchievements, achievements }) => ({ isLoadingAchievements, achievements }),
);
