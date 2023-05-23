import { Home } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { styles } from "../styles";
import { usePageNotFoundComponent } from "./usePageNotFoundComponent";

const PageNotFoundComponent = () => {
  const { handleGoHomeClick } = usePageNotFoundComponent();
  return (
    <Box sx={styles.outerBox}>
      <Typography variant="imageHeader">Hey, where did you find this link?</Typography>
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

export default PageNotFoundComponent;
