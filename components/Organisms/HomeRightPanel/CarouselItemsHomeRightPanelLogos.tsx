import homeHero from "@assets/images/homeHero.jpg";
import reactLogo from "@assets/images/reactLogo.jpg";
import Image from "next/image";
const CarouselItemsHomeRightPanelLogos = () => {
  const items = [
    {
      id: 1,
      element: (
        <Image
          src={homeHero}
          alt="Example image"
          // height="200px"
          // width="200px"
          objectFit="contain"
        />
      ),
    },
    {
      id: 2,
      element: (
        <Image
          src={reactLogo}
          alt="Example image"
          // height="200px"
          // width="200px"
          objectFit="contain"
        />
      ),
    },
  ];
  return (
    <div>
      {items.map((item) => {
        return item.id === 2 ? item.element : null;
      })}
    </div>
  );
};

export default CarouselItemsHomeRightPanelLogos;
