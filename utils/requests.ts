import { outerRequest } from "@/api/outer-api";
import { Comment } from "@/types/comment";
import { Post } from "@/types/post";
import { User } from "@/types/user";

export const requestPostWithUserComments = async ({
  postId,
  userId,
}: {
  postId: string;
  userId: string;
}) => {
  const postPromise = outerRequest<Post>(`/posts/${postId}`);
  const userPromise = outerRequest<User>(`/users/${userId}`);
  const commentsPromise = outerRequest<Comment[]>(`/comments?postId=${postId}`);
  const [post, user, comments] = await Promise.all([
    postPromise,
    userPromise,
    commentsPromise,
  ]);
  return { post, user, comments };
};
