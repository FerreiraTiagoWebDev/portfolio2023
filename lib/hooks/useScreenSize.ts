import throttle from "lodash/throttle";
import { useEffect, useState } from "react";

interface Size {
  width: number | undefined;
  height: number | undefined;
}

const useScreenSize = (waitTime: number = 100): Size => {
  const [windowSize, setWindowSize] = useState<Size>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = throttle(() => {
      setWindowSize({
        width: window?.innerWidth || 0,
        height: window?.innerHeight || 0,
      });
    }, waitTime);

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [waitTime]);

  return windowSize;
};

export default useScreenSize;
