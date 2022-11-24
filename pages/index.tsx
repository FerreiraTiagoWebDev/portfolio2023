import PrimaryLayout from "../components/layouts/primary/PrimaryLayout";
import { NextPageWithLayout } from "./page";

const Home: NextPageWithLayout = () => {
  return (
    // Home hero section
    <section className="h-screen p-10">
      <div className="flex flex-col justify-between">
        <div className="flex items-center justify-center p-10 w-full h-44 bg-background-main mb-10 ">
          <div>Hero Section</div>
        </div>
        <div className="flex items-center justify-center p-10 w-full h-44 bg-background-main mb-10 ">
          <div>Hero Footer</div>
        </div>
      </div>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
