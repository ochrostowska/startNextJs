import COLORS from "@/styles/colors";
import styled from "styled-components";
import { CenteredP, H5 } from "../Heading";
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
        <GalleryItem {...rest} href={href} />
        <Label>{label}</Label>
        <CenteredP>{subtitle}</CenteredP>
      </Anchor>
    </Wrapper>
  );
};

const Label = styled(H5)`
  transition: all 0.2s;
  margin-top: 2rem;
  text-align: center;
`;

const Anchor = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    ${GalleryItemStyled} {
      box-shadow: 6px 6px 0px 0px ${COLORS.primaryDark};
      scale: 1.05;
    }
  }
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
