import { Tooltip, Typography } from "@mui/material";
import { ICustomTooltipComponentProps } from "./types";

const CustomTooltipComponent = ({ title, children }: ICustomTooltipComponentProps) => {
  return (
    <Tooltip arrow title={<Typography variant="tooltip">{title}</Typography>}>
      {children}
    </Tooltip>
  );
};

export default CustomTooltipComponent;
