import {
  TypeDostawcySkeleton,
  TypeInstrukcjeMontazuSkeleton,
} from "@/types/contentful";
import { PlainContentfulEntry } from "./contentfulTools";

export type Manufacturer = PlainContentfulEntry<TypeDostawcySkeleton>;
export type InstallationInstructions =
  PlainContentfulEntry<TypeInstrukcjeMontazuSkeleton>;
