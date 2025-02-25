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

export async function getContentfulEntryWithQuery<T extends EntrySkeletonType>(
  contentType: string,
  queryParams: Record<string, unknown>
) {
  const result = await contentfulClient.getEntries<T>({
    content_type: contentType,
    limit: 1,
    ...queryParams,
  });
  if (result?.items.length === 0) {
    return null;
  }
  return result.items[0];
}
