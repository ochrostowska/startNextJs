import { getCloudinaryImageUrl } from "@/services/cloudinary/cloudinaryHelpers";
import { RealisationImage } from "@/services/cloudinary/types";
import { useMemo } from "react";
import BlurredModalContainer from "../Modal/BlurredModalContainer";
import CarouselGallery from "./carousel/CarouselGallery";

export default function Modal({
  images,
  selectedPhotoId,
  onClose,
}: {
  images: RealisationImage[];
  selectedPhotoId: number;
  onClose: () => void;
}) {
  const index = Number(images.findIndex((img) => img.id === selectedPhotoId));

  function handleClose() {
    onClose();
  }

  const carouselImages = useMemo(() => {
    return images.map((img) => {
      const cloudinarySizeParam = img.width > img.height ? "width" : "height";

      return {
        id: img.id,
        url: getCloudinaryImageUrl(img, { [cloudinarySizeParam]: 1920 }),
        thumbnailUrl: getCloudinaryImageUrl(img, { [cloudinarySizeParam]: 60 }),
        fullSizeImageUrl: getCloudinaryImageUrl(img),
        fileName: `${img.public_id}.jpg`,
        blurDataUrl: img.blurDataUrl,
        width: img.width,
        height: img.height,
      };
    });
  }, [images]);

  return (
    <BlurredModalContainer onClose={handleClose}>
      <CarouselGallery
        initialIndex={index}
        images={carouselImages}
        closeModal={handleClose}
      />
    </BlurredModalContainer>
  );
}
