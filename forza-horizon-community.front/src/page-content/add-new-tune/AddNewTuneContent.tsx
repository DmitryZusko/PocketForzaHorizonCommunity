import {
  AddNewTuneFormComponent,
  baseTheme,
  ImageBackgroundComponent,
  NavBarComponent,
  PageFooterComponent,
  ScrollUpFabComponent,
} from "@/components";
import { globalStyles } from "@/styles";
import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { styles as pageStyles } from "../styles";

const AddNewTuneContent = () => {
  return (
    <Box minHeight={"100vh"} sx={globalStyles.centeredColumnFlexContainer}>
      <NavBarComponent />
      <ImageBackgroundComponent>
        <Container sx={pageStyles.imageTextBlock}>
          <Typography variant="imageHeader" align="center">
            Add New Tune
          </Typography>
          <Typography variant="imageBody" align="center">
            Thank you for your{" "}
            <Box component={"span"} color={baseTheme.palette.secondary.light}>
              contribution
            </Box>
          </Typography>
        </Container>
      </ImageBackgroundComponent>
      <AddNewTuneFormComponent />
      <ScrollUpFabComponent />
      <Box sx={pageStyles.footer}>
        <PageFooterComponent />
      </Box>
    </Box>
  );
};

export default AddNewTuneContent;
