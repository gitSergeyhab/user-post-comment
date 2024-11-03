import styled from "styled-components";

export const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100svh;
  gap: 1rem;
  font-family: var(--font-geist-sans);
  background-color: var(--gray-alpha-50);
`;

export const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  max-width: 1200px;
  min-width: 300px;
  margin: 0 auto;
  padding: 4rem;
  flex-grow: 2;
  width: 100%;
  background-color: #fff;
  margin-bottom: 1rem;
  box-shadow: var(--box-shadow-gray);

  @media (max-width: 1024px) {
    padding: 2rem;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
