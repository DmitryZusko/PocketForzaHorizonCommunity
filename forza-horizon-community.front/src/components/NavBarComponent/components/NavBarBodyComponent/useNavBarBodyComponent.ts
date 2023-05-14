import { useMediaQuery, useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { styles } from "./styles";

export const useNavBarBodyComponent = () => {
  const [buttonsStyle, setButtonsStyle] = useState(styles.nestedButton);
  const router = useRouter();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  const handleGuidesButtonclick = useCallback(() => {
    router.push("/guides");
  }, [router]);

  useEffect(() => {
    if (isDesktop) {
      setButtonsStyle(styles.defaultButton);
    } else {
      setButtonsStyle(styles.nestedButton);
    }
  }, [isDesktop]);
  return { buttonsStyle, handleGuidesButtonclick };
};
