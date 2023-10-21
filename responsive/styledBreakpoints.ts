import { responsiveBreakpoints } from "./breakpoints";

export const styledDevice = {
  phone: `(max-width: ${responsiveBreakpoints.phone})`,
  tabPort: `(max-width: ${responsiveBreakpoints.tabPort})`,
  tabLand: `(max-width: ${responsiveBreakpoints.tabLand})`,
  desktop: `(max-width: ${responsiveBreakpoints.desktop})`,
  bigDesktop: `(min-width: ${responsiveBreakpoints.desktop})`,
};
