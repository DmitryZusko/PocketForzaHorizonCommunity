import { defaultLogoSize } from "@/components/constants";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { styles } from "./styles";
import { IFormHeaderComponentProps } from "./types";

const FormHeaderComponent = ({ text, ...props }: IFormHeaderComponentProps) => {
  return (
    <Box sx={styles.outerContainer} {...props}>
      <Image
        alt="logo"
        src="/logo.png"
        loading="lazy"
        width={defaultLogoSize.width}
        height={defaultLogoSize.height}
      />
      <Typography variant="imageHeader" textAlign={"center"}>
        {text}
      </Typography>
    </Box>
  );
};

export default FormHeaderComponent;
