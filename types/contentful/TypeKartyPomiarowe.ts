import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeKartyPomiaroweFields {
  karta?: EntryFieldTypes.AssetLink;
  nazwa: EntryFieldTypes.Symbol;
}

export type TypeKartyPomiaroweSkeleton = EntrySkeletonType<
  TypeKartyPomiaroweFields,
  "kartyPomiarowe"
>;
export type TypeKartyPomiarowe<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeKartyPomiaroweSkeleton, Modifiers, Locales>;
