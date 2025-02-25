import {
  TypeDostawcySkeleton,
  TypeInstrukcjeMontazuSkeleton,
  TypeKartyPomiaroweSkeleton,
  TypePodstronaProduktuSkeleton,
  TypeProduktySkeleton,
  TypeRodzajeProduktowSkeleton,
} from "@/types/contentful";
import { PlainContentfulEntry } from "./contentfulTools";

export type Manufacturer = PlainContentfulEntry<TypeDostawcySkeleton>;
export type InstallationInstructions =
  PlainContentfulEntry<TypeInstrukcjeMontazuSkeleton>;
export type ProductCategory =
  PlainContentfulEntry<TypeRodzajeProduktowSkeleton>;
export type Product = PlainContentfulEntry<TypeProduktySkeleton>;
export type ProductPageContent =
  PlainContentfulEntry<TypePodstronaProduktuSkeleton>;
export type MeasurementCard = PlainContentfulEntry<TypeKartyPomiaroweSkeleton>;
