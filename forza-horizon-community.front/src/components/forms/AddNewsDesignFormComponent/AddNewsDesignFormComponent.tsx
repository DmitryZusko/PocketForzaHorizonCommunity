import { ImageUploaderComponent, maxImageSizeInMB } from "@/components";
import { Autocomplete, Button, Grid, TextField } from "@mui/material";
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
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6} order={{ xs: 100, lg: 0 }}>
          <ImageUploaderComponent
            buttonText={"Upload Thumbnail"}
            threshold={1}
            maxImageSizeInMB={maxImageSizeInMB}
            isRequired={true}
            handleErrorChange={handleThumbnailErrorChange}
            handleImagesChange={handleThumbnailChange}
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
          {/* <InputMask
            name="sharecode"
            mask="999 999 999"
            value={formik.values.forzaShareCode}
            onChange={(e) => {
              formik.setFieldValue("forzaShareCode", e.target.value);
            }}
            onBlur={formik.handleBlur}
            placeholder="777 777 777"
          >
            {(inputProps) => (
              <TextField
                {...inputProps}
                label="Forza Share Code"
                error={Boolean(formik.errors.forzaShareCode)}
                helperText={formik.errors.forzaShareCode}
              />
            )}
          </InputMask> */}
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
        <Grid item xs={6} order={{ xs: 500 }}>
          <Button variant="contained" type="submit">
            Create
          </Button>
        </Grid>
        <Grid item xs={6} order={{ xs: 500 }}>
          <Button onClick={handleCancel}>Cancel</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddNewsDesignFormComponent;
