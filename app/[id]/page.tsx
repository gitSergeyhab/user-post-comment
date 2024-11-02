import { localRequest } from "@/api/local-api";
import { ContentList } from "@/shared/components/content-list";
import { PostItem } from "@/shared/components/post-item";
import { UserInfo } from "@/shared/components/user-info";
import { UserModifiedWithPosts } from "@/types/user";

interface UserPageProps {
  params: Promise<{ id: string }>;
}

export default async function UserPage({ params }: UserPageProps) {
  const { id } = await params;
  const user = await localRequest<UserModifiedWithPosts>(`/users/${id}`);
  return (
    <div>
      <UserInfo {...user} />
      <section>
        <h2>{user.username} Posts</h2>

        <ContentList>
          {user.posts?.map((post) => (
            <li key={post.id}>
              <PostItem {...post} />
            </li>
          ))}
        </ContentList>
      </section>
    </div>
  );
}
