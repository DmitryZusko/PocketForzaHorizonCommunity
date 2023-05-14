import { Tooltip, Typography } from "@mui/material";
import { ICustomTooltipComponentProps } from "./types";

const CustomTooltipComponent = ({ title, children, ...props }: ICustomTooltipComponentProps) => {
  return (
    <Tooltip arrow title={<Typography variant="tooltip">{title}</Typography>} {...props}>
      {children}
    </Tooltip>
  );
};

export default CustomTooltipComponent;
