import { FC } from "react";
import styles from "./style.module.css";
import { Size } from "@/types/ui";

export interface LoaderProps {
  size?: Size;
}
const Loader: FC<LoaderProps> = ({ size = "medium" }) => {
  const classes = `${styles.loader} ${styles[`loader__${size}`]}`;
  return <div className={classes}></div>;
};

export default Loader;
