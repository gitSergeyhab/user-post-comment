"use client";

import { FC } from "react";
import { RenderMode } from "@/types/example";
import { getUserHref } from "@/utils/example";
import { Author, PostInfoSection, Text, Title, UserLink } from "./style";

export interface PostInfoProps {
  body: string;
  title: string;
  userId: number;
  user: { username: string };
  mode?: RenderMode;
}

export const PostInfo: FC<PostInfoProps> = ({
  body,
  title,
  userId,
  user,
  mode,
}) => {
  const href = getUserHref(userId, mode);

  return (
    <PostInfoSection>
      <Title>{title}</Title>
      <Author>
        <span>Author:</span>
        <UserLink href={href}>{user.username}</UserLink>
      </Author>
      <Text>{body}</Text>
    </PostInfoSection>
  );
};
