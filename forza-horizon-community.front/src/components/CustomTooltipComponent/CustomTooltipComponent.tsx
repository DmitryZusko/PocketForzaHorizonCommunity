import { Tooltip, Typography } from "@mui/material";
import { PropsWithChildren } from "react";
import { ICustomTooltipComponentProps } from "./types";

const CustomTooltipComponent = ({
  text,
  children,
}: PropsWithChildren<ICustomTooltipComponentProps>) => {
  return (
    <Tooltip
      arrow
      title={
        <Typography variant="body1" align="center">
          {text}
        </Typography>
      }
    >
      <>{children}</>
    </Tooltip>
  );
};

export default CustomTooltipComponent;
