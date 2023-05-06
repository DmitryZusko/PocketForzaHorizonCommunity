import { Checkbox, FormControlLabel } from "@mui/material";
import { Container } from "@mui/system";
import { ICustomCheckboxListComponentProprs } from "../../types";
import useCustomCheckboxListComponent from "./useCustomCheckboxListComponent";

export default function CustomCheckboxListComponent({
  entities,
  applyChanges,
}: ICustomCheckboxListComponentProprs) {
  const { handleChange } = useCustomCheckboxListComponent({ applyChanges });
  return (
    <Container>
      {entities.map((entity) => (
        <FormControlLabel
          key={entity}
          label={entity}
          control={<Checkbox onChange={handleChange(entity)} />}
        />
      ))}
    </Container>
  );
}
