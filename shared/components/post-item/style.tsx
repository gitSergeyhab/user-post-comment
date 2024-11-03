import Link from "next/link";
import styled from "styled-components";

export const PostItemLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  padding: 0.5rem;
  color: inherit;
  text-decoration: none;

  &:hover {
    color: var(--gray-alpha-80);
    box-shadow: var(--box-shadow-gray);
  }
`;

export const Text = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;

  @media (max-width: 768px) {
    -webkit-line-clamp: 2;
  }
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  &::first-letter {
    text-transform: capitalize;
  }
`;
