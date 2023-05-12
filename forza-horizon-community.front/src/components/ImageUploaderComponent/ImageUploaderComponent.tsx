import { Button, Grid, ImageList, ImageListItem, Typography } from "@mui/material";
import Image from "next/image";
import { IImageUploaderComponentProps } from "./types";
import { useImageUploaderComponent } from "./useImageUploaderComponent";

const ImageUploaderComponent = ({
  buttonText,
  threshold,
  maxImageSizeInMB,
  isRequired,
  handleErrorChange,
  handleImagesChange,
}: IImageUploaderComponentProps) => {
  const { errorMessage, displayError, preview, handleImageUpload } = useImageUploaderComponent({
    isRequired,
    maxImageSizeInMB,
    threshold,
    handleErrorChange,
    handleImagesChange,
  });
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Button component="label">
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h5">{buttonText}</Typography>
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
                <Typography variant="body2" color={errorMessage.errorColor}>
                  {errorMessage.errorMessage}
                </Typography>
              )}
            </Grid>
          </Grid>
        </Button>
      </Grid>
      <Grid item xs={12}>
        {preview && (
          <ImageList>
            {preview.map((image, index) => (
              <ImageListItem key={index}>
                <Image src={image} alt="image" width={300} height={300} />
              </ImageListItem>
            ))}
          </ImageList>
        )}
      </Grid>
    </Grid>
  );
};

export default ImageUploaderComponent;
