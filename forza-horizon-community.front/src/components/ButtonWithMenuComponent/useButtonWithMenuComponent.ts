import React, { useRef, useState } from "react";
import { styles } from "./styles";

export const useButtonWithMenuComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const anchorEl = useRef<null | HTMLElement>(null);
  const [arrowStyle, setArrowStyle] = useState<{ animation: string }>({ animation: "" });

  const handleHover = (event: React.MouseEvent<HTMLButtonElement>) => {
    anchorEl.current = event.currentTarget;
    setIsOpen(true);
    setArrowStyle(styles.arrowIconIn);
  };
  const handleClose = () => {
    anchorEl.current = null;
    setIsOpen(false);
    setArrowStyle(styles.arrowIconOut);
  };
  return { isOpen, anchorEl, arrowStyle, handleHover, handleClose };
};
