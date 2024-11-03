// !!!
// С поисковиком статическая генерация не получится
// пример, что статическая генерация сработает без searchParams

import { User } from "@/types/user";
import { UserItem } from "@/shared/components/user-item";
import { UserList } from "@/shared/components/user-list";
import { requestPH } from "@/api/placeholder-api";

export default async function Users() {
  const users = await requestPH<User[]>(`/users`);
  return (
    <>
      <h1>Users Static Generation</h1>
      <UserList>
        {users.map((user) => (
          <li key={user.id}>
            <UserItem
              {...user}
              imageUrl={
                user.id % 2 === 0 ? "/user/g-user.jpg" : "/user/o-user.jpg"
              }
              mode="ssg"
            />
          </li>
        ))}
      </UserList>
    </>
  );
}
