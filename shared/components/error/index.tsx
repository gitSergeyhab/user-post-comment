import Link from "next/link";
import { PropsWithChildren } from "react";
import styles from "./style.module.css";

export const ErrorComponent = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.notFound}>
      <h2>Error</h2>
      {children || <p>Could not load requested resource</p>}

      <Link href="/" className={styles.link}>
        Return Home
      </Link>
      <Link href="/static-example" className={styles.link}>
        Return Static
      </Link>
    </div>
  );
};
