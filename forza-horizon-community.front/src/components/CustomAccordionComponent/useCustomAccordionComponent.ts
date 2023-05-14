import { useState } from "react";

export const useCustomAccordionComponent = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleChange = () => {
    setIsExpanded(!isExpanded);
  };
  return { isExpanded, handleChange };
};
