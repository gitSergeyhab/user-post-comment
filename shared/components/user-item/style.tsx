import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const StyledUserItem = styled(Link)`
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
export const UserImg = styled(Image)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  transition: scale 0.2s ease-in-out;
  &:hover {
    scale: 1.05;
  }

  @media (max-width: 1024px) {
    width: 80px;
    height: 80px;
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

export const UserEmail = styled.div`
  font-size: 14px;
  color: var(--gray-alpha-50);
  margin-top: 10px;
`;

export const UserName = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
`;
