import { keyframes } from "styled-components";

// Defining the swing animation
const swing = keyframes`
15% {
  transform: rotate(-1.5deg);
}
30% {
  transform: rotate(0.7deg);
}
45% {
  transform: rotate(-0.7deg);
}
60% {
  transform: rotate(0.4deg);
}
75% {
  transform: rotate(-0.2deg);
}
100% {
  transform: rotate(0deg);
}
`;

const ANIMATIONS = {
  swing,
};

export default ANIMATIONS;
