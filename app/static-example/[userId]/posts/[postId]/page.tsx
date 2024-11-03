// !!!
// здесь пример SSG на params с двойной вложенностью ({ postId: string; userId: string })
import { outerRequest } from "@/api/outer-api";
import { CommentItem } from "@/shared/components/comment-item";
import { ContentList } from "@/shared/components/content-list";
import { PostInfo } from "@/shared/components/post-info";
import { Post } from "@/types/post";
import { User } from "@/types/user";
import { requestPostWithUserComments } from "@/utils/requests";

interface UserPageProps {
  params: Promise<{ postId: string; userId: string }>;
}

export const generateMetadata = async ({ params }: UserPageProps) => {
  const { postId } = await params;
  const post = await outerRequest<Post>(`/posts/${postId}`);
  return { title: post.title };
};

// Подсказано ChatGPT)
export const generateStaticParams = async () => {
  const users = await outerRequest<User[]>("/users");
  const params = await Promise.all(
    users.map(async (user) => {
      const posts = await outerRequest<Post[]>(`/posts?userId=${user.id}`);
      // slice(0, 2) - предварительно загружаем и рендерим только первые 2 поста,
      // чтобы jsonplaceholder не забанил)
      return posts.slice(0, 2).map((post) => ({
        postId: post.id.toString(),
        userId: user.id.toString(),
      }));
    })
  );
  return params.flat();
};

export default async function PostPage({ params }: UserPageProps) {
  const { postId, userId } = await params;
  const { post, user, comments } = await requestPostWithUserComments({
    postId,
    userId,
  });
  return (
    <div>
      <div>(SSG) prerendered as static HTML </div>
      <PostInfo {...post} user={user} mode="ssg" />
      <section>
        <h2>Comments</h2>
        <ContentList>
          {comments?.map((comment) => (
            <li key={comment.id}>
              <CommentItem {...comment} />
            </li>
          ))}
        </ContentList>
      </section>
    </div>
  );
}
