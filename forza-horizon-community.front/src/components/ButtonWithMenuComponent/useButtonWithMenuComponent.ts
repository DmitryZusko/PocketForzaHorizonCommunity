import React, { useRef, useState } from "react";

export const useButtonWithMenuComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const anchorEl = useRef<null | HTMLElement>(null);
  const handleHover = (event: React.MouseEvent<HTMLButtonElement>) => {
    anchorEl.current = event.currentTarget;
    setIsOpen(true);
  };
  const handleClose = () => {
    anchorEl.current = null;
    setIsOpen(false);
  };
  return { isOpen, anchorEl, handleHover, handleClose };
};
