import { localRequest } from "@/api/local-api";
import { ContentList } from "@/shared/components/content-list";
import { PostItem } from "@/shared/components/post-item";
import { UserInfo } from "@/shared/components/user-info";
import { UserModifiedWithPosts } from "@/types/user";


interface UserPageProps {
  params: Promise<{ id: string }>;
}

export const generateMetadata = async ({ params }: UserPageProps) => {
  const id = (await params).id;
  const user = await localRequest<UserModifiedWithPosts>({url:`/users/${id}`});
  return {
    title: user.username,
  };
};

export default async function UserPage({ params }: UserPageProps) {
  const { id } = await params;
  const user = await localRequest<UserModifiedWithPosts & {cacheChecker: number}>({url:`/users/${id}`, cache: 'force-cache'});
  return (
    <div>
      <UserInfo {...user} />
      cacheChecker (force-cache): {user.cacheChecker}
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
