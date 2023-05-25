import { SyntheticEvent, useRef, useState } from "react";

export const usePersonalStatisticsComponent = () => {
  const [activeTab, setActiveTab] = useState(0);
  const previousTab = useRef<number>(0);

  const handleTabChange = (event: SyntheticEvent<Element, Event>, value: string) => {
    previousTab.current = activeTab;
    setActiveTab(parseInt(value));
  };
  return { activeTab, previousTab, handleTabChange };
};
