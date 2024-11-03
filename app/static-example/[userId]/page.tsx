// !!!
// При использовании внутреннего апи статическая генерация не получится
// (сервер на момент билда еще не запущен)
// здесь пример, что SSG сработает при запросе к внешнему апи

import { requestPH } from "@/api/placeholder-api";
import { ContentList } from "@/shared/components/content-list";
import { PostItem } from "@/shared/components/post-item";
import { UserInfo } from "@/shared/components/user-info";
import { Post } from "@/types/post";
import { User } from "@/types/user";

interface UserPageProps {
  params: Promise<{ userId: string }>;
}

export const generateMetadata = async ({ params }: UserPageProps) => {
  const id = (await params).userId;
  const user = await requestPH<User>(`/users/${id}`);
  return {
    title: user.username,
  };
};

export const generateStaticParams = async () => {
  const users = await requestPH<User[]>(`/users`);
  return users.map((user) => ({ userId: user.id.toString() }));
};

export default async function UserPage({ params }: UserPageProps) {
  const { userId } = await params;
  const user = await requestPH<User>(`/users/${userId}`);
  const posts = await requestPH<Post[]>(`/posts?userId=${userId}`);
  return (
    <div>
      <div>(SSG) prerendered as static HTML </div>
      <UserInfo
        {...user}
        imageUrl={
          parseInt(userId) % 2 === 0 ? "/user/g-user.jpg" : "/user/o-user.jpg"
        }
      />
      <section>
        <h2>{user.username} Posts</h2>
        <ContentList>
          {posts?.map((post) => (
            <li key={post.id}>
              <PostItem {...post} mode="ssg" />
            </li>
          ))}
        </ContentList>
      </section>
    </div>
  );
}
