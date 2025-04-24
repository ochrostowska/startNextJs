import { variants } from "@/helpers/animationVariants";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";
import { CAROUSEL_MAX_WIDTH } from "./constants";
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
  width: 100%;
  height: 90vh;
  max-width: ${CAROUSEL_MAX_WIDTH}px;
  margin: 0 auto;
  overflow: hidden;
`;

const StyledImage = styled(Image)`
  max-height: 90vh;
  max-width: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  opacity: 0;
  animation: fadeIn 0.3s ease-in forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
