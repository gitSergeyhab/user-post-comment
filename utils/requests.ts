import { requestPH } from "@/api/placeholder-api";
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
  const postPromise = requestPH<Post>(`/posts/${postId}`);
  const userPromise = requestPH<User>(`/users/${userId}`);
  const commentsPromise = requestPH<Comment[]>(`/comments?postId=${postId}`);
  const [post, user, comments] = await Promise.all([
    postPromise,
    userPromise,
    commentsPromise,
  ]);
  return { post, user, comments };
};
