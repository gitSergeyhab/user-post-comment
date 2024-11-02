import { UserItemModified } from "@/types/user";
import Search from "@/shared/components/search";
import { UserItem } from "@/shared/components/user-item";
import { UserList } from "@/shared/components/user-list";
import { localRequest } from "@/api/local-api";

interface Props {
  searchParams: Promise<Record<string, string | undefined>>;
}

export default async function Home({ searchParams }: Props) {
  const params = await searchParams;
  const name = params["name"] || "";
  const users = await localRequest<UserItemModified[]>(`users?name=${name}`);
  return (
    <>
      <Search />
      <h1>Users</h1>
      <UserList>
        {users.map((user) => (
          <li key={user.id}>
            <UserItem {...user} />
          </li>
        ))}
      </UserList>
    </>
  );
}
