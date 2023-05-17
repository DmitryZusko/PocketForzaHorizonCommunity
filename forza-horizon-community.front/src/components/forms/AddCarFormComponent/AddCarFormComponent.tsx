import {
  defaultCarThumbnailSize,
  FormButtonGroupComponent,
  ImageUploaderComponent,
  maxImageSizeInMB,
} from "@/components";
import { globalStyles } from "@/styles";
import { Autocomplete, Grid, TextField } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styles as formStyles } from "../styles";
import { styles } from "./styles";
import { useAddCarFormComponent } from "./useAddCarFormComponent";

const AddCarFormComponent = () => {
  const {
    formik,
    manufactureAutocompleteOptions,
    carTypesAutocompleteOptions,
    handleThumbnailChange,
    handleThumbnailErrorChange,
    handleCancel,
  } = useAddCarFormComponent();
  return (
    <form onSubmit={formik.handleSubmit} method="post" encType="multipart/form-data">
      <Paper sx={[globalStyles.centeredColumnFlexContainer, formStyles.outerContainer]}>
        <Grid container sx={styles.outerContainer}>
          <Grid item xs={12}>
            <ImageUploaderComponent
              buttonText={"Add Thumbnail"}
              threshold={3}
              maxImageSizeInMB={maxImageSizeInMB}
              isRequired={true}
              handleErrorChange={handleThumbnailErrorChange}
              handleImagesChange={handleThumbnailChange}
              isFixedSize={true}
              width={defaultCarThumbnailSize.width}
              height={defaultCarThumbnailSize.height}
              previewWidth={defaultCarThumbnailSize.width}
              previewHeight={defaultCarThumbnailSize.height}
              additionalInfo="Please, select 300x300 image"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="model"
              label="Model"
              value={formik.values.model}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.model && Boolean(formik.errors.model)}
              helperText={formik.touched.model && formik.errors.model}
              fullWidth
              sx={formStyles.textField}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              type="number"
              name="year"
              label="Year"
              value={formik.values.year}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.year && Boolean(formik.errors.year)}
              helperText={formik.touched.year && formik.errors.year}
              fullWidth
              sx={formStyles.textField}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              type="number"
              name="price"
              label="Price"
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.price && Boolean(formik.errors.price)}
              helperText={formik.touched.price && formik.errors.price}
              fullWidth
              sx={formStyles.textField}
            />
          </Grid>
          <Grid item xs={12}>
            <Autocomplete
              onChange={(e, value) => {
                formik.setFieldValue("manufactureId", value?.id);
              }}
              onBlur={formik.handleBlur}
              options={manufactureAutocompleteOptions}
              renderInput={(params) => (
                <TextField
                  {...params}
                  name="manufactureId"
                  label="Manufacture"
                  error={Boolean(formik.errors.manufactureId)}
                  helperText={formik.errors.manufactureId}
                  fullWidth
                  sx={formStyles.textField}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Autocomplete
              onChange={(e, value) => {
                formik.setFieldValue("carTypeId", value?.id);
              }}
              onBlur={formik.handleBlur}
              options={carTypesAutocompleteOptions}
              renderInput={(params) => (
                <TextField
                  {...params}
                  name="carTypeId"
                  label="Car Type"
                  error={Boolean(formik.errors.carTypeId)}
                  helperText={formik.errors.carTypeId}
                  fullWidth
                  sx={formStyles.textField}
                />
              )}
            />
          </Grid>
        </Grid>
        <FormButtonGroupComponent handleCancel={handleCancel} />
      </Paper>
    </form>
  );
};

export default AddCarFormComponent;
