import FlexBox from "@ui/FlexBox";
import { useEffect, useState } from "react";

const SubHeader = () => {
  const [loadTime, setLoadTime] = useState<number | null>(null);
  const [fps, setFps] = useState<number | null>(null);
  const [interactiveTime, setInteractiveTime] = useState<number | null>(null);

  useEffect(() => {
    // Calculate load time
    const t0 = performance.timing.navigationStart;
    const t1 = performance.now();
    setLoadTime(t1 - t0);

    // Calculate time to interactive
    const interactiveTimestamp = performance.timing.domInteractive;
    const interactiveTimeInSeconds = (interactiveTimestamp - t0) / 1000;
    setInteractiveTime(interactiveTimeInSeconds);

    // Calculate FPS
    let frameCount = 0;
    let fpsInterval = 0;
    let lastTimeStamp = performance.now();
    const animate = () => {
      // request another frame
      requestAnimationFrame(animate);

      // calculate time since last frame
      const currentTimeStamp = performance.now();
      const deltaTime = currentTimeStamp - lastTimeStamp;
      lastTimeStamp = currentTimeStamp;

      // limit frame rate to 60 FPS
      if (++frameCount < 60) return;
      frameCount = 0;

      // calculate FPS
      const currentFps = 1000 / (deltaTime + fpsInterval);
      setFps(currentFps);
      fpsInterval = deltaTime;
    };

    // start animation loop
    animate();
  }, []);

  return (
    <FlexBox
      justifyContent="justify-center"
      className="w-full p-1 bg-primaryLighter"
    >
      <div style={{ fontSize: "12px" }}>
        Load Time: {loadTime ? (loadTime / 1000).toFixed(2) : "N/A"}s |
        Interactive Time: {interactiveTime ? interactiveTime.toFixed(2) : "N/A"}
        s | FPS: {fps?.toFixed(2) ?? "N/A"}
      </div>
    </FlexBox>
  );
};

export default SubHeader;
