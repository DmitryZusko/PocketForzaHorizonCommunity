import { useAppSelector, userSelector } from "@/redux";
import { useMemo } from "react";
import { IStatisticsData } from "../types";

export const useOnlineStatisticsComponent = () => {
  const { user } = useAppSelector(userSelector);

  const data = useMemo(() => {
    let data: IStatisticsData[] = [];

    data.push({
      header: "KUDOS RECIEVED",
      body: `${user?.onlineStatistics.recievedKudos}`,
    });

    data.push({
      header: "KUDOS GIVEN",
      body: `${user?.onlineStatistics.givenKudos}`,
    });

    data.push({
      header: "ARCADE EVENTS ENTERED",
      body: `${user?.onlineStatistics.arcadeEventsEntered}`,
    });

    data.push({
      header: "ARCADE EVENTS COMPLETED",
      body: `${user?.onlineStatistics.arcadeEventsCompleted}`,
    });

    data.push({
      header: "FLAG RUSH GAMES WON",
      body: `${user?.onlineStatistics.flagRushWon}`,
    });

    data.push({
      header: "TEAM FLAG RUSH GAMES WON",
      body: `${user?.onlineStatistics.teamFlagRushWon}`,
    });

    data.push({
      header: "FLAGS CAPTURED",
      body: `${user?.onlineStatistics.flagsCaptured}`,
    });

    data.push({
      header: "INFECTED GAMES WON",
      body: `${user?.onlineStatistics.infectedGamesWon}`,
    });

    data.push({
      header: "TIMES INFECTED OTHERS",
      body: `${user?.onlineStatistics.timesInfectedOthers}`,
    });

    data.push({
      header: "TIMES INFECTED BY OTHERS",
      body: `${user?.onlineStatistics.timesInfectedByOthers}`,
    });

    data.push({
      header: "KING GAMES WON",
      body: `${user?.onlineStatistics.kingGamesWon}`,
    });

    data.push({
      header: "TEAM KING GAMES WON",
      body: `${user?.onlineStatistics.teamKingGamesWon}`,
    });

    data.push({
      header: "RIVALS BEATEN",
      body: `${user?.onlineStatistics.rivalsBeaten}`,
    });

    data.push({
      header: "RIVALS LAPS COMPLETED",
      body: `${user?.onlineStatistics.rivalsLapsCompleted}`,
    });

    return data;
  }, [user]);
  return { data };
};
