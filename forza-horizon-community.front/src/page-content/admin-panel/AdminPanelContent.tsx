import {
  AdminPanelComponent,
  ImageBackgroundComponent,
  NavBarComponent,
  PageFooterComponent,
  ScrollUpFabComponent,
} from "@/components";
import { globalStyles } from "@/styles";
import { Box, Container, Typography } from "@mui/material";
import { styles as pageStyles } from "../styles";

const AdminPanelContent = () => {
  return (
    <Box minHeight={"100vh"} sx={globalStyles.centeredColumnFlexContainer}>
      <NavBarComponent />
      <ImageBackgroundComponent>
        <Container sx={pageStyles.imageTextBlock}>
          <Typography variant="imageHeader" align="center">
            Administartor&apos;s Panel
          </Typography>
        </Container>
      </ImageBackgroundComponent>
      <AdminPanelComponent />
      <ScrollUpFabComponent />
      <Box sx={pageStyles.footer}>
        <PageFooterComponent />
      </Box>
    </Box>
  );
};

export default AdminPanelContent;
