import { requestPH } from "@/api/placeholder-api";
import { UserItemModified } from "@/types/user";
import { getErrorResponse } from "@/utils/error";
import { NextRequest, NextResponse } from "next/server";

const filterUsersByName = (users: UserItemModified[], name: string) =>
  users.filter((user) =>
    user.username.toLowerCase().includes(name.toLowerCase())
  );

const addImageUrl = (users: UserItemModified[]) =>
  users.map((user) => ({
    ...user,
    imageUrl: user.id % 2 === 0 ? "/user/g-user.jpg" : "/user/o-user.jpg",
  }));

export const GET = async (req: NextRequest) => {
  try {
    const searchParams = req.nextUrl.searchParams;
    const name = searchParams.get("name");
    const usersResponse = await requestPH<UserItemModified[]>("/users");

    if (usersResponse.status === 404) {
      return NextResponse.json(getErrorResponse("content not found", 404));
    }
    const users = await usersResponse.json();

    // на jsonplaceholder нет поиска по части имени, поэтому фильтр сделал тут
    const filteredUsers = filterUsersByName(users, name || "");
    return NextResponse.json(addImageUrl(filteredUsers));
  } catch (error) {
    return NextResponse.json(getErrorResponse((error as Error).message, 500));
  }
};
