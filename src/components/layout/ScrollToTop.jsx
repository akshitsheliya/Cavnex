import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const scrollToTopPages = [
  "/services",
  "/services/website",
  "/services/app",
  "/services/combo",
  "/projects",
  "/community",
  "/contact",
];

export default function ScrollToTop() {
  const { pathname, hash, state } = useLocation();

  useEffect(() => {
    if (scrollToTopPages.includes(pathname) && !state?.scrollTo) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }

    if (pathname === "/" && !hash && !state?.fromService) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }

    if (pathname === "/" && state?.scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(state.scrollTo);
        if (element) {
          const offset = 80;
          const elementPosition =
            element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - offset,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, [pathname, hash, state]);

  return null;
}
