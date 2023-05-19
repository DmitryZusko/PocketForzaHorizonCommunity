import {
  baseTheme,
  FormButtonGroupComponent,
  ImageUploaderComponent,
  maxImageSizeInMB,
} from "@/components";
import { Autocomplete, Grid, TextField } from "@mui/material";
import { PatternFormat } from "react-number-format";
import { useAddNewsDesignFormComponent } from "./useAddNewsDesignFormComponent";

const AddNewsDesignFormComponent = () => {
  const {
    formik,
    autocompleteOptions,
    handleThumbnailErrorChange,
    handleGalleryErrorChange,
    handleThumbnailChange,
    handleGalleryChange,
    handleCancel,
  } = useAddNewsDesignFormComponent();
  return (
    <Grid container padding={baseTheme.spacing(7)} maxWidth="100vw">
      <Grid item xs={12} lg={6} order={{ xs: 100, lg: 0 }}>
        <ImageUploaderComponent
          buttonText={"Upload Thumbnail"}
          threshold={1}
          maxImageSizeInMB={maxImageSizeInMB}
          isRequired={true}
          handleErrorChange={handleThumbnailErrorChange}
          handleImagesChange={handleThumbnailChange}
          isFixedSize={false}
        />
      </Grid>
      <Grid item xs={12} lg={6} order={{ xs: 200, lg: 0 }}>
        <ImageUploaderComponent
          buttonText={"Upload Gallery"}
          threshold={5}
          maxImageSizeInMB={maxImageSizeInMB}
          isRequired={false}
          handleErrorChange={handleGalleryErrorChange}
          handleImagesChange={handleGalleryChange}
          isFixedSize={false}
        />
      </Grid>
      <Grid item xs={8}>
        <TextField
          fullWidth
          name="title"
          label="Title"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
      </Grid>
      <Grid item xs={4}>
        <PatternFormat
          name="sharecode"
          label={"Forza Share Code"}
          format={"### ### ###"}
          placeholder="777 777 777"
          value={formik.values.forzaShareCode}
          onChange={(e) => {
            formik.setFieldValue("forzaShareCode", e.target.value);
          }}
          onBlur={formik.handleBlur}
          error={formik.touched.forzaShareCode && Boolean(formik.errors.forzaShareCode)}
          helperText={formik.touched.forzaShareCode && formik.errors.forzaShareCode}
          customInput={TextField}
        />
      </Grid>
      <Grid item xs={12}>
        <Autocomplete
          onChange={(e, value) => {
            formik.setFieldValue("selectedCarId", value?.id);
          }}
          onBlur={formik.handleBlur}
          options={autocompleteOptions}
          renderInput={(params) => (
            <TextField
              {...params}
              name="selectedCarId"
              label="Car"
              error={Boolean(formik.errors.selectedCarId)}
              helperText={formik.errors.selectedCarId}
            />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          multiline
          minRows={3}
          name="description"
          label="Description"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.description && Boolean(formik.errors.description)}
          helperText={formik.touched.description && formik.errors.description}
        />
      </Grid>
      <Grid item xs={12} order={500}>
        <FormButtonGroupComponent handleSubmit={formik.handleSubmit} handleCancel={handleCancel} />
      </Grid>
    </Grid>
  );
};

export default AddNewsDesignFormComponent;
