import { MotionConfig } from "framer-motion";
import { useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";
import useKeypress from "react-use-keypress";
import styled from "styled-components";

import { range } from "@/helpers/range";
import { NAV_BAR_Z_INDEX } from "@/layout/navbar";
import { useTranslate } from "@/translations";
import CarouselGalleryControls from "./CarouselGalleryControls";
import { CarouselGalleryImage } from "./CarouselGalleryImage";
import { CarouselGalleryImageType } from "./types";

type Props = {
  initialIndex: number;
  images?: CarouselGalleryImageType[];
  closeModal: () => void;
};

export default function CarouselGallery({
  initialIndex,
  images = [],
  closeModal,
}: Props) {
  const { translate } = useTranslate();
  const indexRef = useRef(initialIndex);

  const [direction, setDirection] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const currentImage = images[indexRef.current];

  const changePhotoId = (newIndex: number) => {
    setDirection(newIndex > indexRef.current ? 1 : -1);
    indexRef.current = newIndex;
    setCurrentIndex(newIndex);
  };

  const filteredImages = images.filter((img) =>
    range(indexRef.current - 15, indexRef.current + 15).includes(img.id)
  );

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (indexRef.current < images.length - 1) {
        changePhotoId(indexRef.current + 1);
      }
    },
    onSwipedRight: () => {
      if (indexRef.current > 0) {
        changePhotoId(indexRef.current - 1);
      }
    },
    trackMouse: true,
  });

  useKeypress("ArrowRight", () => {
    if (indexRef.current < images.length - 1) {
      changePhotoId(indexRef.current + 1);
    }
  });

  useKeypress("ArrowLeft", () => {
    if (indexRef.current > 0) {
      changePhotoId(indexRef.current - 1);
    }
  });

  const aspectRatio = currentImage.width / currentImage.height;

  return (
    <MotionConfig
      transition={{
        x: { type: "spring", stiffness: 400, damping: 35 },
        opacity: { duration: 0.2 },
      }}
    >
      <ModalWrapper {...swipeHandlers}>
        <CarouselGalleryImage
          image={currentImage}
          direction={direction}
          alt={translate("gallery.alt")}
        />

        <OverlayContainer>
          <CarouselGalleryControls
            index={currentIndex}
            numberOfImages={images.length}
            onChangeIndex={changePhotoId}
            onClose={closeModal}
            fullSizeImageUrl={currentImage?.fullSizeImageUrl}
            fileName={currentImage?.fileName}
            direction={direction}
          />
        </OverlayContainer>
      </ModalWrapper>
    </MotionConfig>
  );
}

const ModalWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: ${NAV_BAR_Z_INDEX + 1};
`;

const OverlayContainer = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none; /* allow clicks to pass through unless overridden inside children */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
`;
