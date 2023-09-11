"use client";

import { Flex } from "@ui/Flex";
import Link from "next/link";
import { useState } from "react";
import { HOME_TECH_SLIDER_LOGOS } from "src/lib/Constants/constants";
import styles from "./HomeCarousel.module.css";

function HomeCarousel() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <Flex className="flex-col items-center justify-center py-4">
      <div className={styles.container}>
        <div className={styles["marquee-wrapper"]}>
          <div className={styles["marquee"]}>
            <div className={styles["marquee-group"]}>
              {HOME_TECH_SLIDER_LOGOS.map(({ id, title, icon }, index) => {
                const isHovered = hoveredIndex === index;
                return (
                  <Link
                    href={"#"}
                    className={styles["marquee-tag-wrapper"]}
                    key={id}
                  >
                    <div className={styles["marquee-tag-container"]}>
                      <span
                        className={styles["marquee-tag-icon"]}
                        style={{
                          opacity: isHovered ? 1 : 0.5,
                          color: isHovered ? "black" : "lightgray",
                          transition: "0.25s all",
                        }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        {icon}
                      </span>
                      <span className={styles["marquee-tag"]}>{title}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className={styles["marquee-group"]}>
              {HOME_TECH_SLIDER_LOGOS.map(({ id, title, icon }, index) => {
                const isHovered = hoveredIndex === index;
                return (
                  <Link
                    href={"#"}
                    className={styles["marquee-tag-wrapper"]}
                    key={id}
                  >
                    <div className={styles["marquee-tag-container"]}>
                      <span
                        className={styles["marquee-tag-icon"]}
                        style={{
                          opacity: isHovered ? 1 : 0.5,
                          transition: "0.25s all",
                        }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        {icon}
                      </span>
                      <span className={styles["marquee-tag"]}>{title}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Flex>
  );
}

export default HomeCarousel;
