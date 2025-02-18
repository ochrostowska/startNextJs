import { createClient, EntrySkeletonType } from "contentful";

const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function getContentfulEntries<T extends EntrySkeletonType>(
  contentType: string
) {
  return contentfulClient.getEntries<T>({
    content_type: contentType,
  });
}
