"use client";

import { useRouter } from "next/navigation";
import { StyledButton, StyledHeader, StyledLink } from "./style";

const LINK_DATA = [
  { href: "/", title: "Home" },
  { href: "/static-example", title: "Static" },
];

export const Header = () => {
  const router = useRouter();

  return (
    <StyledHeader>
      {LINK_DATA.map(({ href, title }) => (
        <StyledLink key={href} href={href}>
          {title}
        </StyledLink>
      ))}
      <StyledButton onClick={router.back}>Back</StyledButton>
    </StyledHeader>
  );
};
