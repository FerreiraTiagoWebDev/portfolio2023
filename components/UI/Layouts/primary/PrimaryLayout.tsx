import Footer from "components/Organisms/navigation/footer/Footer";
import Head from "next/head";
import Header from "../../../Organisms/navigation/header/Header";

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<"div"> {
  justify?: "items-center" | "items-start";
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children, ...divProps }) => {
  return (
    <>
      <Head>
        <title>Tiago Ferreira - Frontend</title>
      </Head>
      <div
        {...divProps}
        className={`min-h-screen max-h-screen flex flex-col bg-primaryLighter`}
      >
        {/* <SubHeader /> */}
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default PrimaryLayout;
