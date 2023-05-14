import { Box } from "@mui/material";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { ICustomLinkComponentProps } from "./types";
import classes from "./styles.module.css";

const CustomLinkComponent = ({
  href,
  target,
  children,
  ...props
}: PropsWithChildren<ICustomLinkComponentProps>) => {
  return (
    <Box {...props}>
      <Link href={href} target={target} className={classes.link}>
        {children}
      </Link>
    </Box>
  );
};

export default CustomLinkComponent;
