import Link from "next/link";
import { PropsWithChildren } from "react";
import styles from "./style.module.css";

export const NotFoundComponent = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.notFound}>
      <h2>Not Found</h2>
      {children || <p>Could not find requested resource</p>}

      <Link href="/" className={styles.link}>
        Return Home
      </Link>
      <Link href="/static-example" className={styles.link}>
        Return Static
      </Link>
    </div>
  );
};
