"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./style.module.css";

const LINK_DATA = [
  { href: "/", title: "Home" },
  { href: "/static-example", title: "Static" },
];

export const Header = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      {LINK_DATA.map(({ href, title }) => (
        <Link key={href} href={href} className={styles.link}>
          {title}
        </Link>
      ))}
      <button className={styles.link} onClick={router.back}>
        Back
      </button>
    </header>
  );
};
