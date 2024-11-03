import Link from "next/link";
import styled, { css } from "styled-components";

const linkFragmentCss = css`
  text-decoration: none;
  color: inherit;
  transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;
  border: 2px solid var(--gray-alpha-80);
  border-radius: 0.25rem;
  padding: 0 0.5rem;
  min-width: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: inherit;
  cursor: pointer;
  font-size: 2rem;
  font-weight: 700;
  box-shadow: var(--box-shadow-gray);
  &:hover {
    color: var(--gray-alpha-50);
    border-color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    min-width: 6rem;
  }
`;
export const StyledLink = styled(Link)`
  ${linkFragmentCss}
`;

export const StyledButton = styled.button`
  ${linkFragmentCss}
`;

export const StyledHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem;
  box-shadow: var(--box-shadow-gray);
  background-color: #fff;
`;
