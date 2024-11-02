import { UserModified } from "@/types/user";
import { FC } from "react";
import styles from "./style.module.css";
import Image from "next/image";

export const UserInfo: FC<UserModified> = (props) => {
  return (
    <section className={styles.userInfo}>
      <Image
        src={props.imageUrl}
        alt={props.username}
        width={100}
        height={100}
        className={styles.userImg}
      />
      <div className={styles.info}>
        <h1 className={styles.userName}>{props.username}</h1>
        <div className={styles.name}>{props.name}</div>
        <a href={`mailto:${props.email}`} className={styles.userLink}>
          email: {props.email}
        </a>
        <a href={`tel:${props.phone}`} className={styles.userLink}>
          phone:{props.phone}
        </a>
        <a
          href={`http://${props.website}`}
          target="_blank"
          className={styles.userLink}
        >
          website: {props.website}
        </a>
        <p>
          <b>Company: {props.company?.name}</b> ({props.company?.bs})
        </p>
      </div>
    </section>
  );
};
