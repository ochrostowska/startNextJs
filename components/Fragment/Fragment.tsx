import { PropsWithChildren } from "react";
import styled from "styled-components";

type Props = {
  borderLeftColor?: string;
  dashBottomColor?: string;
  dashTopColor?: string;
  bigPadding?: boolean;
  backgroundColor?: string;
  id?: string;
};

export const Fragment = ({
  children,
  borderLeftColor,
  dashBottomColor,
  dashTopColor,
  backgroundColor,
  bigPadding = false,
  id,
}: PropsWithChildren<Props>) => {
  return (
    <StyledFragment
      id={id}
      bigPadding={bigPadding}
      borderLeftColor={borderLeftColor}
      dashBottomColor={dashBottomColor}
      dashTopColor={dashTopColor}
      backgroundColor={backgroundColor}
    >
      {children}
    </StyledFragment>
  );
};

export const StyledFragment = styled.div<Props>`
  padding-top: ${(props) => (props.bigPadding ? "8rem" : "3rem")};
  padding-bottom: ${(props) => (props.bigPadding ? "8rem" : "3rem")};
  padding-left: 13rem;
  padding-right: 13rem;

  border-left: ${(props) =>
    props.borderLeftColor && `8px solid ${props.borderLeftColor}`};
  border-bottom: ${(props) =>
    props.dashBottomColor && `2px dashed ${props.dashBottomColor}`};
  border-top: ${(props) =>
    props.dashTopColor && `2px dashed ${props.dashTopColor}`};
  background-color: ${(props) => props.backgroundColor || "transparent"};

  @media ${(props) => props.theme.media.tabPort} {
    padding-top: ${(props) => (props.bigPadding ? "8rem" : "2rem")};
    padding-bottom: ${(props) => (props.bigPadding ? "8rem" : "2rem")};
    padding-left: 4rem;
    padding-right: 4rem;
  }
`;
