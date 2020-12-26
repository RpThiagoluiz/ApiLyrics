import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingSpinner = styled.div`
  position: absolute;
  left: 42vw;
  top: 42vh;

  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 8px solid black;
  border-right: 6px solid black;
  border-bottom: 5px solid black;
  background: transparent;
  width: 256px;
  height: 256px;
  border-radius: 50%;
`;
