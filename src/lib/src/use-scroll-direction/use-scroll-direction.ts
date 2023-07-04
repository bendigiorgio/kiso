"use client";
import { useEffect, useState } from "react";

const useScrollDirection = ({
  initialDirection = "up",
}: {
  initialDirection?: "up" | "down";
} = {}) => {
  const [scrollDirection, setScrollDirection] = useState(initialDirection);

  useEffect(() => {
    let lastScrollY = window.pageYOffset; // For older browser support but can be replaced with window.scrollY

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);

  return scrollDirection;
};
export { useScrollDirection };
