import Button from "@ui/Button";
import FlexBox from "@ui/FlexBox";
import H2 from "@ui/Heading/H2";
import ComponentIsVisible from "components/Atoms/ComponentIsVisible";
import { useState } from "react";

interface HomeTechProps {}

const HomeTech: React.FC<HomeTechProps> = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setActiveCategory((prevCategory) => (prevCategory + 1) % 3);
  //   }, 2500);
  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    <FlexBox
      className="container"
      direction="flex-row"
      justifyContent="justify-around"
    >
      <H2>Tech</H2>
      <FlexBox
        direction="flex-col"
        justifyContent="justify-around"
        className="gap-4"
      >
        <ul className="steps steps-vertical">
          <li data-content="★" className="step step-neutral">
            <div style={{ border: "2px solid black" }}>
              <Button
                className={`bg-${
                  activeCategory === 0 ? "blueTemplate" : "secondary"
                }`}
                onClick={() => setActiveCategory(0)}
              >
                Javascript Frameworks
              </Button>
              <div style={{ height: "300px" }}></div>
            </div>
          </li>
          <li data-content="★" className="step ">
            <Button
              className={`bg-${
                activeCategory === 1 ? "blueTemplate" : "secondary"
              }`}
              onClick={() => setActiveCategory(1)}
            >
              Css Libraries
            </Button>
          </li>
          <li data-content="★" className="step">
            <Button
              className={`bg-${
                activeCategory === 2 ? "blueTemplate" : "secondary"
              }`}
              onClick={() => setActiveCategory(2)}
            >
              Utility Libraries
            </Button>
          </li>
        </ul>
      </FlexBox>
      <FlexBox direction="flex-col">
        <ComponentIsVisible when={activeCategory === 0}>
          <div>Logo</div>
        </ComponentIsVisible>
        <ComponentIsVisible when={activeCategory === 1}>
          <div>Logo1</div>
        </ComponentIsVisible>
        <ComponentIsVisible when={activeCategory === 2}>
          <div>Logo2</div>
        </ComponentIsVisible>
      </FlexBox>
    </FlexBox>
  );
};

export default HomeTech;
