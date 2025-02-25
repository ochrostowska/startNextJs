import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeRodzajeProduktowSkeleton } from "./TypeRodzajeProduktow";

export interface TypeProduktyFields {
    nazwa: EntryFieldTypes.Symbol;
    rodzaj?: EntryFieldTypes.EntryLink<TypeRodzajeProduktowSkeleton>;
    priorytet?: EntryFieldTypes.Integer;
    defaultDisplayString: EntryFieldTypes.Symbol;
}

export type TypeProduktySkeleton = EntrySkeletonType<TypeProduktyFields, "produkty">;
export type TypeProdukty<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeProduktySkeleton, Modifiers, Locales>;
