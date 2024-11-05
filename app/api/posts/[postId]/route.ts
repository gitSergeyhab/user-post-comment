import { requestPH } from "@/api/placeholder-api";
import { Comment } from "@/types/comment";
import { Post } from "@/types/post";
import { User } from "@/types/user";
import { getErrorResponse } from "@/utils/error";
import { NextRequest, NextResponse } from "next/server";

const requestPostComments = async (postId: string) => {
  const query = new URLSearchParams({ postId }).toString();
  const postResponse = await requestPH<Comment[]>(`/comments?${query}`);
  if (!postResponse.ok) {
    console.error("could not fetch comments");
    return [];
  }
  return await postResponse.json();
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
    const [postResponse, comments] = await Promise.all([
      requestPost(postId),
      requestPostComments(postId),
    ]);

    if (postResponse.status === 404) {
      return NextResponse.json(getErrorResponse("post not found", 404));
    }

    const post = await postResponse.json();
    const userResponse = await requestUser(post.userId);

    if (userResponse.status === 404) {
      return NextResponse.json(getErrorResponse("user not found", 404));
    }

    const user = await userResponse.json();
    return NextResponse.json({ ...post, comments, user, cacheChecker: Math.round(Math.random() * 10000) });
  } catch (error) {
    return NextResponse.json(getErrorResponse((error as Error).message, 500));
  }
};
