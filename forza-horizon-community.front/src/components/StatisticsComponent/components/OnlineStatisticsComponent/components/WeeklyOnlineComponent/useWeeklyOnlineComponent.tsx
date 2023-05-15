import { useMemo } from "react";
import { IWeeklyOnlineComponentHook } from "./types";

export const useWeeklyOnlineComponent = ({ totalPlayers }: IWeeklyOnlineComponentHook) => {
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

    return data.reverse();
  }, [totalPlayers]);

  return {
    getFakeWeeklyOnline,
  };
};
