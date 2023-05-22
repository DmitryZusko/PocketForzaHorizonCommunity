import { useState } from "react";

export const usePasswordFieldComponent = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toogleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  return { isShowPassword, toogleShowPassword };
};
