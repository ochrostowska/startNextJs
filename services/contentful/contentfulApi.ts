import { TypeDostawcySkeleton } from "@/types/contentful";
import { getContentfulEntries } from "./contentfulClient";
import { Manufacturer } from "./types";

export const getManufacturers = async (): Promise<Manufacturer[]> => {
  try {
    const entries = await getContentfulEntries<TypeDostawcySkeleton>(
      "dostawcy"
    );
    return entries.items.map((item) => {
      const m: Manufacturer = { ...item.fields };
      return m;
    });
  } catch (error) {
    console.error("Error fetching manufacturers:", error);
    return [];
  }
};
