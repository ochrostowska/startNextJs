import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryLight: string;
      primaryLight2: string;
      primaryDark: string;
      secondaryLight: string;
      secondaryDark: string;
      tertiaryLight: string;
      tertiaryDark: string;
      greyLight1: string;
      greyLight2: string;
      greyDark: string;
      greyDark2: string;
      greyDark3: string;
      white: string;
      black: string;
      almostBlack: string;
    };
  }
}
