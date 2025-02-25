import {
  TypeDostawcySkeleton,
  TypeInstrukcjeMontazuSkeleton,
  TypeKartyPomiaroweSkeleton,
  TypePodstronaProduktuSkeleton,
  TypeProduktySkeleton,
  TypeRodzajeProduktowSkeleton,
} from "@/types/contentful";
import { Asset } from "contentful";
import { filter } from "lodash";
import {
  getContentfulEntries,
  getContentfulEntryWithQuery,
} from "./contentfulClient";
import {
  InstallationInstructions,
  Manufacturer,
  MeasurementCard,
  Product,
  ProductCategory,
} from "./types";

enum ContentType {
  Manufacturers = "dostawcy",
  MeasurementCard = "kartyPomiarowe",
  InstallationInstructions = "instrukcjeMontazu",
  ProductCategories = "rodzajeProduktow",
  Products = "produkty",
  ProductPageContent = "podstronaProduktu",
}

export const getManufacturers = async (): Promise<Manufacturer[]> => {
  try {
    const entries = await getContentfulEntries<TypeDostawcySkeleton>(
      ContentType.Manufacturers
    );
    return entries.items.map((item) => ({ id: item.sys.id, ...item.fields }));
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
      ContentType.InstallationInstructions
    );

    console.log("getInstallationInstructions entries", entries.items);

    return entries.items.map((item) => {
      const produkt = item.fields.produkt?.sys?.id ?? null;
      console.log("getInstallationInstructions produkt", produkt);
      return { id: item.sys.id, ...item.fields, produkt };
    });
  } catch (error) {
    console.error("Error fetching installation instructions:", error);
    return [];
  }
};

export const getMeasurementCards = async (): Promise<MeasurementCard[]> => {
  try {
    const entries = await getContentfulEntries<TypeKartyPomiaroweSkeleton>(
      ContentType.MeasurementCard
    );

    console.log("getMeasurementCards entries", entries.items);

    const cards = entries.items.map((item) => {
      let fileAsset = item.fields.karta
        ? (item.fields.karta as Asset)
        : undefined;

      const fileUrl = fileAsset?.fields?.file?.url
        ? (fileAsset?.fields?.file?.url as string)
        : null;

      return { id: item.sys.id, ...item.fields, karta: fileUrl };
    });

    // remove cards without a file
    return filter(cards, (card) => card.karta !== null);
  } catch (error) {
    console.error("Error fetching measurement cards:", error);
    return [];
  }
};

export const getProductCategories = async (): Promise<ProductCategory[]> => {
  try {
    const entries = await getContentfulEntries<TypeRodzajeProduktowSkeleton>(
      ContentType.ProductCategories
    );
    return entries.items.map((item) => ({ id: item.sys.id, ...item.fields }));
  } catch (error) {
    console.error("Error fetching productCategories:", error);
    return [];
  }
};

export const getProducts = async (): Promise<Product[]> => {
  try {
    const entries = await getContentfulEntries<TypeProduktySkeleton>(
      ContentType.Products
    );
    return entries.items.map((item) => {
      const rodzaj = item.fields.rodzaj?.sys.id;
      return { ...item.fields, rodzaj, id: item.sys.id };
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const getProductPageContent = async (
  productId: string
): Promise<any | null> => {
  try {
    const entry =
      await getContentfulEntryWithQuery<TypePodstronaProduktuSkeleton>(
        ContentType.ProductPageContent,
        { "fields.produkt.sys.id": productId }
      );
    console.log("getProductPageContent entry", JSON.stringify(entry));
    return entry;
  } catch (error) {
    console.error("Error fetching product page content:", error);
    return null;
  }
};
