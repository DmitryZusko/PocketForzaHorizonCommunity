import { Fab, Fade } from "@mui/material";
import { useScrollUpFabComponent } from "./useScrollUpFabComponent";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ScrollUpFabComponent = () => {
  const { isvisible, handleScrollUp } = useScrollUpFabComponent();
  return (
    <>
      {isvisible && (
        <Fade in={isvisible}>
          <Fab onClick={handleScrollUp}>
            <KeyboardArrowUpIcon />
          </Fab>
        </Fade>
      )}
    </>
  );
};

export default ScrollUpFabComponent;
