import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export const searchCloudinary = async (folder: string, maxResults: number) => {
  return cloudinary.v2.search
    .expression(`folder:${folder}/*`)
    .sort_by("public_id", "desc")
    .max_results(maxResults)
    .execute();
};

export const getCloudinaryImageWithMetadata = async (publicId: string) => {
  return cloudinary.v2.api.resource(publicId, {
    image_metadata: true,
  });
};

export default cloudinary;
