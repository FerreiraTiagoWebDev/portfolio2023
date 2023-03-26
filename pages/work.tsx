import PrimaryLayout from "@ui/Layouts/primary/PrimaryLayout";
import AboutPage from "components/Pages/About";
import { NextPageWithLayout } from "./page";

const Home: NextPageWithLayout = () => {
  return <AboutPage />;
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
