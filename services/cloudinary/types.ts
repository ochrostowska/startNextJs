export type CloudinaryImage = {
  id: number;
  height: number;
  width: number;
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
  blurDataUrl?: string;
};
