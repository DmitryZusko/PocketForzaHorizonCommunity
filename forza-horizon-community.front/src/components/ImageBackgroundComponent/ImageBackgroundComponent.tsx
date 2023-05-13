import { Box } from "@mui/material";
import Image from "next/image";
import { PropsWithChildren } from "react";

const ImageBackgroundComponent = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Image alt="background" src="/background.jpg" fill style={{ objectFit: "contain" }} />
      <Box>{children}</Box>
    </>
  );
};

export default ImageBackgroundComponent;
