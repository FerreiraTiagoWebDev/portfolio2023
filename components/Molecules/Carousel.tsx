import Carousel from "nuka-carousel";

interface CarouselProps {
  items: any[];
}

const CarouselCustom = ({ items }: CarouselProps) => {
  return (
    <Carousel
      autoplay
      autoplayInterval={5000}
      withoutControls
      wrapAround
      dragging
      enableKeyboardControls
      pauseOnHover={false}
      style={{ width: "100%", height: "400px" }}
    >
      {items.map(({ element, index }) => (
        <div key={index}>{element}</div>
      ))}
    </Carousel>
  );
};

export default CarouselCustom;
