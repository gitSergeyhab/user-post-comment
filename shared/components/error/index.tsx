"use client";

import { PropsWithChildren } from "react";
import { NotFoundDiv, StyledLink } from "./style";

export const ErrorComponent = ({ children }: PropsWithChildren) => {
  return (
    <NotFoundDiv>
      <h2>Error</h2>
      {children || <p>Could not load requested resource</p>}
      <StyledLink href="/">Return Home</StyledLink>
      <StyledLink href="/static-example">Return Static</StyledLink>
    </NotFoundDiv>
  );
};
