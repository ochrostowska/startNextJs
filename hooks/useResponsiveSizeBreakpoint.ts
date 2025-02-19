import { useEffect, useState } from "react";

// Define your breakpoint values
const breakpoints = {
  phone: 600,
  tabPort: 900,
  tabLand: 1200,
  desktop: 1800,
};

export type ResponsiveBreakPointKey =
  | "phone"
  | "tabPort"
  | "tabLand"
  | "desktop"
  | "bigDesktop";

const useResponsiveSizeBreakpoint = (): ResponsiveBreakPointKey => {
  const [size, setSize] = useState<ResponsiveBreakPointKey>("desktop");

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= breakpoints.phone) {
        setSize("phone");
      } else if (windowWidth <= breakpoints.tabPort) {
        setSize("tabPort");
      } else if (windowWidth <= breakpoints.tabLand) {
        setSize("tabLand");
      } else if (windowWidth <= breakpoints.desktop) {
        setSize("desktop");
      } else {
        setSize("bigDesktop");
      }
    };

    // Initial call to set the size
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
};

export const useIsMobile = () => {
  const size = useResponsiveSizeBreakpoint();
  return size === "phone";
};

export default useResponsiveSizeBreakpoint;
