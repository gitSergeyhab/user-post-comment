import Image from "next/image";
import { FC } from "react";
import styles from "./style.module.css";
import Link from "next/link";
import { RenderMode } from "@/types/example";
import { getUserHref } from "@/utils/example";

export interface UseItemProps {
  email: string;
  id: number;
  imageUrl: string;
  username: string;
  mode?: RenderMode;
}

export const UserItem: FC<UseItemProps> = ({
  email,
  id,
  imageUrl,
  username,
  mode,
}) => {
  const href = getUserHref(id, mode);
  return (
    <Link href={href} className={styles.userItem}>
      <Image
        key={id}
        src={imageUrl}
        alt={username}
        width={100}
        height={100}
        className={styles.userImg}
      />
      <div>
        <div className={styles.userName}>{username}</div>
        <div className={styles.userEmail}>{email}</div>
      </div>
    </Link>
  );
};
