import { FormButtonGroupComponent } from "@/components";
import { globalStyles } from "@/styles";
import { Paper, TextField } from "@mui/material";
import { styles } from "../styles";
import { useAddManufactureFormComponent } from "./useAddManufactureFormComponent";

const AddManufactureFormComponent = () => {
  const { formik, handleCancel } = useAddManufactureFormComponent();
  return (
    <form onSubmit={formik.handleSubmit}>
      <Paper sx={[globalStyles.centeredColumnFlexContainer, styles.outerContainer]}>
        <TextField
          name="manufactureName"
          label="Manufacture"
          value={formik.values.manufactureName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.manufactureName && Boolean(formik.errors.manufactureName)}
          helperText={formik.touched.manufactureName && formik.errors.manufactureName}
          sx={styles.textField}
        />
        <TextField
          name="country"
          label="Country"
          value={formik.values.country}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.country && Boolean(formik.errors.country)}
          helperText={formik.touched.country && formik.errors.country}
          sx={styles.textField}
        />
        <FormButtonGroupComponent handleCancel={handleCancel} />
      </Paper>
    </form>
  );
};

export default AddManufactureFormComponent;
