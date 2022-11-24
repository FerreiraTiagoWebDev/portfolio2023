import Carousel from "nuka-carousel";
import PrimaryLayout from "../components/layouts/primary/PrimaryLayout";
import { NextPageWithLayout } from "./page";

const array = [
  "Olá",
  "Oláa",
  "Oláaa",
  "Oláaaa",
  "Oláaaaa",
  "Oláaaaaa",
  "Oláaaaaaa",
  "Oláaaaaaaa",
  "Oláaaaaaaaa",
];

const Home: NextPageWithLayout = () => {
  return (
    <div className="flex justify-around flex-col">
      <section className="pt-60 pl-20 bg-background-main">
        <div className="flex flex-col align-center justify-between">
          <Carousel
            autoplay
            autoplayInterval={3000}
            withoutControls
            wrapAround
            dragging
            enableKeyboardControls
            pauseOnHover={false}
          >
            {array.map((element) => (
              <div
                key={element}
                className="flex items-center justify-center p-10 w-full h-96 bg-gradient-to-r from-background-main via-background-secondary to-background-heavySecondary mb-10 rounded-tl-2xl rounded-l-2xl"
              >
                <div>{element} EHEHEHEHEHEHEH</div>
              </div>
            ))}
          </Carousel>
          {/* <div className="flex items-center justify-center p-10 w-full h-44 bg-background-secondary mb-10 ">
          <div>Hero Footer</div>
        </div> */}
        </div>
      </section>
      <section className="py-60 pl-20 bg-background-main">
        <div className="flex flex-col align-center justify-between">
          <Carousel
            autoplay
            autoplayInterval={3000}
            withoutControls
            wrapAround
            dragging
            enableKeyboardControls
          >
            {array.map((element) => (
              <div
                key={element}
                className="flex items-center justify-center p-10 w-full h-96 bg-gradient-to-r from-background-main via-background-secondary to-background-heavySecondary mb-10 rounded-tl-2xl rounded-l-2xl"
              >
                <div>{element} EHEHEHEHEHEHEH</div>
              </div>
            ))}
          </Carousel>
          {/* <div className="flex items-center justify-center p-10 w-full h-44 bg-background-secondary mb-10 ">
          <div>Hero Footer</div>
        </div> */}
        </div>
      </section>
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
