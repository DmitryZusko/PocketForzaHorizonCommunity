import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { styles } from "./styles";
import { IFormHeaderComponentProps } from "./types";

const FormHeaderComponent = ({ text }: IFormHeaderComponentProps) => {
  return (
    <Box sx={styles.outerContainer}>
      <Image alt="logo" src="/logo.png" width={150} height={100} />
      <Typography variant="imageHeader" textAlign={"center"}>
        {text}
      </Typography>
    </Box>
  );
};

export default FormHeaderComponent;
