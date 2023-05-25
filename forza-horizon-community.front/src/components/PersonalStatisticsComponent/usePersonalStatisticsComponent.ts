import { SyntheticEvent, useState } from "react";

export const usePersonalStatisticsComponent = () => {
  const [activeTab, setActiveTab] = useState("0");

  const handleTabChange = (event: SyntheticEvent<Element, Event>, value: string) => {
    setActiveTab(value);
  };
  return { activeTab, handleTabChange };
};
