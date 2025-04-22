import { variants } from "@/helpers/animationVariants";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";
import { CarouselGalleryImageType } from "./types";

type GalleryImageProps = {
  direction: number;
  alt: string;
  image: CarouselGalleryImageType;
};

export const CarouselGalleryImage = ({
  direction,
  alt,
  image,
}: GalleryImageProps) => {
  return (
    <ImageWrapper>
      <AnimatePresence mode="popLayout" initial={false} custom={direction}>
        <motion.div
          key={image.id}
          variants={variants}
          custom={direction}
          initial="enter"
          animate="center"
          exit="exit"
        >
          <StyledImage
            src={image.url}
            alt={alt}
            width={image.width}
            height={image.height}
            placeholder="blur"
            blurDataURL={image.blurDataUrl}
            priority
          />
        </motion.div>
      </AnimatePresence>
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 90vh;
  width: 100%;
  overflow: hidden;
`;

const StyledImage = styled(Image)`
  max-height: 90vh;
  max-width: 100%;
  height: auto;
  width: auto;
  object-fit: contain;
`;
