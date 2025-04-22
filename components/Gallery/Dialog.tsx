import { getCloudinaryImageUrl } from "@/services/cloudinary/cloudinaryHelpers";
import { RealisationImage } from "@/services/cloudinary/types";
import { useMemo, useRef, useState } from "react";
import BlurredModalContainer from "../Modal/BlurredModalContainer";
import CarouselGallery from "./SharedModal";

export default function Modal({
  images,
  selectedPhotoId,
  onClose,
}: {
  images: RealisationImage[];
  selectedPhotoId: number;
  onClose: () => void;
}) {
  const index = useRef(
    Number(images.findIndex((img) => img.id === selectedPhotoId))
  );

  const [direction, setDirection] = useState(0);
  const [curIndex, setCurIndex] = useState(index.current);

  function handleClose() {
    onClose();
  }

  function changePhotoId(newVal: number) {
    if (newVal > index.current) {
      setDirection(1);
    } else {
      setDirection(-1);
    }
    index.current = newVal;
    setCurIndex(newVal);
  }

  const carouselImages = useMemo(() => {
    return images.map((img) => ({
      id: img.id,
      url: getCloudinaryImageUrl(img, { width: 1920 }),
      thumbnailUrl: getCloudinaryImageUrl(img, { width: 60 }),
      fullSizeImageUrl: getCloudinaryImageUrl(img),
      fileName: `${img.public_id}.jpg`,
      blurDataUrl: img.blurDataUrl,
    }));
  }, [images]);

  return (
    <BlurredModalContainer onClose={handleClose}>
      <CarouselGallery
        index={curIndex}
        direction={direction}
        images={carouselImages}
        changePhotoId={changePhotoId}
        closeModal={handleClose}
      />
    </BlurredModalContainer>
  );
}
