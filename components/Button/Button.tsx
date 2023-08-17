import styles from "./button.module.scss";

type Props = {
  label: string;
  icon?: string;
  mode?: "primary" | "secondary" | "tertiary";
};

export const Button = ({ label, icon, mode = "primary" }: Props) => {
  let className = styles.btn;

  if (mode !== "primary") {
    className += ` ${styles[`btn--${mode}`]}`;
  }

  return (
    <a href="#" className={className}>
      {label}
    </a>
  );
};
