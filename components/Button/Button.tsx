import {
  faArrowRightLong,
  faEye,
  faLocation,
  faRuler,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import styled, { css } from "styled-components";

export const BUTTON_ICONS = [
  "eye",
  "location",
  "arrow-right",
  "ruler",
  "installation",
] as const;

export type ButtonIcon = (typeof BUTTON_ICONS)[number];

export function isValidButtonIcon(icon: string): icon is ButtonIcon {
  return BUTTON_ICONS.includes(icon as ButtonIcon);
}

const iconToFaIcon = (icon: ButtonIcon) => {
  switch (icon) {
    case "eye":
      return faEye;
    case "location":
      return faLocation;
    case "arrow-right":
      return faArrowRightLong;
    case "ruler":
      return faRuler;
    case "installation":
      return faScrewdriverWrench;
  }
};

type Props = {
  label: string;
  variant?: "secondary" | "tertiary";
  href?: string;
  icon?: ButtonIcon;
  svgIcon?: string;
  onClick?: () => void;
};

export const Button = ({
  label,
  variant,
  icon,
  svgIcon,
  href,
  onClick,
}: Props) => {
  const IconComponent = useMemo(() => {
    const iconComponent = icon ? iconToFaIcon(icon) : null;
    return iconComponent ? (
      <Icon height="1.6rem" icon={iconComponent} />
    ) : svgIcon ? (
      <Image width={40} height={40} src={svgIcon} alt={label} />
    ) : null;
  }, [icon, svgIcon, label]);

  if (href) {
    return (
      <Link href={href} passHref legacyBehavior>
        <ButtonLink variant={variant}>
          {IconComponent}
          {label}
        </ButtonLink>
      </Link>
    );
  }

  return (
    <ButtonB variant={variant} onClick={onClick}>
      {IconComponent}
      {label}
    </ButtonB>
  );
};

const boxShadow = "8px 8px 0px 0px";
const boxShadowHover = "6px 6px 0px 0px";

type ButtonBaseProps = Pick<Props, "variant">;

// Base button styles
const ButtonBase = css<ButtonBaseProps>`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.almostBlack};
  text-transform: uppercase;
  text-decoration: none;
  padding: 1.2rem 2.4rem;
  transition: all 0.2s;
  font-size: 1.8rem;
  font-family: Poppins, sans-serif;
  font-weight: 500;
  letter-spacing: 0.4rem;
  box-shadow: ${boxShadow} ${(props) => props.theme.colors.primary};
  border: 2px solid ${(props) => props.theme.colors.almostBlack};
  cursor: pointer;

  @media ${(props) => props.theme.media.tabLand} {
    font-size: 1.6rem;
    padding: 1.1rem 2.2rem;
  }

  @media ${(props) => props.theme.media.phone} {
    font-size: 1.4rem;
    padding: 1.1rem 2.2rem;
    letter-spacing: 0.3rem;
  }

  &:hover {
    box-shadow: ${boxShadowHover} ${(props) => props.theme.colors.primary};
  }

  ${({ variant, theme }) =>
    variant === "tertiary" &&
    css`
      box-shadow: ${boxShadow} ${theme.colors.tertiaryLight};

      &:hover {
        box-shadow: ${boxShadowHover} ${theme.colors.tertiaryLight};
      }
    `}

  ${({ variant, theme }) =>
    variant === "secondary" &&
    css`
      box-shadow: ${boxShadow} ${theme.colors.secondaryLight};

      &:hover {
        box-shadow: ${boxShadowHover} ${theme.colors.secondaryLight};
      }
    `}

  &:active,
  &:focus {
    transform: translate(2px, 2px);
    box-shadow: none;
  }
`;

const StyledBase = styled.div<ButtonBaseProps>`
  ${ButtonBase}
`;

export const ButtonB = styled(StyledBase).attrs({ as: "button" })``;
export const ButtonLink = styled(StyledBase).attrs({ as: "a" })``;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 1.6rem;
  color: ${(props) => props.theme.colors.almostBlack};
`;
