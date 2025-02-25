import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeProduktySkeleton } from "./TypeProdukty";

export interface TypeInstrukcjeMontazuFields {
    nazwa: EntryFieldTypes.Symbol;
    url: EntryFieldTypes.Symbol;
    produkt?: EntryFieldTypes.EntryLink<TypeProduktySkeleton>;
}

export type TypeInstrukcjeMontazuSkeleton = EntrySkeletonType<TypeInstrukcjeMontazuFields, "instrukcjeMontazu">;
export type TypeInstrukcjeMontazu<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeInstrukcjeMontazuSkeleton, Modifiers, Locales>;
