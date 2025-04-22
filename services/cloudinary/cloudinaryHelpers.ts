import { CloudinaryImage } from "./types";

type CloudinaryImageParams = {
  width?: number;
  quality?: number;
  format?: string;
};

export const getCloudinaryImageUrl = (
  image: CloudinaryImage,
  params: CloudinaryImageParams = {}
) => {
  const { width, quality, format } = params;
  const transformationsQuery: string[] = [];
  if (width) {
    transformationsQuery.push(`w_${width}`);
  }
  if (quality) {
    transformationsQuery.push(`q_${quality}`);
  }
  if (format) {
    transformationsQuery.push(`f_${format}`);
  }

  const transformationsQueryString = transformationsQuery.join(",");
  return `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${transformationsQueryString}/${image.public_id}.${image.format}`;
};

const cache = new Map<CloudinaryImage, string>();

export default async function getBase64ImageUrl(
  image: CloudinaryImage
): Promise<string> {
  let url = cache.get(image);
  if (url) {
    return url;
  }

  const imageUrl = getCloudinaryImageUrl(image, {
    width: 8,
    quality: 70,
    format: "jpg",
  });
  const response = await fetch(imageUrl);
  const buffer = await response.arrayBuffer();
  // const minified = await imagemin.buffer(Buffer.from(buffer), {
  //   plugins: [imageminJpegtran()],
  // });

  const base64 = Buffer.from(buffer).toString("base64");
  console.log("base64", base64);
  url = `data:image/jpeg;base64,${base64}`;
  cache.set(image, url);
  return url;
}
