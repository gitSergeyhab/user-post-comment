import { requestPH } from "@/api/placeholder-api";
import { User } from "@/types/user";
import { NextRequest, NextResponse } from "next/server";

const requestUserPosts = async (userId: string) => {
  try {
    const query = new URLSearchParams({ userId }).toString();
    return await requestPH<User>(`/posts?${query}`);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const GET = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  try {
    const userId = (await params).id;
    const user = await requestPH<User>(`/users/${userId}`);
    const posts = await requestUserPosts(userId);
    return NextResponse.json({
      ...user,
      posts,
      imageUrl: user.id % 2 === 0 ? "/user/g-user.jpg" : "/user/o-user.jpg",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      error: "User not found",
    });
  }
};
