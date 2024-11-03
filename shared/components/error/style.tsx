import Link from "next/link";
import styled from "styled-components";

export const NotFoundDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  gap: 1rem;
  font-size: larger;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  transition: color 0.2s ease-in-out;
  border: 2px solid var(--gray-alpha-80);
  border-radius: 0.25rem;
  padding: 0 0.5rem;

  &:hover {
    color: var(--gray-alpha-50);
  }
`;
