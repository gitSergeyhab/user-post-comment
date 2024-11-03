"use client";

import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const UserList: FC<PropsWithChildren> = ({ children }) => (
  <StyledList>{children}</StyledList>
);
