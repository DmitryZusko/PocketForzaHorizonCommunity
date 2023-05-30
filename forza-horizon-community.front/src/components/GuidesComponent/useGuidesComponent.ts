import { useRouter } from "next/router";
import { useState } from "react";
import { defaultAnimationDuration } from "../constants";
import { styles } from "./styles";

export const useGuidesComponent = () => {
  const [isSlide, setIsSlide] = useState(true);
  const [tuneButtonStyle, setTuneButtonStyle] = useState<{ animation: string }>({ animation: "" });
  const [designButtonStyle, setDesignButtonStyle] = useState<{ animation: string }>({
    animation: "",
  });
  const router = useRouter();

  const handleTunesClick = () => {
    setIsSlide(false);
    setTimeout(() => {
      router.push("/guides/tunes");
    }, defaultAnimationDuration / 1.5);
  };

  const handleTuneEnter = () => {
    setTuneButtonStyle(styles.buttonIn);
  };

  const handleTuneLeave = () => {
    setTuneButtonStyle(styles.buttonOut);
  };

  const handleDesignsClick = () => {
    setIsSlide(false);
    setTimeout(() => {
      router.push("/guides/designs");
    }, defaultAnimationDuration / 1.5);
  };

  const handleDesignEnter = () => {
    setDesignButtonStyle(styles.buttonIn);
  };

  const handleDesignLeave = () => {
    setDesignButtonStyle(styles.buttonOut);
  };

  return {
    isSlide,
    handleTunesClick,
    handleTuneEnter,
    handleTuneLeave,
    tuneButtonStyle,
    handleDesignsClick,
    handleDesignEnter,
    handleDesignLeave,
    designButtonStyle,
  };
};
