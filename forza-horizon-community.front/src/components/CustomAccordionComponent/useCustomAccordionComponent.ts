import { useState } from "react";
import { ICustomAccordionComponentHook } from "./types";

export const useCustomAccordionComponent = ({
  isExpandedByDefault,
}: ICustomAccordionComponentHook) => {
  const [isExpanded, setIsExpanded] = useState(isExpandedByDefault);

  const handleChange = () => {
    setIsExpanded(!isExpanded);
  };
  return { isExpanded, handleChange };
};
