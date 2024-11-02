import { FC } from "react";
import styles from "./style.module.css";
import { Comment } from "@/types/comment";

export const CommentItem: FC<Comment> = ({ body, email, name }) => {
  return (
    <div className={styles.comment}>
      <div className={styles.title}>
        {name} (by {email})
      </div>
      <div className={styles.text}>{body}</div>
    </div>
  );
};
