import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const mainPages = [
  "/projects",
  "/community",
  "/contact",
  "/services/website",
  "/services/app",
  "/services/combo",
];

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (mainPages.includes(pathname)) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }

    if (pathname === "/" && !hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, hash]);

  return null;
}
