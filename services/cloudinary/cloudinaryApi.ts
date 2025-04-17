import {
  getCloudinaryImageWithMetadata,
  searchCloudinary,
} from "./cloudinaryClient";
import { RealisationImage } from "./types";

export async function getCloudinaryImagesData(maxResults = 100) {
  const results = await searchCloudinary(
    `${process.env.CLOUDINARY_FOLDER}`,
    maxResults
  );
  let productImageResults: RealisationImage[] = [];

  await Promise.all(
    results.resources.map(async (resource, index) => {
      const metadata = await getCloudinaryImageWithMetadata(resource.public_id);
      const title: string = metadata?.context?.custom?.caption || "";
      const desc: string = metadata?.context?.custom?.alt || "";
      const productIds: string[] = metadata?.metadata?.product || [];
      resource.metadata = { title, desc, productIds };
    })
  );

  let i = 0;
  for (let result of results.resources) {
    productImageResults.push({
      id: i,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
      metadata: result.metadata,
    });
    i++;
  }

  return productImageResults;
}
