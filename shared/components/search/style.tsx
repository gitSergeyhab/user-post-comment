import styled from "styled-components";

export const StyledSearch = styled.input.attrs({ type: "search" })`
  width: 100%;
  padding: 0.25rem 1rem;
  font-size: 1.5rem;
  border-radius: 0.25rem;
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  &:focus {
    outline: none;
    border-color: transparent;
    box-shadow: var(--box-shadow-gray);
  }
`;
