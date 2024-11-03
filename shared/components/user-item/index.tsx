"use client";

import { FC } from "react";
import { RenderMode } from "@/types/example";
import { getUserHref } from "@/utils/example";
import { StyledUserItem, UserEmail, UserImg, UserName } from "./style";

export interface UseItemProps {
  email: string;
  id: number;
  imageUrl: string;
  username: string;
  mode?: RenderMode;
}

export const UserItem: FC<UseItemProps> = ({
  email,
  id,
  imageUrl,
  username,
  mode,
}) => {
  const href = getUserHref(id, mode);
  return (
    <StyledUserItem href={href}>
      <UserImg
        key={id}
        src={imageUrl}
        alt={username}
        width={100}
        height={100}
      />
      <div>
        <UserName>{username}</UserName>
        <UserEmail>{email}</UserEmail>
      </div>
    </StyledUserItem>
  );
};
