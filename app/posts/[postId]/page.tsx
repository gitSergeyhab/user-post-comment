import { localRequest } from "@/api/local-api";
import { CommentItem } from "@/shared/components/comment-item";
import { ContentList } from "@/shared/components/content-list";
import { PostInfo } from "@/shared/components/post-info";
import { PostWithComments } from "@/types/post";

export const generateMetadata = async ({ params }: UserPageProps) => {
  const { postId } = await params;
  const post = await localRequest<PostWithComments>(`/posts/${postId}`);
  return {
    title: post.title,
  };
};

interface UserPageProps {
  params: Promise<{ postId: string }>;
}

export default async function PostPage({ params }: UserPageProps) {
  const { postId } = await params;
  const post = await localRequest<PostWithComments>(`/posts/${postId}`);
  return (
    <div>
      <PostInfo {...post} />
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
