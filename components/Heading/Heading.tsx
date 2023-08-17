import { PropsWithChildren } from "react";
import { FONTS } from "../../lib/fontLoader";
import styles from "./heading.module.scss";

type Props = {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export const H1 = ({ children }: PropsWithChildren) => {
  const { h1 } = styles;

  return (
    <div className={FONTS.lora.className}>
      <h1 className={h1}>{children}</h1>
    </div>
  );
};

export const H2 = ({ children }: PropsWithChildren) => {
  const { h2 } = styles;

  return (
    <div className={FONTS.lora.className}>
      <h2 className={h2}>{children}</h2>
    </div>
  );
};

export const H3 = ({ children }: PropsWithChildren) => {
  const { h3 } = styles;
  return <h3 className={h3}>{children}</h3>;
};
export const H4 = ({ children }: PropsWithChildren) => {
  const { h4 } = styles;
  return <h4 className={h4}>{children}</h4>;
};

export const H5 = ({ children }: PropsWithChildren) => {
  const { h5 } = styles;
  return <h5 className={h5}>{children}</h5>;
};

export const H = ({ type, children }: PropsWithChildren<Props>) => {
  switch (type) {
    case "h1":
      return <H1>{children}</H1>;
    case "h2":
      return <H2>{children}</H2>;
    case "h3":
      return <H3>{children}</H3>;
    case "h4":
      return <H4>{children}</H4>;
    case "h5":
      return <H5>{children}</H5>;
  }
};
