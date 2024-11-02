import { requestPH } from "@/api/placeholder-api";
import { UserItemModified } from "@/types/user";
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
  const searchParams = req.nextUrl.searchParams;
  const name = searchParams.get("name");
  const response = await requestPH<UserItemModified[]>("/users?_limit");
  // на jsonplaceholder нет поиска по части имени, поэтому фильтр сделал тут
  const filteredUsers = filterUsersByName(response, name || "");
  return NextResponse.json(addImageUrl(filteredUsers));
};
