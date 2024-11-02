import { FC, PropsWithChildren } from "react";

import styles from "./style.module.css";

export const ContentList: FC<PropsWithChildren> = ({ children }) => (
  <ul className={styles.list}>{children}</ul>
);
