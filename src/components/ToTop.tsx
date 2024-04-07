import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function ToTop() {
  // scroll to top
  const { pathname } = useLocation();

  useEffect(() => {
    // load each page from the top
    window.scrollTo(0, 0);
  }, [pathname]);
  return <></>;
}
