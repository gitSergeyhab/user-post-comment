import { UserItemModified } from "@/types/user";
import Image from "next/image";
import { FC } from "react";
import styles from "./style.module.css";
import Link from "next/link";

export const UserItem: FC<UserItemModified> = ({
  email,
  id,
  imageUrl,
  username,
}) => {
  return (
    <Link href={`/${id}`} className={styles.userItem}>
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
