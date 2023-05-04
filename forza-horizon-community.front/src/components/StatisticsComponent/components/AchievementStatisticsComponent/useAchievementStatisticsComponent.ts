import { useAppDispatch, useAppSelector } from "@/redux/app-hooks";
import { achievementSelector, getAchievementStats } from "@/redux/game-statistics";
import { useCallback, useEffect } from "react";

const useAchievementStatisticsComponent = () => {
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

export default useAchievementStatisticsComponent;
