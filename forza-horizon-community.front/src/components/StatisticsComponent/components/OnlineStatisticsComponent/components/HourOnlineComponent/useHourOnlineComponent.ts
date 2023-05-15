import { useMemo, useState } from "react";
import { IHourOnlineComponentHook } from "./types";

export const useHourOnlineComponent = ({ totalPlayers }: IHourOnlineComponentHook) => {
  const [activeIndex, setActiveInex] = useState<number | undefined>(undefined);

  const handleHover = (props: any, index: number) => {
    setActiveInex(index);
  };

  const handleHoverEnd = () => {
    setActiveInex(undefined);
  };

  const getFakeHourOnline = useMemo(() => {
    let data = [];
    for (let i = 1; i <= 24; i++) {
      data.push({
        hour: i,
        onlineCount: Math.floor(totalPlayers + totalPlayers * (Math.random() - 0.5)),
      });
    }

    return data;
  }, [totalPlayers]);

  return { activeIndex, getFakeHourOnline, handleHover, handleHoverEnd };
};
