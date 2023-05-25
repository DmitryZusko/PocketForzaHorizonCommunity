import { useAppSelector, userSelector } from "@/redux";
import { dateFormater } from "@/utilities";
import { useMemo } from "react";
import { IStatisticsData } from "../types";

export const useGeneralStatisticsComponent = () => {
  const { user } = useAppSelector(userSelector);
  const data = useMemo(() => {
    let data: IStatisticsData[] = [];

    data.push({
      header: "GARAGE VALUE",
      body: `${user?.generalStatistics.garageValue} CR`,
    });
    const date = dateFormater.timeSpanStringToComponents(user?.generalStatistics.timeDriven || "");
    data.push({
      header: "TIME DRIVEN",
      body:
        ((date.days && `${date.days} days `) || "") +
        `${date.hours}:${date.minutes}:${date.minutes}`,
    });

    data.push({
      header: "NUMBER OF VICTORIES",
      body: `${user?.generalStatistics.totalVictories}`,
    });

    data.push({
      header: "NUMBER OF PODIUMS",
      body: `${user?.generalStatistics.totalPodiums}`,
    });

    data.push({
      header: "CLEAN LAPS",
      body: `${user?.generalStatistics.totalCleanLaps}`,
    });

    data.push({
      header: "COLLISIONS PER RACE",
      body: `${user?.generalStatistics.collisionsPerRace}`,
    });

    data.push({
      header: "DAILY CHALANGES COMPLETED",
      body: `${user?.generalStatistics.dailyChallengesCompleted}`,
    });

    data.push({
      header: "WEEKLY CHALANGES COMPLETED",
      body: `${user?.generalStatistics.weeklyChallengesCompleted}`,
    });

    data.push({
      header: "FAVOURITE CAR",
      body: `${user?.generalStatistics.favouriteCarModel}`,
    });

    return data;
  }, [user?.generalStatistics]);
  return { data };
};
