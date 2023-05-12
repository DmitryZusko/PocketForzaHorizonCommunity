import { enumFormater } from "@/utilities";
import { Container, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Image from "next/image";
import { ISparePartSelectComponentProps } from "./types";
import { useSparePartSelectComponent } from "./useSparePartSelectComponent";

const SparePartSelectComponent = ({
  imageSrc,
  name,
  label,
  value,
  enumerator,
  error,
  handleValueChange,
  handleBlur,
}: ISparePartSelectComponentProps) => {
  const { items } = useSparePartSelectComponent({ enumerator });
  return (
    <Container>
      <Image alt={imageSrc} src={`/EnumIcons/${imageSrc}`} width={100} height={100} priority />
      <FormControl>
        <InputLabel>{label}</InputLabel>
        <Select
          name={name}
          value={value}
          onChange={handleValueChange}
          onBlur={handleBlur}
          error={error}
        >
          {items.map((item) => (
            <MenuItem key={item} value={enumFormater.getKeyByStringValue(item, enumerator)}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Container>
  );
};

export default SparePartSelectComponent;
