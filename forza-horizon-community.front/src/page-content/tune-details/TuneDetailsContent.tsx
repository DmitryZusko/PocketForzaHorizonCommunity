import {
  ImageBackgroundComponent,
  NavBarComponent,
  PageFooterComponent,
  TuneDetailsComponent,
} from "@/components";
import { globalStyles } from "@/styles";
import { Box, Container, Typography } from "@mui/material";
import { TuneDetailsContentProps } from "./types";
import { styles as pageStyles } from "../styles";

const TuneDetailsContent = ({ id }: TuneDetailsContentProps) => {
  return (
    <Box minHeight={"100vh"} sx={globalStyles.centeredColumnFlexContainer}>
      <NavBarComponent />
      <ImageBackgroundComponent>
        <Container sx={pageStyles.imageTextBlock}>
          <Typography variant="imageHeader" align="center">
            Discover Tune Created By Our Community
          </Typography>
        </Container>
      </ImageBackgroundComponent>
      <TuneDetailsComponent id={id} />
      <Box sx={pageStyles.footer}>
        <PageFooterComponent />
      </Box>
    </Box>
  );
};

export default TuneDetailsContent;
