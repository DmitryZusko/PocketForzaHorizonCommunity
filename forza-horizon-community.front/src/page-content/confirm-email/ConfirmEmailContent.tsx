import { styles as pageStyles } from "../styles";
import { globalStyles } from "@/styles";
import { Box } from "@mui/material";
import { ConfirmEmailComponent, ImageBackgroundComponent, PageFooterComponent } from "@/components";

const ConfirmEmailContent = () => {
  return (
    <Box minHeight={"100vh"} sx={globalStyles.centeredColumnFlexContainer}>
      <ImageBackgroundComponent />
      <ConfirmEmailComponent />
      <Box sx={pageStyles.footer}>
        <PageFooterComponent />
      </Box>
    </Box>
  );
};

export default ConfirmEmailContent;
