"use client";

import { FC, PropsWithChildren } from "react";
import { StyledLayout, StyledMain } from "./style";
import { Header } from "../components/header";

export const ContentWrapper: FC<PropsWithChildren> = ({ children }) => (
  <StyledLayout>
    <Header />
    <StyledMain>{children}</StyledMain>
  </StyledLayout>
);
