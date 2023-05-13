import { FormButtonGroupComponent } from "@/components/FormButtonGroupComponent";
import { TextField } from "@mui/material";
import { Container } from "@mui/system";
import { useAddCarTypeFormComponent } from "./useAddCarTypeFormComponent";

const AddCarTypeFormComponent = () => {
  const { formik, handleCancel } = useAddCarTypeFormComponent();

  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          name="carTypeName"
          label="Car Type"
          value={formik.values.carTypeName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.carTypeName && Boolean(formik.errors.carTypeName)}
          helperText={formik.touched.carTypeName && formik.errors.carTypeName}
        />
        <FormButtonGroupComponent handleCancel={handleCancel} />
      </form>
    </Container>
  );
};

export default AddCarTypeFormComponent;
