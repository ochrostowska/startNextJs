import { AnimatePresence, motion } from "framer-motion";

import { NAV_BAR_Z_INDEX } from "@/layout/navbar";
import { useTranslate } from "@/translations";
import Image from "next/image";
import styled from "styled-components";
import { CarouselGalleryImageType } from "./types";

interface Props {
  index: number;
  images: CarouselGalleryImageType[];
  changePhotoId: (newVal: number) => void;
}

export default function CarouselGalleryThumbnails({
  index,
  images,
  changePhotoId,
}: Props) {
  const { translate } = useTranslate();

  return (
    <BottomNavBar>
      <ThumbnailsWrapper initial={false}>
        <AnimatePresence initial={false}>
          {images.map((image, thumbIndex) => (
            <ThumbnailButton
              key={image.id}
              active={image.id === index}
              isFirst={thumbIndex === 0}
              isLast={thumbIndex === images.length - 1}
              initial={{
                width: "0%",
                x: `${Math.max((index - 1) * -100, 15 * -100)}%`,
              }}
              animate={{
                scale: image.id === index ? 1.25 : 1,
                width: "100%",
                x: `${Math.max(index * -100, 15 * -100)}%`,
              }}
              exit={{ width: "0%" }}
              onClick={() => changePhotoId(image.id)}
            >
              <ThumbnailImage
                src={image.thumbnailUrl}
                alt={translate("gallery.altThumbnail")}
                width={60}
                height={100}
                active={image.id === index}
              />
            </ThumbnailButton>
          ))}
        </AnimatePresence>
      </ThumbnailsWrapper>
    </BottomNavBar>
  );
}

/* Bottom navigation (thumbnail bar) container */
const BottomNavBar = styled.div`
  position: fixed;
  bottom: 0;
  z-index: ${NAV_BAR_Z_INDEX + 1};
  width: 100%;
  overflow: hidden;
`;

/* Container for thumbnails with Framer Motion */
const ThumbnailsWrapper = styled(motion.div)`
  margin: 1.5rem auto; /* approximates mt-6 mb-6 */
  display: flex;
  background-color: "pink";
  aspect-ratio: 3/2;
  height: 5rem; /* Tailwind's h-14 */
`;

/* Props for thumbnail button */
interface ThumbnailProps {
  active?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
}

/* Thumbnail button styles */
const ThumbnailButton = styled(motion.button)<ThumbnailProps>`
  position: relative;
  display: inline-block;
  overflow: hidden;
  cursor: pointer;
  outline: none;
  z-index: ${({ active }) => (active ? 20 : 10)};

  ${({ isFirst }) =>
    isFirst &&
    `
        border-top-left-radius: 0.375rem;
        border-bottom-left-radius: 0.375rem;
    `}
  ${({ isLast }) =>
    isLast &&
    `
        border-top-right-radius: 0.375rem;
        border-bottom-right-radius: 0.375rem;
    `}
    ${({ active }) =>
    active &&
    `
        box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.5);
    `}
`;

/* Thumbnail image styles */
const ThumbnailImage = styled(Image)<{ active?: boolean }>`
  height: 100%;
  object-fit: cover;
  transition: filter 0.2s ease;
  width: 5rem;
  height: 5rem;
  filter: ${({ active }) =>
    active ? "brightness(1.1)" : "brightness(0.5) contrast(1.25)"};

  &:hover {
    filter: ${({ active }) =>
      active ? "brightness(1.1)" : "brightness(0.75) contrast(1.25)"};
  }
`;
