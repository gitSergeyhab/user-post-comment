"use client";

import { FC } from "react";
import { RenderMode } from "@/types/example";
import { getPostHref } from "@/utils/example";
import { PostItemLink, Text, Title } from "./style";

export type PostItemProps = {
  body: string;
  id: number;
  title: string;
  mode?: RenderMode;
  userId?: number;
};
export const PostItem: FC<PostItemProps> = ({
  body,
  id,
  title,
  mode,
  userId,
}) => {
  const href = getPostHref(id, mode, userId);
  return (
    <PostItemLink href={href}>
      <div>
        <Title>{title}</Title>
        <Text>{body}</Text>
      </div>
    </PostItemLink>
  );
};
