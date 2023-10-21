import { DefaultTheme } from "styled-components";
import ANIMATIONS from "./animations";
import COLORS from "./colors";

const sizes = {
  phone: 37.5, // 600px
  tabPort: 56.25, // 900px
  tabLand: 75, // 1200px
  bigDesktop: 112.5, // 1800px
};

export const media = {
  phone: `(max-width: ${sizes.phone}em)`,
  tabPort: `(max-width: ${sizes.tabPort}em)`,
  tabLand: `(max-width: ${sizes.tabLand}em)`,
  bigDesktop: `(min-width: ${sizes.bigDesktop}em)`,
};

const constants = {
  // FONT
  defaultFontSize: "1.6rem",

  // OFFSETS
  fragmentHorizontalOffset: "13rem",
  fragmentVerticalOffset: "3rem",
  fragmentHorizontalOffsetTablet: "4rem",
  fragmentVerticalOffsetTablet: "2rem",
};

const theme: DefaultTheme = {
  animations: ANIMATIONS,
  colors: COLORS,
  constants,
  media,
};

export default theme;
