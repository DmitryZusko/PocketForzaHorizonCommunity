import { useAppSelector, userSelector } from "@/redux";
import { dateFormater } from "@/utilities";
import { useMemo } from "react";
import { IStatisticsData } from "../types";

export const useRecordsStatisticsComponent = () => {
  const { user } = useAppSelector(userSelector);

  const data = useMemo(() => {
    let data: IStatisticsData[] = [];

    data.push({
      header: "HIGHEST DRIFT SCORE",
      body: `${user?.recordsStatistics.highestDriftScore.toLocaleString()}`,
    });

    data.push({
      header: "HIGHEST DANGER SIGN SCORE",
      body: `${user?.recordsStatistics.highestDangerSignScore.toLocaleString()} m`,
    });

    data.push({
      header: "HIGHEST SPEED TRAP SCORE",
      body: `${user?.recordsStatistics.highestSpeedTrapScore.toLocaleString()} km/h`,
    });

    data.push({
      header: "HIGHEST SPEED ZONE SCORE",
      body: `${user?.recordsStatistics.highestSpeedZoneScore.toLocaleString()} km/h`,
    });

    let time = dateFormater.timeSpanStringToComponents(
      user?.recordsStatistics.longestSkillChain || "",
    );
    data.push({
      header: "LONGEST SKILL CHAIN",
      body: `${time.hours}:${time.minutes}:${time.seconds}`,
    });

    data.push({
      header: "TOP SPEED",
      body: `${user?.recordsStatistics.topSpeed.toLocaleString()} km/h`,
    });

    data.push({
      header: "AVERAGE SPEED",
      body: `${user?.recordsStatistics.avarageSpeed.toLocaleString()} km/h`,
    });

    data.push({
      header: "DISTANCE DRIVEN",
      body: `${user?.recordsStatistics.distanceDriven.toLocaleString()} m`,
    });

    data.push({
      header: "LONGEST DRIFT",
      body: `${user?.recordsStatistics.longestDrift.toLocaleString()} m`,
    });

    data.push({
      header: "LONGEST JUMP",
      body: `${user?.recordsStatistics.longestJump.toLocaleString()} m`,
    });

    return data;
  }, [user]);

  return { data };
};
