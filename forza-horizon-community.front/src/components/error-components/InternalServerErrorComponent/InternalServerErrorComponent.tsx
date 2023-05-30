import { Home } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { styles } from "../styles";
import { useInternalServerErrorComponent } from "./useInternalServerErrorComponent";

const InternalServerErrorComponent = () => {
  const { handleGoHomeClick } = useInternalServerErrorComponent();

  return (
    <Box sx={styles.outerBox}>
      <Typography variant="imageHeader">Oops, something goes wrong.</Typography>
      <Typography variant="imageBody">Please, repeat your request a little bit later.</Typography>

      <Button
        variant="outlined"
        startIcon={<Home />}
        onClick={handleGoHomeClick}
        sx={styles.goHomeButton}
      >
        Go Home
      </Button>
    </Box>
  );
};

export default InternalServerErrorComponent;
