import COLORS from "@/styles/colors";
import styled from "styled-components";
import {
  GalleryItem,
  Props as GalleryItemProps,
  GalleryItemStyled,
} from "./GalleryItem";

export type Props = GalleryItemProps & {
  label: string;
  subtitle: string;
};

export const LabeledGalleryItem = ({
  label,
  href,
  subtitle,
  ...rest
}: Props) => {
  return (
    <Wrapper>
      <Anchor href={href}>
        <div>
          <GalleryItem {...rest} href={href} />
        </div>
        <Label>{label}</Label>
        <Subtitle>{subtitle}</Subtitle>
      </Anchor>
    </Wrapper>
  );
};

const Label = styled.p`
  font-size: 1.8rem;
  transition: all 0.2s;
  font-weight: 400;
  text-transform: uppercase;
  margin-top: 2rem;
  text-align: center;
  letter-spacing: 0.3rem;
  @media ${(props) => props.theme.media.tabPort} {
    font-size: 1.6rem;
  }
  @media ${(props) => props.theme.media.phone} {
    font-size: 2rem;
  }
`;

const Anchor = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    ${Label} {
      box-shadow: inset 0 -1.6rem 0 ${(props) => props.theme.colors.primaryLight};
    }
    ${GalleryItemStyled} {
      box-shadow: 6px 6px 0px 0px ${COLORS.primaryDark};
      scale: 1.04;
    }
  }
  cursor: pointer;
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 1.6rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  @media ${(props) => props.theme.media.phone} {
    margin-top: 2em;
    margin-bottom: 2em;
  }
`;
