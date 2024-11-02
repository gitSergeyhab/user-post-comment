import { requestPH } from "@/api/placeholder-api";
import { Comment } from "@/types/comment";
import { Post } from "@/types/post";
import { User } from "@/types/user";
import { NextRequest, NextResponse } from "next/server";

const requestPostComments = async (postId: string) => {
  const query = new URLSearchParams({ postId }).toString();
  return await requestPH<Comment[]>(`/comments?${query}`);
};

const requestPost = async (postId: string) =>
  await requestPH<Post>(`/posts/${postId}`);

const requestUser = async (userId: string | number) =>
  await requestPH<User>(`/users/${userId}`);

export const GET = async (
  req: NextRequest,
  { params }: { params: Promise<{ postId: string }> }
) => {
  try {
    const postId = (await params).postId;
    const [post, comments] = await Promise.all([
      await requestPost(postId),
      await requestPostComments(postId),
    ]);
    const user = await requestUser(post.userId);

    return NextResponse.json({
      ...post,
      comments,
      user,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      error: "User not found",
    });
  }
};
