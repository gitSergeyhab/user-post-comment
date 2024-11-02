import { FC } from "react";
import styles from "./style.module.css";
import Link from "next/link";
import { Post } from "@/types/post";

export const PostItem: FC<Post> = ({ body, id, title }) => {
  return (
    <Link href={`/posts/${id}`} className={styles.postItem}>
      <div>
        <div className={styles.title}>{title}</div>
        <div className={styles.text}>{body}</div>
      </div>
    </Link>
  );
};
