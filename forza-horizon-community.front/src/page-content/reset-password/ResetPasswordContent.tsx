import {
  baseTheme,
  defaultAnimationDuration,
  ImageBackgroundComponent,
  PageFooterComponent,
  ResetPasswordFormComponent,
} from "@/components";
import { globalStyles } from "@/styles";
import { Box, Container, Slide, Typography } from "@mui/material";
import { styles as pageStyles } from "../styles";

const ResetPasswordContent = () => {
  return (
    <Box minHeight={"100vh"} sx={globalStyles.centeredColumnFlexContainer}>
      <ImageBackgroundComponent>
        <Container sx={pageStyles.imageTextBlock}>
          <Typography variant="imageHeader" align="center">
            Reset Password
          </Typography>
          <Typography variant="imageBody" align="center">
            Please, enter your{" "}
            <Box component="span" color={baseTheme.palette.secondary.light}>
              new password
            </Box>
          </Typography>
        </Container>
      </ImageBackgroundComponent>
      <Slide in={true} direction="right" timeout={defaultAnimationDuration}>
        <Box>
          <ResetPasswordFormComponent />
        </Box>
      </Slide>
      <Box sx={pageStyles.footer}>
        <PageFooterComponent />
      </Box>
    </Box>
  );
};

export default ResetPasswordContent;
