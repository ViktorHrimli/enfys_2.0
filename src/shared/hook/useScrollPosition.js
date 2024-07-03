import { useState, useEffect } from "react";

const useScrollPosition = (path) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updateScrollPosition = () => {
      const scrollY = window.scrollY;
      setScrollPosition(scrollY);
      localStorage.setItem(path, scrollY);
    };

    const handleLoad = () => {
      const savedScrollPosition = localStorage.getItem(path);
      console.log(savedScrollPosition);

      if (savedScrollPosition !== null) {
        window.scrollTo(0, parseInt(savedScrollPosition, 10));
      }

      const time = setTimeout(() => {
        window.scrollTo(0, parseInt(savedScrollPosition, 10));
        clearTimeout(time);
      }, 5000);
    };

    window.addEventListener("load", handleLoad);

    window.addEventListener("scroll", updateScrollPosition);

    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
      window.removeEventListener("load", handleLoad);
    };
  }, [path]);

  return scrollPosition;
};

export default useScrollPosition;
