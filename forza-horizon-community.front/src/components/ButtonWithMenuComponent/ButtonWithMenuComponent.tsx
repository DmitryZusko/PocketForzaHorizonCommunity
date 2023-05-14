import { Button, Popper } from "@mui/material";
import { PropsWithChildren } from "react";
import { IButtonWithMenuComponentProps } from "./types";
import { useButtonWithMenuComponent } from "./useButtonWithMenuComponent";

const ButtonWithMenuComponent = ({
  mainButtonText,
  handleClick,
  children,
}: PropsWithChildren<IButtonWithMenuComponentProps>) => {
  const { isOpen, anchorEl, handleHover, handleClose } = useButtonWithMenuComponent();
  return (
    <div onMouseLeave={handleClose}>
      <Button variant="contained" onClick={handleClick} onMouseEnter={handleHover}>
        {mainButtonText}
      </Button>
      <Popper anchorEl={anchorEl.current} open={isOpen} placement="bottom-start" disablePortal>
        {children}
      </Popper>
    </div>
  );
};

export default ButtonWithMenuComponent;
