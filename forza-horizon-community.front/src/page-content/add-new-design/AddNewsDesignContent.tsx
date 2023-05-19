import {
  AddNewsDesignFormComponent,
  baseTheme,
  ImageBackgroundComponent,
  NavBarComponent,
  PageFooterComponent,
  ScrollUpFabComponent,
} from "@/components";
import { globalStyles } from "@/styles";
import { Box, Container, Typography } from "@mui/material";
import { styles as pageStyles } from "../styles";

const AddNewsDesignContent = () => {
  return (
    <Box minHeight={"100vh"} sx={globalStyles.centeredColumnFlexContainer}>
      <NavBarComponent />
      <ImageBackgroundComponent>
        <Container sx={pageStyles.imageTextBlock}>
          <Typography variant="imageHeader" align="center">
            Add New Livery
          </Typography>
          <Typography variant="imageBody" align="center">
            Thank you for your{" "}
            <Box component={"span"} color={baseTheme.palette.secondary.light}>
              contribution
            </Box>
          </Typography>
        </Container>
      </ImageBackgroundComponent>
      <AddNewsDesignFormComponent />
      <ScrollUpFabComponent />
      <Box sx={pageStyles.footer}>
        <PageFooterComponent />
      </Box>
    </Box>
  );
};

export default AddNewsDesignContent;
