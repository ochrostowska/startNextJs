// Utility type to unwrap Contentful field types to their primitive values
// Utility type to unwrap Contentful fields and preserve correct optionality
import { EntryFieldTypes, EntrySkeletonType } from "contentful";

// Utility type to unwrap Contentful-specific field types into plain types
// Utility type to fully unwrap Contentful field types
type UnwrapContentfulField<T> = T extends EntryFieldTypes.Symbol
  ? string
  : T extends EntryFieldTypes.Integer
  ? number
  : T extends EntryFieldTypes.Boolean
  ? boolean
  : T extends EntryFieldTypes.Array<infer U>
  ? UnwrapContentfulField<U>[]
  : T; // Keep other types unchanged

// Unwraps fields while keeping required and optional fields correctly typed
type ConvertContentfulFields<T> = {
  [K in keyof T]: T[K] extends undefined | infer U
    ? UnwrapContentfulField<U> | (undefined extends T[K] ? undefined : never)
    : UnwrapContentfulField<T[K]>;
};

// Generic type to infer a plain type from a Contentful skeleton
export type PlainContentfulEntry<T extends EntrySkeletonType> =
  ConvertContentfulFields<T["fields"]>;
