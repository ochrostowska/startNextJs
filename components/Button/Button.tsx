import styles from "./button.module.scss";

type Props = {
  label: string;
  icon?: string;
  tint?: string;
  mode?: "primary" | "secondary";
};

export const Button = ({ label, icon, tint, mode = "primary" }: Props) => {
  const { btn } = styles;

  return (
    <a href="#" className={btn}>
      {label}
    </a>
  );
};
