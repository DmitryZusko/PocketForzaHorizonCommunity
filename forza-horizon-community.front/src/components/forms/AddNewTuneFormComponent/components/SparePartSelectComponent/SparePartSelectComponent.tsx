import { defaultIconSize } from "@/components/constants";
import { enumFormater } from "@/utilities";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Image from "next/image";
import { styles } from "./styles";
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
  ...props
}: ISparePartSelectComponentProps) => {
  const { items } = useSparePartSelectComponent({ enumerator });
  return (
    <Box sx={styles.outerBox} width={{ xs: "40vw", md: "30vw", lg: "20vw" }} {...props}>
      <Image
        alt={imageSrc}
        src={`/EnumIcons/${imageSrc}`}
        width={defaultIconSize.width}
        height={defaultIconSize.width}
        loading="lazy"
      />
      <FormControl size="small" fullWidth sx={styles.selector}>
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
    </Box>
  );
};

export default SparePartSelectComponent;
