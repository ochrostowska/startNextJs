import Link from "next/link";
import { Icon } from "../Icon";
import { IconSvg, IconSvgTypes } from "../svg/IconSvg";
import styles from "./button.module.scss";

type Props = {
  label: string;
  icon?: string;
  mode?: "primary" | "secondary" | "tertiary";
  href?: string;
  onClick?: () => void;
  className?: string;
};

export const Button = ({
  label,
  icon,
  mode = "primary",
  href,
  onClick,
  className: classNameProp,
}: Props) => {
  let className = styles.btn;

  if (mode !== "primary") {
    className += ` ${styles[`btn--${mode}`]}`;
  }

  className += ` ${classNameProp}`;

  let iconComp;
  if (icon) {
    iconComp = (
      <IconSvg type={icon as IconSvgTypes} className={styles[`btn__icon`]} />
    );
  }

  const belly = (
    <>
      <Icon name="location" className={styles[`btn__icon`]} />
      {label}
    </>
  );

  if (href) {
    return (
      <Link className={className} href={href}>
        {belly}
      </Link>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {belly}
    </button>
  );
};
