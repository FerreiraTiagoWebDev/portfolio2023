import throttle from "lodash/throttle";
import { useEffect, useState } from "react";

interface Size {
  width: number | undefined;
  height: number | undefined;
}

const useScreenSize = (waitTime: number = 100): Size => {
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = throttle(() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, waitTime);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [waitTime]);

  return windowSize;
};

export default useScreenSize;
