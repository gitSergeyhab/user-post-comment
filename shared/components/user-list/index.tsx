import { FC, PropsWithChildren } from "react";

import styles from "./style.module.css";

export const UserList: FC<PropsWithChildren> = ({ children }) => (
  <ul className={styles.list}>{children}</ul>
);
