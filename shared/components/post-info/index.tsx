import { FC } from "react";
import styles from "./style.module.css";
import Link from "next/link";
import { RenderMode } from "@/types/example";
import { getUserHref } from "@/utils/example";

export interface PostInfoProps {
  body: string;
  title: string;
  userId: number;
  user: { username: string };
  mode?: RenderMode;
}

export const PostInfo: FC<PostInfoProps> = ({
  body,
  title,
  userId,
  user,
  mode,
}) => {
  const href = getUserHref(userId, mode);

  return (
    <section className={styles.postInfo}>
      <h1 className={styles.postTitle}>{title}</h1>
      <p className={styles.postAuthor}>
        <span>Author:</span>
        <Link href={href} className={styles.userLink}>
          {user.username}
        </Link>
      </p>
      <p className={styles.postText}>{body}</p>
    </section>
  );
};
