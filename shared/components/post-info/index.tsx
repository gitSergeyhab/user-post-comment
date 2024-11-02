import { FC } from "react";
import styles from "./style.module.css";
import { PostWithUser } from "@/types/post";
import Link from "next/link";

export const PostInfo: FC<PostWithUser> = ({ body, title, userId, user }) => {
  return (
    <section className={styles.postInfo}>
      <h1 className={styles.postTitle}>{title}</h1>
      <p className={styles.postAuthor}>
        <span>Author:</span>
        <Link href={`/${userId}`} className={styles.userLink}>
          {user?.username}
        </Link>
      </p>
      <p className={styles.postText}>{body}</p>
    </section>
  );
};
