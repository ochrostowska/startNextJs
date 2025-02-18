import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeInstrukcjeMontazuFields {
    nazwa: EntryFieldTypes.Symbol;
    url: EntryFieldTypes.Symbol;
}

export type TypeInstrukcjeMontazuSkeleton = EntrySkeletonType<TypeInstrukcjeMontazuFields, "instrukcjeMontazu">;
export type TypeInstrukcjeMontazu<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeInstrukcjeMontazuSkeleton, Modifiers, Locales>;
