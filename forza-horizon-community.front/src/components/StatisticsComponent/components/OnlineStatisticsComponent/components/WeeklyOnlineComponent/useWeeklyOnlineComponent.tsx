import { useAppSelector } from "@/redux/app-hooks";
import { playerStatisticsSelector } from "@/redux/game-statistics";
import { useMemo } from "react";

const useWeeklyOnlineComponent = () => {
  const { totalPlayers } = useAppSelector(playerStatisticsSelector);

  const getFakeWeeklyOnline = useMemo(() => {
    let data = [];
    for (let i = 1; i <= 7; i++) {
      let day = new Date();
      day.setDate(day.getDate() - i);
      data.push({
        date: day.toLocaleDateString("en-us", { month: "short", day: "numeric" }),
        onlineCount: Math.floor(totalPlayers + totalPlayers * (Math.random() - 0.5)),
      });
    }

    return data;
  }, [totalPlayers]);

  return {
    getFakeWeeklyOnline,
  };
};

export default useWeeklyOnlineComponent;
