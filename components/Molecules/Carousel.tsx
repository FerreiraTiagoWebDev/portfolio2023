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
      // renderAnnounceSlideMessage={({ currentSlide }) => {
      //   setIndexMath(currentSlide);
      //   return `Slide ${currentSlide + 1}`;
      // }}
    >
      {items.map(({ element, id }) => (
        <div key={id} className="h-full">
          {element}
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselCustom;
