export type CloudinaryImage = {
  id: number;
  height: string;
  width: string;
  public_id: string;
  format: string;
};

export type RealisationImageMetadata = {
  title: string;
  desc: string;
  productIds: string[];
};

export type RealisationImage = CloudinaryImage & {
  metadata?: RealisationImageMetadata;
};
