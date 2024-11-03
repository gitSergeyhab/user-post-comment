import { FC } from "react";
import styles from "./style.module.css";
import Link from "next/link";
import { RenderMode } from "@/types/example";
import { getPostHref } from "@/utils/example";

export type PostItemProps = {
  body: string;
  id: number;
  title: string;
  mode?: RenderMode;
  userId?: number;
};
export const PostItem: FC<PostItemProps> = ({
  body,
  id,
  title,
  mode,
  userId,
}) => {
  const href = getPostHref(id, mode, userId);
  return (
    <Link href={href} className={styles.postItem}>
      <div>
        <div className={styles.title}>{title}</div>
        <div className={styles.text}>{body}</div>
      </div>
    </Link>
  );
};
