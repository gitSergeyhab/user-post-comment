import styled from "styled-components";

export const StyledComment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  padding: 0.5rem;
  color: inherit;
  text-decoration: none;
  background-color: #fff;
`;
export const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;

  &::first-letter {
    text-transform: capitalize;
  }
`;
