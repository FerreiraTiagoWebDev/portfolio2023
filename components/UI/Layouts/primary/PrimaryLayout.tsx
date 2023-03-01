import SubHeader from "components/Organisms/navigation/subheader/SubHeader";
import Head from "next/head";
import Footer from "../../../Organisms/navigation/footer/Footer";
import Header from "../../../Organisms/navigation/header/Header";

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<"div"> {
  justify?: "items-center" | "items-start";
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children, ...divProps }) => {
  return (
    <>
      <Head>
        <title>Tiago Ferreira - Front End</title>
      </Head>
      <div
        {...divProps}
        className={`min-h-screen flex flex-col bg-background-black`}
      >
        <SubHeader />
        <Header />
        <main>{children}</main>
        <div className="m-auto" />
        <Footer />
      </div>
    </>
  );
};

export default PrimaryLayout;
