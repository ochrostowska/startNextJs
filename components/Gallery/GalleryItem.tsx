import { getScaledImageSize, prefetchImageSize } from "@/helpers/image";
import NextImage from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";
import COLORS from "../../styles/colorss.module.scss";

export type Props = {
  size: number;
  src: string;
  href: string;
  alt: string;
};

export const GalleryItem = ({ src, href, alt, size = 100 }: Props) => {
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [scaledImageSize, setScaledImageSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    prefetchImageSize(src).then(({ width, height }) => {
      console.log(`Image dimensions: ${width}x${height}`);
      setImageSize({ width, height });
    });
  }, [src]);

  useEffect(() => {
    const { width, height } = imageSize;
    const scaledSize = getScaledImageSize(size, width, height);
    setScaledImageSize(scaledSize);
  }, [imageSize, size]);

  return (
    <GalleryItemStyled
      src={src}
      width={scaledImageSize.width}
      height={scaledImageSize.height}
      alt={alt}
    />
  );
};

export const GalleryItemStyled = styled(NextImage)`
  background-color: white;
  box-shadow: 8px 8px 0px 0px ${COLORS.colorPrimaryLight2};
  transition: all 0.2s;
  object-fit: contain;

  &:hover {
    box-shadow: 6px 6px 0px 0px ${COLORS.colorPrimaryDark};
    scale: 1.04;
  }
`;
