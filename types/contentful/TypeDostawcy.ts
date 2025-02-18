import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeDostawcyFields {
    nazwa: EntryFieldTypes.Symbol;
    url?: EntryFieldTypes.Symbol;
    logoUrl: EntryFieldTypes.Symbol;
    priorytet?: EntryFieldTypes.Integer;
    ukryj?: EntryFieldTypes.Boolean;
}

export type TypeDostawcySkeleton = EntrySkeletonType<TypeDostawcyFields, "dostawcy">;
export type TypeDostawcy<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeDostawcySkeleton, Modifiers, Locales>;
