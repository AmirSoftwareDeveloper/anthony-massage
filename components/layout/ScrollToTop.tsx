"use client";

import { useCallback, useEffect, useState } from "react";

import { faLongArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const THRESHOLD = 300;

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = useCallback(() => {
    setVisible(window.scrollY > THRESHOLD);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-4 right-4 z-50 flex items-center justify-center w-11 h-11 rounded-full bg-secondary text-white shadow-md hover:scale-105 transition"
    >
      <FontAwesomeIcon
        icon={faLongArrowUp}
        className="w-4 h-4"
      />
    </button>
  );
};

export default ScrollToTop;
