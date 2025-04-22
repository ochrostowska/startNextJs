import { variants } from "@/helpers/animationVariants";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";
import { CarouselGalleryImageType } from "./types";

// GalleryImage.tsx - Handles the main image display with animations
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
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        >
          <Image
            src={image.url}
            priority
            blurDataURL={image.blurDataUrl}
            placeholder="blur"
            alt={alt}
            fill
          />
        </motion.div>
      </AnimatePresence>
    </ImageWrapper>
  );
};

/* Centering container for the image */
const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  aspect-ratio: 3/2;
  align-items: center;
  object-fit: contain;
  justify-content: center;
`;
