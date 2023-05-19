import { keyframes } from "@emotion/react";

const buttonWobbleInKeyframes = keyframes`
0% {
    -webkit-transform: rotate(0) scale(1);
    transform: rotate(0) scale(1);
}
33% {
    -webkit-transform: rotate(-5deg) scale(1.1);
    transform: rotate(-5deg) scale(1.1);
}
66% {
    -webkit-transform: rotate(10deg) scale(1.2);
    transform: rotate(10deg) scale(1.2);
}
100% {
    -webkit-transform: rotate(0) scale(1.3);
    transform: rotate(0) scale(1.3);
}
`;

const buttonWobbleOutKeyframes = keyframes`
0% {
    -webkit-transform: rotate(0) scale(1.3);
    transform: rotate(0) scale(1.3);
}
100% {
    -webkit-transform: rotate(0) scale(1);
    transform: rotate(0) scale(1);
}
`;

export const styles = {
  buttonIn: {
    animation: `${buttonWobbleInKeyframes} 0.75s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  },
  buttonOut: {
    animation: `${buttonWobbleOutKeyframes} 0.75s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  },
};
