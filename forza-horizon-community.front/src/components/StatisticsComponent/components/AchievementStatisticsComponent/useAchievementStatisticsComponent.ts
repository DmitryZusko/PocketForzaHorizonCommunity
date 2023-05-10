import { achievementSelector, getAchievementStats, useAppDispatch, useAppSelector } from "@/redux";
import { useCallback, useEffect } from "react";

export const useAchievementStatisticsComponent = () => {
  const { isLoadingAchievements, achievements } = useAppSelector(achievementSelector);

  const dispatch = useAppDispatch();

  const loadAchievements = useCallback(() => {
    dispatch(getAchievementStats());
  }, [dispatch]);

  useEffect(() => {
    loadAchievements();
  }, [loadAchievements]);
  return { isLoadingAchievements, achievements };
};
