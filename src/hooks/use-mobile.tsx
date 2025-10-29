import * as React from "react";

const MOBILE_BREAKPOINT = 768;

/**
 * Custom React Hook to detect if the screen width is below mobile breakpoint.
 * Works responsively and safely with SSR (no window access errors).
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return; // ✅ Prevent SSR crash

    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    // Set initial value
    handleResize();

    // Add listener for screen resize
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}
