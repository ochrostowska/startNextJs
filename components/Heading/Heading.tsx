import { PropsWithChildren } from "react";
import styled, { css } from "styled-components";

// Base Styles
const BaseStyles = css`
  font-family: "Lora";
  color: ${(props) => props.theme.colors.almostBlack};
`;

const H1Styles = css`
  ${BaseStyles}
  font-size: 5.8rem;
  line-height: 115%;
  font-weight: 600;
  margin-bottom: 2.4rem;

  span {
    transition: all 0.5s;
    box-shadow: inset 0 -2.5rem 0 ${(props) => props.theme.colors.primaryLight};

    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  @media ${(props) => props.theme.media.tabLand} {
    font-size: 4rem;
  }

  @media ${(props) => props.theme.media.phone} {
    font-size: 3rem;
    line-height: 130%;
  }

  @media ${(props) => props.theme.media.bigDesktop} {
    font-size: 6.2rem;
  }
`;

const H2Styles = css`
  ${BaseStyles}
  font-size: 4.4rem;
  line-height: 120%;

  @media ${(props) => props.theme.media.tabLand} {
    font-size: 3rem;
  }

  @media ${(props) => props.theme.media.tabPort} {
    font-size: 2.6rem;
    line-height: 130%;
  }
`;

const H3Styles = css`
  ${BaseStyles}
  font-size: 2.6rem;
  margin-bottom: 1rem;

  @media ${(props) => props.theme.media.tabPort} {
    font-size: 2.2rem;
  }
`;

const H4Styles = css`
  font-size: 2.6rem;
  font-weight: 400;
  margin-bottom: 4rem;

  @media ${(props) => props.theme.media.tabLand} {
    font-size: 2rem;
  }

  @media ${(props) => props.theme.media.tabPort} {
    font-size: 2.2rem;
    margin-bottom: 3rem;
  }
`;

const H5Styles = css`
  text-transform: uppercase;
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.6rem;
  @media ${(props) => props.theme.media.tabLand} {
    font-size: 1.6rem;
  }
`;

const TinyLabelStyles = css`
  font-size: 1.4rem;
  transition: all 0.2s;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  @media ${(props) => props.theme.media.tabPort} {
    font-size: 1.1rem;
  }
`;

export const TinyLabel = styled.p`
  ${TinyLabelStyles}
`;

export const H1 = styled.h1`
  ${H1Styles}
`;

export const H2 = styled.h2`
  ${H2Styles}
`;

export const H3 = styled.h3`
  ${H3Styles}
`;

export const H4 = styled.h4`
  ${H4Styles}
`;

export const H5 = styled.h5`
  ${H5Styles}
`;

export const CenteredP = styled.p`
  text-align: center;
`;

type Props = {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
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
    default:
      return null;
  }
};
