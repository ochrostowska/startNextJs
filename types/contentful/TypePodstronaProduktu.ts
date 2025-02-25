import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypePodstronaProduktuFields {
    produkt?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
    content: EntryFieldTypes.RichText;
}

export type TypePodstronaProduktuSkeleton = EntrySkeletonType<TypePodstronaProduktuFields, "podstronaProduktu">;
export type TypePodstronaProduktu<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePodstronaProduktuSkeleton, Modifiers, Locales>;
