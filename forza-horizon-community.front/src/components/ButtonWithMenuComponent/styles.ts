import { keyframes } from "@emotion/react";
import { baseTheme } from "../constants";

const arrowRotationInKeyframes = keyframes`
0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(90deg);
            transform: rotate(90deg);
  }
`;

const arrowRotationOutKeyframes = keyframes`
0% {
    -webkit-transform: rotate(90deg);
            transform: rotate(90deg);
  }
  100% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
`;

export const styles = {
  arrowIconIn: {
    animation: `${arrowRotationInKeyframes} 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  },
  arrowIconOut: {
    animation: `${arrowRotationOutKeyframes} 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  },
  mainButton: {
    border: "1px solid",
    borderColor: baseTheme.palette.secondary.light,
  },
  nestedBlock: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};
