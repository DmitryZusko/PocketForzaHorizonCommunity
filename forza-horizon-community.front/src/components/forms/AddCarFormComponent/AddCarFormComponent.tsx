import { FormButtonGroupComponent, ImageUploaderComponent, maxImageSizeInMB } from "@/components";
import { Autocomplete, TextField } from "@mui/material";
import { Container } from "@mui/system";
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
    <Container>
      <form onSubmit={formik.handleSubmit} method="post" encType="multipart/form-data">
        <ImageUploaderComponent
          buttonText={"Add Thumbnail"}
          threshold={1}
          maxImageSizeInMB={maxImageSizeInMB}
          isRequired={true}
          handleErrorChange={handleThumbnailErrorChange}
          handleImagesChange={handleThumbnailChange}
        />
        <TextField
          name="model"
          label="Model"
          value={formik.values.model}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.model && Boolean(formik.errors.model)}
          helperText={formik.touched.model && formik.errors.model}
        />
        <TextField
          type="number"
          name="year"
          label="Year"
          value={formik.values.year}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.year && Boolean(formik.errors.year)}
          helperText={formik.touched.year && formik.errors.year}
        />
        <TextField
          type="number"
          name="price"
          label="Price"
          value={formik.values.price}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.price && Boolean(formik.errors.price)}
          helperText={formik.touched.price && formik.errors.price}
        />
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
            />
          )}
        />
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
            />
          )}
        />
        <FormButtonGroupComponent handleCancel={handleCancel} />
      </form>
    </Container>
  );
};

export default AddCarFormComponent;
