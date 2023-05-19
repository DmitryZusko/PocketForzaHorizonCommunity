import {
  DesignDetailsComponent,
  ImageBackgroundComponent,
  NavBarComponent,
  PageFooterComponent,
  ScrollUpFabComponent,
} from "@/components";
import { globalStyles } from "@/styles";
import { Box, Container, Typography } from "@mui/material";
import { IDesignDetailsContentProps } from "./types";
import { styles as pageStyles } from "../styles";

const DesignDetailsContent = ({ id }: IDesignDetailsContentProps) => {
  return (
    <Box minHeight={"100vh"} sx={globalStyles.centeredColumnFlexContainer}>
      <NavBarComponent />
      <ImageBackgroundComponent>
        <Container sx={pageStyles.imageTextBlock}>
          <Typography variant="imageHeader" align="center">
            Discover Livery Created By Our Community
          </Typography>
        </Container>
      </ImageBackgroundComponent>
      <DesignDetailsComponent id={id} />
      <ScrollUpFabComponent />
      <Box sx={pageStyles.footer}>
        <PageFooterComponent />
      </Box>
    </Box>
  );
};

export default DesignDetailsContent;
