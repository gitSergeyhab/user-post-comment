import { localRequest } from "@/api/local-api";
import { CommentItem } from "@/shared/components/comment-item";
import { ContentList } from "@/shared/components/content-list";
import { PostInfo } from "@/shared/components/post-info";
import { PostWithComments } from "@/types/post";

export const generateMetadata = async ({ params }: UserPageProps) => {
  const { postId } = await params;
  const post = await localRequest<PostWithComments>({url:`/posts/${postId}`});
  return {
    title: post.title,
  };
};

interface UserPageProps {
  params: Promise<{ postId: string }>;
}

export default async function PostPage({ params }: UserPageProps) {
  const { postId } = await params;
  const post = await localRequest<PostWithComments & { cacheChecker: number }>({url:`/posts/${postId}`, revalidate:20 });
  return (
    <div>
      <PostInfo {...post} />
      cacheChecker (revalidate=20s): {post.cacheChecker}

      <section>
        <h2>Comments</h2>

        <ContentList>
          {post.comments?.map((comment) => (
            <li key={comment.id}>
              <CommentItem {...comment} />
            </li>
          ))}
        </ContentList>
      </section>
    </div>
  );
}
