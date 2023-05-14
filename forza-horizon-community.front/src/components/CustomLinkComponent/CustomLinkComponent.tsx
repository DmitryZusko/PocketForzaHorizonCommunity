import Link from "next/link";
import { PropsWithChildren } from "react";
import { ICustomLinkComponentProps } from "./types";

const CustomLinkComponent = ({
  href,
  target,
  children,
  ...props
}: PropsWithChildren<ICustomLinkComponentProps>) => {
  return (
    <Link href={href} target={target} {...props}>
      {children}
    </Link>
  );
};

export default CustomLinkComponent;
