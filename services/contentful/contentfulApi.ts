import { TypeDostawcySkeleton } from "@/types/contentful";
import { getContentfulEntries } from "./contentfulClient";
import { Manufacturer } from "./types";

export const getManufacturers = async (): Promise<Manufacturer[]> => {
  const entries = await getContentfulEntries<TypeDostawcySkeleton>("dostawcy");
  return entries.items.map((item) => {
    const m: Manufacturer = { ...item.fields };
    return m;
  });
};
