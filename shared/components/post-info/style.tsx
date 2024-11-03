import Link from "next/link";
import styled from "styled-components";

export const PostInfoSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-size: 2rem;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const Author = styled.p`
  align-self: flex-start;
  display: flex;
  gap: 1rem;
`;

export const Title = styled.h1`
  text-align: center;
  &::first-letter {
    text-transform: capitalize;
  }
`;

export const Text = styled.p`
  &::first-letter {
    text-transform: capitalize;
  }
`;

export const UserLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: inherit;
  font-weight: 600;
  transition: color 0.2s ease-in-out, text-shadow 0.2s ease-in-out;
  color: #5d6d7c;

  &:hover {
    color: #2f5477;
    text-shadow: 0 0 1px #2f5477;
  }
`;
