"use client";

import { FC, PropsWithChildren } from "react";

import styled from "styled-components";

export const StyledList = styled.ul`
  list-style: none;
  padding: 1rem;
  margin: 0;
  gap: 1.5rem;
  display: grid;
  margin-top: 2rem;
  max-height: 40rem;
  overflow-y: auto;
  background-color: var(--gray-alpha-02);

  @media (max-width: 1024px) {
    gap: 1rem;
  }

  @media (max-width: 768px) {
    gap: 0.75rem;
  }
`;

export const ContentList: FC<PropsWithChildren> = ({ children }) => (
  <StyledList>{children}</StyledList>
);
