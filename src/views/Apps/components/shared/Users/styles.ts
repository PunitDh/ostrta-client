import { Keyframes, keyframes } from "@emotion/react";

export const blink: Keyframes = keyframes`
  0% {
    background-color: lightgreen;
  }
  25% {
    background-color: lightgreen;
  }
  50% {
    background-color: darkgreen;
  }
  75% {
    background-color: lightgreen;
  }
  100% {
    background-color: lightgreen;
  }
`;
