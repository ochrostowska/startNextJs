import { range } from "@/helpers/range";
import { MotionConfig } from "framer-motion";

import { useTranslate } from "@/translations";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import useKeypress from "react-use-keypress";
import styled from "styled-components";
import CarouselGalleryControls from "./carousel/CarouselGalleryControls";
import { CarouselGalleryImage } from "./carousel/CarouselGalleryImage";
import CarouselGalleryThumbnails from "./carousel/CarouselGalleryThumbnails";
import { CarouselGalleryImageType } from "./carousel/types";

export interface SharedModalProps {
  index: number;
  images?: CarouselGalleryImageType[];
  currentPhoto?: CarouselGalleryImageType;
  changePhotoId: (newVal: number) => void;
  closeModal: () => void;
  direction?: number;
}

export default function CarouselGallery({
  index,
  images,
  changePhotoId,
  closeModal,
  currentPhoto,
  direction,
}: SharedModalProps) {
  const { translate } = useTranslate();
  const [loaded, setLoaded] = useState(false);

  const filteredImages = images?.filter((img: CarouselGalleryImageType) =>
    range(index - 15, index + 15).includes(img.id)
  );

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (index < images?.length - 1) {
        changePhotoId(index + 1);
      }
    },
    onSwipedRight: () => {
      if (index > 0) {
        changePhotoId(index - 1);
      }
    },
    trackMouse: true,
  });

  useKeypress("ArrowRight", () => {
    if (index + 1 < images.length) {
      changePhotoId(index + 1);
    }
  });

  useKeypress("ArrowLeft", () => {
    if (index > 0) {
      changePhotoId(index - 1);
    }
  });

  const currentImage = images?.length ? images[index] : currentPhoto;

  return (
    <MotionConfig
      transition={{
        x: { type: "spring", stiffness: 400, damping: 35 },
        opacity: { duration: 0.2 },
      }}
    >
      <ModalWrapper {...handlers}>
        <CarouselGalleryImage
          image={currentImage}
          direction={direction}
          alt={translate("gallery.alt")}
        />

        <OverlayContainer>
          <CarouselGalleryControls
            index={index}
            numberOfImages={images.length}
            onChangeIndex={changePhotoId}
            onClose={closeModal}
            fullSizeImageUrl={currentImage.fullSizeImageUrl}
            fileName={currentImage.fileName}
            direction={direction}
          />

          <CarouselGalleryThumbnails
            index={index}
            images={filteredImages}
            changePhotoId={changePhotoId}
          />
        </OverlayContainer>
      </ModalWrapper>
    </MotionConfig>
  );
}
/* ─── STYLED COMPONENTS ───────────────────────────────────────────── */

/* Outer Modal Container */
const ModalWrapper = styled.div`
  position: relative;
  z-index: 50;
  display: flex;
  width: 100%;
  max-width: 1280px; /* corresponds roughly to Tailwind's max-w-7xl */
  align-items: center;
  margin: 0 auto;
`;

/* Container for overlay elements: buttons and bottom navigation */
const OverlayContainer = styled.div`
  position: absolute;
  inset: 0;
  margin: 0 auto;
  display: flex;
  width: 100%;
  max-width: 1280px;
  align-items: center;
  justify-content: center;
`;
