import COLORS from "@/styles/colors";
import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 3px solid ${COLORS.primaryLight};
  border-right: 3px solid ${COLORS.primaryLight};
  border-bottom: 3px solid ${COLORS.primaryLight};
  border-left: 6px solid ${COLORS.primaryDark};
  background: transparent;
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;
