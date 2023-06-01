import { Checkbox, Container, FormControlLabel } from "@mui/material";
import { ICustomCheckboxListComponentProprs } from "../../types";
import { styles } from "./styles";
import { useCustomCheckboxListComponent } from "./useCustomCheckboxListComponent";

const CustomCheckboxListComponent = ({
  entities,
  applyChanges,
  ...props
}: ICustomCheckboxListComponentProprs) => {
  const { sortedEntities, handleChange } = useCustomCheckboxListComponent({
    entities,
    applyChanges,
  });
  return (
    <Container sx={styles.outerContainer} {...props}>
      {sortedEntities.map((entity) => (
        <FormControlLabel
          key={entity}
          label={entity}
          control={<Checkbox onChange={handleChange(entity)} sx={styles.lable} />}
        />
      ))}
    </Container>
  );
};

export default CustomCheckboxListComponent;
