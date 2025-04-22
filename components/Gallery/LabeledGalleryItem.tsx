import COLORS from "@/styles/colors";
import styled from "styled-components";
import { CenteredP, H5 } from "../Heading";
import {
  GalleryItem,
  Props as GalleryItemProps,
  GalleryItemStyled,
} from "./GalleryItem";

export type Props = Omit<GalleryItemProps, "href"> & {
  label: string;
  subtitle: string;
  onClick: () => void;
};

export const LabeledGalleryItem = ({
  label,
  subtitle,
  onClick,
  ...rest
}: Props) => {
  return (
    <Wrapper>
      <ClickableDiv onClick={onClick}>
        <GalleryItem {...rest} />
        <Label>{label}</Label>
        <CenteredP>{subtitle}</CenteredP>
      </ClickableDiv>
    </Wrapper>
  );
};

const Label = styled(H5)`
  transition: all 0.2s;
  margin-top: 2rem;
  text-align: center;
`;

const ClickableDiv = styled.div`
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
