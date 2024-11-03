"use client";

import { PropsWithChildren } from "react";
import { NotFoundDiv, StyledLink } from "./style";

export const NotFoundComponent = ({ children }: PropsWithChildren) => {
  return (
    <NotFoundDiv>
      <h2>Not Found</h2>
      {children || <p>Could not find requested resource</p>}
      <StyledLink href="/">Return Home</StyledLink>
      <StyledLink href="/static-example">Return Static</StyledLink>
    </NotFoundDiv>
  );
};
