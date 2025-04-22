import { getScaledImageSize } from "@/helpers/image";
import NextImage from "next/image";
import { useEffect, useState } from "react";
import styled, { CSSProperties } from "styled-components";
import COLORS from "../../styles/colorss.module.scss";

export type Props = {
  size: number;
  src: string;
  href?: string;
  alt: string;
  style?: CSSProperties;
  width?: number;
  height?: number;
};

export const GalleryItem = ({
  src,
  href,
  alt,
  size = 100,
  style = {},
  width = 0,
  height = 0,
}: Props) => {
  const [scaledImageSize, setScaledImageSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const scaledSize = getScaledImageSize(size, width, height);
    setScaledImageSize(scaledSize);
  }, [size, width, height]);

  return (
    <GalleryItemStyled
      src={src}
      width={scaledImageSize.width}
      height={scaledImageSize.height}
      alt={alt}
      applyHoverTransition={!!href}
      priority
      style={{ ...style }}
    />
  );
};

export const GalleryItemStyled = styled(NextImage)<{
  applyHoverTransition: boolean;
}>`
  background-color: white;
  box-shadow: 8px 8px 0px 0px ${COLORS.colorPrimaryLight2};
  transition: all 0.2s;
  object-fit: contain;

  ${({ applyHoverTransition }) =>
    applyHoverTransition &&
    `
    &:hover {
      box-shadow: 6px 6px 0px 0px ${COLORS.colorPrimaryDark};
      scale: 1.04;
    }
  `}
`;
