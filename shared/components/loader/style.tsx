import { Size } from "@/types/ui";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

interface StylesLoaderProps {
  $size?: Size;
}
export const StylesLoader = styled.div<StylesLoaderProps>`
  display: inline-block;
  width: 100px;
  height: 100px;
  border: 8px solid var(--gray-alpha-80);
  border-radius: 50%;
  border-top-color: var(--gray-alpha-02);
  animation: ${spin} 1s ease-in-out infinite;
  margin: auto;

  ${(props) =>
    props.$size === "small" &&
    `
    width: 50px;
    height: 50px;
    border-width: 4px;
  `}

  ${(props) =>
    props.$size === "large" &&
    `
    width: 150px;
    height: 150px;
    border-width: 12px;
  `}
`;
