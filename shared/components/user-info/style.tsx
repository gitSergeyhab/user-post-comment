import Image from "next/image";
import styled from "styled-components";

export const UserInfoSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 2rem;
  padding: 0.5rem;
  margin-bottom: 2rem;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.5rem;
  @media (max-width: 1024px) {
    gap: 0.25rem;
  }
`;

export const UserImg = styled(Image)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  transition: border-radius 0.4s ease-in-out;
  &:hover {
    border-radius: 5%;
  }
`;

export const UserHeader = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const Name = styled.div`
  font-size: 1rem;
  font-weight: 600;
`;

export const InfoLink = styled.a`
  display: flex;
  text-decoration: none;
  color: inherit;
  font-weight: 600;
  font-size: 1rem;
  transition: color 0.2s ease-in-out, text-shadow 0.2s ease-in-out;
  color: #5d6d7c;
  &:hover {
    color: #2f5477;
    text-shadow: 0 0 1px #2f5477;
  }
`;
