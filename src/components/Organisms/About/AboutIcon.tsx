"use client";

import { useEffect, useState } from "react";
import { RiSeedlingFill } from "react-icons/ri";
import ComponentIsVisible from "src/components/Atoms/ComponentIsVisible";
const AboutIcon = () => {
  const [iconSize, setIconSize] = useState(10);
  const [iconVisible, setIconVisible] = useState(true);

  useEffect(() => {
    if (!iconVisible) return;
    const handleResize = () => {
      const parentHeight = document.querySelector("#mainId")?.clientHeight || 0;
      console.log("iconSize", iconSize);
      if (iconSize < parentHeight) {
        setIconSize(iconSize + 2);
      } else {
        setIconVisible(false);
      }
    };

    const interval = setInterval(handleResize, 2);

    return () => clearInterval(interval);
  }, [iconSize, iconVisible]);

  return (
    <>
      <ComponentIsVisible when={iconVisible}>
        <RiSeedlingFill
          onClick={() => console.log("test")}
          size={iconSize}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
        />
      </ComponentIsVisible>
      <ComponentIsVisible when={!iconVisible}>
        <RiSeedlingFill
          onClick={() => console.log("test")}
          size={804}
          className="absolute text-primaryLighter top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
        />
      </ComponentIsVisible>
    </>
  );
};

export default AboutIcon;
