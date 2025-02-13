import { isNil } from "lodash";
import {
  fallbackTranslations,
  TranslationKeys,
  translations,
} from "./translations";

export interface TranslateVariables {
  [key: string]: string | number;
}

export type TranslateFunction = (
  key: TranslationKeys,
  variables?: TranslateVariables
) => string;

export const translate: TranslateFunction = (key, variables) => {
  let translation = translations[key];

  if (!translation) {
    translation = fallbackTranslations[key];
  }

  if (!translation) {
    return key;
  }

  if (variables) {
    return replaceVariables(translation, variables);
  }

  return translation;
};

export const useTranslate = () => {
  // todo: add router to really localize

  return { translate };
};

const replaceVariables = (
  translation: string,
  variables: TranslateVariables
) => {
  return Object.keys(variables).reduce((str, key) => {
    if (isDefined(variables[key])) {
      return str.split(`{${key}}`).join(`${variables[key]}`);
    } else {
      return str;
    }
  }, translation);
};

const isDefined = <T>(...args: T[]): boolean =>
  args.every((value) => !isNil(value));
