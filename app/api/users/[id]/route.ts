import { requestPH } from "@/api/placeholder-api";
import { User } from "@/types/user";
import { getErrorResponse } from "@/utils/error";
import { NextRequest, NextResponse } from "next/server";

const requestUserPosts = async (userId: string) => {
  try {
    const query = new URLSearchParams({ userId }).toString();
    const postResponse = await requestPH<User>(`/posts?${query}`);
    if (postResponse.status === 404) return [];
    return await postResponse.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const GET = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  try {
    const userId = (await params).id;
    const userResponse = await requestPH<User>(`/users/${userId}`);

    if (userResponse.status === 404) {
      return NextResponse.json(getErrorResponse("content not found", 404));
    }
    const user = await userResponse.json();
    const posts = await requestUserPosts(userId);

    return NextResponse.json({
      ...user,
      posts,
      imageUrl: user.id % 2 === 0 ? "/user/g-user.jpg" : "/user/o-user.jpg",
      cacheChecker:  Math.round(Math.random() * 10000)
    });
  } catch (error) {
    return NextResponse.json(getErrorResponse((error as Error).message, 500));
  }
};
