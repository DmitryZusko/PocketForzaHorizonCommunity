import { Box, Button, Grow, Popper } from "@mui/material";
import { PropsWithChildren } from "react";
import { IButtonWithMenuComponentProps } from "./types";
import { useButtonWithMenuComponent } from "./useButtonWithMenuComponent";
import { styles } from "./styles";
import { Dvr, ArrowRight } from "@mui/icons-material";

const ButtonWithMenuComponent = ({
  mainButtonText,
  handleClick,
  children,
}: PropsWithChildren<IButtonWithMenuComponentProps>) => {
  const { isOpen, anchorEl, arrowStyle, handleHover, handleClose } = useButtonWithMenuComponent();
  return (
    <div onMouseLeave={handleClose}>
      <Button
        startIcon={<Dvr />}
        endIcon={<ArrowRight sx={arrowStyle} />}
        variant="contained"
        onClick={handleClick}
        onMouseEnter={handleHover}
        sx={styles.mainButton}
      >
        {mainButtonText}
      </Button>
      <Popper anchorEl={anchorEl.current} open={isOpen} placement="bottom" disablePortal transition>
        {({ TransitionProps }) => (
          <Grow {...TransitionProps} timeout={400}>
            <Box sx={styles.nestedBlock}>{children}</Box>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default ButtonWithMenuComponent;
