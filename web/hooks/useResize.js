import { useState, useEffect } from "react";

const getDevice = (size) => {
  if (size <= 600) {
    return "mobile";
  } else if (size > 600 && size <= 900) {
    return "tablet";
  } else {
    return "desktop";
  }
};

export default function useResize() {
  const [size, setSize] = useState({ height: 0, width: 0, device: "" });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        height: window.innerHeight,
        width: window.innerWidth,
        device: getDevice(window.innerWidth),
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
}
