"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import styles from "./style.module.css";

export const Header = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <Link className={styles.link} href="/">
        Home
      </Link>
      <button className={styles.link} onClick={router.back}>
        Back
      </button>
    </header>
  );
};
