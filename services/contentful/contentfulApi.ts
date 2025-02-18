import {
  TypeDostawcySkeleton,
  TypeInstrukcjeMontazuSkeleton,
} from "@/types/contentful";
import { getContentfulEntries } from "./contentfulClient";
import { InstallationInstructions, Manufacturer } from "./types";

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

export const getInstallationInstructions = async (): Promise<
  InstallationInstructions[]
> => {
  try {
    const entries = await getContentfulEntries<TypeInstrukcjeMontazuSkeleton>(
      "instrukcjeMontazu"
    );
    return entries.items.map((item) => {
      const m: InstallationInstructions = { ...item.fields };
      return m;
    });
  } catch (error) {
    console.error("Error fetching manufacturers:", error);
    return [];
  }
};
