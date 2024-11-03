"use client";

import { UserModified } from "@/types/user";
import { FC } from "react";
import {
  Info,
  InfoLink,
  Name,
  UserHeader,
  UserImg,
  UserInfoSection,
} from "./style";

export const UserInfo: FC<UserModified> = (props) => {
  return (
    <UserInfoSection>
      <UserImg
        src={props.imageUrl}
        alt={props.username}
        width={100}
        height={100}
      />
      <Info>
        <UserHeader>{props.username}</UserHeader>
        <Name>{props.name}</Name>
        <InfoLink href={`mailto:${props.email}`}>email: {props.email}</InfoLink>
        <InfoLink href={`tel:${props.phone}`}>phone:{props.phone}</InfoLink>
        <InfoLink href={`http://${props.website}`} target="_blank">
          website: {props.website}
        </InfoLink>
        <p>
          <b>Company: {props.company?.name}</b> ({props.company?.bs})
        </p>
      </Info>
    </UserInfoSection>
  );
};
