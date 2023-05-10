import { Checkbox, Container, FormControlLabel } from "@mui/material";
import { ICustomCheckboxListComponentProprs } from "../../types";
import { useCustomCheckboxListComponent } from "./useCustomCheckboxListComponent";

const CustomCheckboxListComponent = ({
  entities,
  applyChanges,
  ...props
}: ICustomCheckboxListComponentProprs) => {
  const { handleChange } = useCustomCheckboxListComponent({ applyChanges });
  return (
    <Container {...props}>
      {entities.map((entity) => (
        <FormControlLabel
          key={entity}
          label={entity}
          control={<Checkbox onChange={handleChange(entity)} />}
        />
      ))}
    </Container>
  );
};

export default CustomCheckboxListComponent;
