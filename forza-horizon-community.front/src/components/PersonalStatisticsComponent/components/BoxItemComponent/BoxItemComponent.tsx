import { baseTheme } from "@/components/constants";
import { Box, Divider, Typography } from "@mui/material";
import { styles } from "./styles";
import { IBoxItemComponentProps } from "./types";
import { useBoxItemComponent } from "./useBoxItemComponent";

const BoxItemComponent = ({ header, body, index, ...props }: IBoxItemComponentProps) => {
  const { isDesktop } = useBoxItemComponent();
  return (
    <Box
      width={isDesktop ? "30vw" : "45vw"}
      minHeight={"10vh"}
      color={index % 2 === 0 ? baseTheme.palette.primary.light : "inherit"}
      sx={styles.outerContainer}
      {...props}
    >
      <Typography variant="smallText" textAlign={"center"} sx={styles.text}>
        {header}
      </Typography>
      <Divider flexItem />
      <Typography position={"relative"} textAlign={"center"} sx={styles.text}>
        {body}
      </Typography>
      <Box
        width="100%"
        height="100%"
        position="absolute"
        sx={index % 2 === 0 ? styles.secondaryBox : styles.primaryBox}
      />
    </Box>
  );
};

export default BoxItemComponent;
