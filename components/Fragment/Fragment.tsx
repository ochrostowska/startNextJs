import { PropsWithChildren } from "react";
import styles from "./fragment.module.scss";

type Props = {
  borderLeftColor?: string;
  dashBottomColor?: string;
  dashTopColor?: string;
  bigPadding?: boolean;
};

export const Fragment = ({
  children,
  borderLeftColor,
  dashBottomColor,
  dashTopColor,
  bigPadding = false,
}: PropsWithChildren<Props>) => {
  return (
    <div
      className={`${styles.fragment} ${bigPadding ? styles.bigPadding : ""}`}
      style={{
        borderLeft: borderLeftColor
          ? `8px solid ${borderLeftColor}`
          : undefined,
        borderBottom: dashBottomColor
          ? `2px dashed ${dashBottomColor}`
          : undefined,
        borderTop: dashTopColor ? `2px dashed ${dashTopColor}` : undefined,
      }}
    >
      {children}
    </div>
  );
};
