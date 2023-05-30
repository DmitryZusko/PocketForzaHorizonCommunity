import { Box, Button, Grid, Typography } from "@mui/material";
import { IImageUploaderComponentProps } from "./types";
import { useImageUploaderComponent } from "./useImageUploaderComponent";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lightgallery.css";
import Image from "next/image";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { baseTheme, defaultImageSize } from "../constants";
import { globalStyles } from "@/styles";
import { styles } from "./styles";

const ImageUploaderComponent = ({
  buttonText,
  threshold,
  maxImageSizeInMB,
  isRequired,
  isFixedSize,
  width = defaultImageSize.width,
  height = defaultImageSize.height,
  previewWidth = defaultImageSize.width,
  previewHeight = defaultImageSize.height,
  additionalInfo,
  handleErrorChange,
  handleImagesChange,
  ...props
}: IImageUploaderComponentProps) => {
  const { errorMessage, displayError, preview, handleImageUpload } = useImageUploaderComponent({
    isRequired,
    maxImageSizeInMB,
    threshold,
    handleErrorChange,
    handleImagesChange,
  });
  return (
    <Grid container spacing={1} sx={globalStyles.centeredColumnFlexContainer} {...props}>
      <Grid item xs={12} textAlign="center">
        <Button component="label">
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant="textBody" align="center">
                {buttonText}
              </Typography>
              <input
                type="file"
                accept="image/png, image/jpeg"
                hidden
                onChange={handleImageUpload}
                multiple={threshold > 1}
              />
            </Grid>
            <Grid item xs={12}>
              {displayError && (
                <Typography variant="smallBoldText" color={errorMessage.errorColor}>
                  {errorMessage.errorMessage}
                </Typography>
              )}
            </Grid>
          </Grid>
        </Button>
      </Grid>
      <Grid item xs={12}>
        {preview && preview.length > 0 ? (
          <ImageList sx={styles.imageList}>
            {preview.map((image, index) => (
              <ImageListItem key={index}>
                {isFixedSize ? (
                  <Image alt="image" src={image} loading="lazy" width={width} height={height} />
                ) : (
                  <Box sx={styles.imageBox}>
                    <Image alt="image" src={image} fill loading="lazy" style={{ objectFit: "contain" }} />
                  </Box>
                )}
              </ImageListItem>
            ))}
          </ImageList>
        ) : (
          <Box width={previewWidth} height={previewHeight}></Box>
        )}
      </Grid>
      <Grid item xs={12}>
        <Typography variant="textBody" color={baseTheme.palette.warning.main}>
          {additionalInfo}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ImageUploaderComponent;
