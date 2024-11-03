"use client";

import { FC } from "react";
import { Comment } from "@/types/comment";
import { StyledComment, Title } from "./style";

export const CommentItem: FC<Comment> = ({ body, email, name }) => {
  return (
    <StyledComment>
      <Title>
        {name} (by {email})
      </Title>
      <div>{body}</div>
    </StyledComment>
  );
};
