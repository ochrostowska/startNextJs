import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeRodzajeProduktowFields {
    nazwa: EntryFieldTypes.Symbol;
    priorytet?: EntryFieldTypes.Integer;
    defaultDisplayString: EntryFieldTypes.Symbol;
}

export type TypeRodzajeProduktowSkeleton = EntrySkeletonType<TypeRodzajeProduktowFields, "rodzajeProduktow">;
export type TypeRodzajeProduktow<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeRodzajeProduktowSkeleton, Modifiers, Locales>;
