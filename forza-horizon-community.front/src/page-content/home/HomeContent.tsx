import { ImageBackgroundComponent, NavBarComponent, NewsBlockComponent } from "@/components";
import { Box, Container, Typography } from "@mui/material";
import { styles } from "./styles";

const HomeContent = () => {
  return (
    <Box sx={styles.outerBlock}>
      <NavBarComponent />
      <ImageBackgroundComponent>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="imageHeader" align="center">
            Welcome to the Horizon Community!
          </Typography>
          <Typography variant="imageBody" align="center">
            Here you can explore all available in-game{" "}
            <Box component="span" color="white">
              cars and discover variouse
            </Box>{" "}
            tunes and designs created{" "}
            <Box component="span" color="white">
              by our team
            </Box>
          </Typography>
          <Typography variant="imageBody" align="center">
            Enjoy Yourself!
          </Typography>
        </Container>
      </ImageBackgroundComponent>
      <NewsBlockComponent />
    </Box>
  );
};

export default HomeContent;
