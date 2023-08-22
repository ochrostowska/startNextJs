import { PropsWithChildren } from "react";
import styles from "./fragment.module.scss";
export const Fragment = ({ children }: PropsWithChildren) => {
  return <div className={`${styles.fragment}`}>{children}</div>;
};
