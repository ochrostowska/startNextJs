import { TypeDostawcySkeleton } from "@/types/contentful";
import { contentfulClient } from "./contentfulClient";
import { Manufacturer } from "./types";

export const getManufacturers = async (): Promise<Manufacturer[]> => {
  const entries = await contentfulClient.getEntries<TypeDostawcySkeleton>();
  return entries.items.map((item) => {
    const m: Manufacturer = { ...item.fields };
    return m;
  });
};
