import { FormButtonGroupComponent } from "@/components";
import { Container, TextField } from "@mui/material";
import { useAddManufactureFormComponent } from "./useAddManufactureFormComponent";

const AddManufactureFormComponent = () => {
  const { formik, handleCancel } = useAddManufactureFormComponent();
  return (
    <form onSubmit={formik.handleSubmit}>
      <Container>
        <TextField
          name="manufactureName"
          label="Manufacture"
          value={formik.values.manufactureName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.manufactureName && Boolean(formik.errors.manufactureName)}
          helperText={formik.touched.manufactureName && formik.errors.manufactureName}
        />
        <TextField
          name="country"
          label="Country"
          value={formik.values.country}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.country && Boolean(formik.errors.country)}
          helperText={formik.touched.country && formik.errors.country}
        />
        <FormButtonGroupComponent handleCancel={handleCancel} />
      </Container>
    </form>
  );
};

export default AddManufactureFormComponent;
