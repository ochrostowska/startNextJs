import {
  getCloudinaryImageWithMetadata,
  searchCloudinary,
} from "./cloudinaryClient";
import getBase64ImageUrl from "./cloudinaryHelpers";
import { CloudinaryImage, RealisationImage } from "./types";

export async function getCloudinaryImagesData(maxResults = 100) {
  const results = await searchCloudinary(
    `${process.env.CLOUDINARY_FOLDER}`,
    maxResults
  );

  await Promise.all(
    results.resources.map(async (resource, index) => {
      const metadata = await getCloudinaryImageWithMetadata(resource.public_id);
      const title: string = metadata?.context?.custom?.caption || "";
      const desc: string = metadata?.context?.custom?.alt || "";
      const productIds: string[] = metadata?.metadata?.product || [];
      resource.metadata = { title, desc, productIds };
    })
  );

  const blurImagePromises = results.resources.map((image: CloudinaryImage) => {
    return getBase64ImageUrl(image);
  });
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

  const productImageResults: RealisationImage[] = [];
  let i = 0;
  for (let result of results.resources) {
    productImageResults.push({
      id: i,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
      metadata: result.metadata,
      blurDataUrl: imagesWithBlurDataUrls[i],
    });
    i++;
  }

  return productImageResults;
}
