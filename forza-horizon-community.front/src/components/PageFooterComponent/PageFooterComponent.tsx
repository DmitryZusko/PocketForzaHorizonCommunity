import { Box, Typography } from "@mui/material";
import { forwardRef } from "react";
import { CustomLinkComponent } from "../CustomLinkComponent";
import { styles } from "./styles";

const PageFooterComponent = forwardRef<HTMLDivElement>(function PageFooterComponent(_, ref) {
  return (
    <Box ref={ref} sx={styles.outerContainer}>
      <Typography align="center" variant="body1">
        All images was takes from Froza Horizon 5 game.
      </Typography>
      <Typography align="center" variant="body1">
        This application is created just for own use.
      </Typography>
      <Typography align="center" variant="body1">
        Created by Dmitry Zusko.{" "}
      </Typography>
      <CustomLinkComponent
        href={"https://github.com/DmitryZusko/PocketForzaHorizonCommunity"}
        target={"_blank"}
      >
        <Typography align="center" variant="body1">
          Git Hub
        </Typography>
      </CustomLinkComponent>
    </Box>
  );
});

export default PageFooterComponent;
