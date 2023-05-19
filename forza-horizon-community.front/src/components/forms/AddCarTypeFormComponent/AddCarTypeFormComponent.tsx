import { FormButtonGroupComponent } from "@/components/FormButtonGroupComponent";
import { globalStyles } from "@/styles";
import { Paper, TextField } from "@mui/material";
import { styles } from "../styles";
import { useAddCarTypeFormComponent } from "./useAddCarTypeFormComponent";

const AddCarTypeFormComponent = () => {
  const { formik, handleCancel } = useAddCarTypeFormComponent();

  return (
    <form onSubmit={formik.handleSubmit}>
      <Paper sx={[globalStyles.centeredColumnFlexContainer, styles.outerContainer]}>
        <TextField
          name="carTypeName"
          label="Car Type"
          value={formik.values.carTypeName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.carTypeName && Boolean(formik.errors.carTypeName)}
          helperText={formik.touched.carTypeName && formik.errors.carTypeName}
          sx={styles.textField}
        />
        <FormButtonGroupComponent handleCancel={handleCancel} />
      </Paper>
    </form>
  );
};

export default AddCarTypeFormComponent;
