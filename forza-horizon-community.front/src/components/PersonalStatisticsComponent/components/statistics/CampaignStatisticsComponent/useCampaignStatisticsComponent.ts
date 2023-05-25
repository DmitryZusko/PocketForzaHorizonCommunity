import { useAppSelector, userSelector } from "@/redux";
import { useMemo } from "react";
import { IStatisticsData } from "../types";
import {
  TotalDangerSignStars,
  TotalDriftZoneStars,
  TotalExhibitions,
  TotalSpeedTrapStars,
  TotalSpeedZoneStars,
  TotalStories,
  TotalStoriesStars,
  TotalTrailblazerStars,
} from "./constants";

export const useCampaignStatisticsComponent = () => {
  const { user } = useAppSelector(userSelector);

  const data = useMemo(() => {
    let data: IStatisticsData[] = [];

    data.push({
      header: "RACES",
      body: `${user?.campaignStatistics.totalRaces}`,
    });

    data.push({
      header: "STORIES COMPLETED",
      body: `${user?.campaignStatistics.storiesCompleted}/${TotalStories}`,
    });

    data.push({
      header: "STORY STARS EARNED",
      body: `${user?.campaignStatistics.storyStarsEarned}/${TotalStoriesStars}`,
    });

    data.push({
      header: "HEAD-TO-HEAD RACES",
      body: `${user?.campaignStatistics.headToHeadEntered}`,
    });

    data.push({
      header: "HEAD-TO-HEAD RACES WON",
      body: `${user?.campaignStatistics.headToHeadWon}`,
    });

    data.push({
      header: "EXHIBITIONS COMPLETED",
      body: `${user?.campaignStatistics.exhibitionsCompleted}/${TotalExhibitions}`,
    });

    data.push({
      header: "SPEED TRAP STARS EARNED",
      body: `${user?.campaignStatistics.speedTrapStars}/${TotalSpeedTrapStars}`,
    });

    data.push({
      header: "SPEED ZONE STARS EARNED",
      body: `${user?.campaignStatistics.speedZoneStars}/${TotalSpeedZoneStars}`,
    });

    data.push({
      header: "DANGER SIGN STARS EARNED",
      body: `${user?.campaignStatistics.dangerSignStars}/${TotalDangerSignStars}`,
    });

    data.push({
      header: "DRIFT ZONE STARS EARNED",
      body: `${user?.campaignStatistics.driftZoneStars}/${TotalDriftZoneStars}`,
    });

    data.push({
      header: "TRAILBLAZER GATE STARS EARNED",
      body: `${user?.campaignStatistics.trailblazerStars}/${TotalTrailblazerStars}`,
    });

    return data;
  }, [user]);
  return { data };
};
