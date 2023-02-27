import PrimaryLayout from "@ui/Layouts/primary/PrimaryLayout";
import HomePage from "../components/Pages/Home";
import { NextPageWithLayout } from "./page";

const Home: NextPageWithLayout = () => {
  return <HomePage />;
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
