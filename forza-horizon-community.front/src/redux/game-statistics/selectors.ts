import { createSelector } from "reselect";
import { RootState } from "../store";

export const gameStatisticsStateSelector = ({ gameStatistics }: RootState) => gameStatistics;

export const playerStatisticsSelector = createSelector(
  gameStatisticsStateSelector,
  ({ isLoadingPlayersNumber, totalPlayers }) => ({
    isLoadingPlayersNumber,
    totalPlayers,
  }),
);

export const achievementSelector = createSelector(
  gameStatisticsStateSelector,
  ({ isLoadingAchievements, achievements }) => ({ isLoadingAchievements, achievements }),
);
