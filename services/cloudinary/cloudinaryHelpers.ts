import { CloudinaryImage } from "./types";

type CloudinaryImageParams = {
  width?: number;
};

export const getCloudinaryImageUrl = (
  image: CloudinaryImage,
  params: CloudinaryImageParams = {}
) => {
  const { width } = params;
  let transformationsQuery = "";
  if (width) {
    transformationsQuery = `w_${width}`;
  }

  return `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${transformationsQuery}/${image.public_id}.${image.format}`;
};
