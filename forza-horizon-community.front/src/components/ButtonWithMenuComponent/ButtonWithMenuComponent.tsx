import { Box, Button, Grow, Popper } from "@mui/material";
import { PropsWithChildren } from "react";
import { IButtonWithMenuComponentProps } from "./types";
import { useButtonWithMenuComponent } from "./useButtonWithMenuComponent";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { styles } from "./styles";

const ButtonWithMenuComponent = ({
  mainButtonText,
  handleClick,
  children,
}: PropsWithChildren<IButtonWithMenuComponentProps>) => {
  const { isOpen, anchorEl, arrowStyle, handleHover, handleClose } = useButtonWithMenuComponent();
  return (
    <div onMouseLeave={handleClose}>
      <Button
        endIcon={<ArrowRightIcon sx={arrowStyle} />}
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
