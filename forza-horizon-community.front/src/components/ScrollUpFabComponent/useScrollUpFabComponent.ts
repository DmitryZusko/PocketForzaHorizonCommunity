import { useEffect, useState } from "react";

export const useScrollUpFabComponent = () => {
  const [isvisible, setIsVisible] = useState(false);

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 30) {
        setIsVisible(true);
        return;
      }
      setIsVisible(false);
    });
  });

  return { isvisible, handleScrollUp };
};
