import useResponsiveSizeBreakpoint, {
  ResponsiveBreakPointKey,
} from "./useResponsiveSizeBreakpoint";

type ResponsiveValueProps<T> = {
  [key in ResponsiveBreakPointKey]?: T;
};

export const useResponsiveValue = <T>(
  defaultValue: T,
  props: ResponsiveValueProps<T>
) => {
  const breakpoint = useResponsiveSizeBreakpoint();
  const value = props[breakpoint] || defaultValue;
  return value;
};
