import { Inter } from "next/font/google";
import Footer from "src/components/Organisms/navigation/footer/Footer";
import Header from "src/components/Organisms/navigation/header/Header";
import { AppProvider } from "src/lib/hooks/AppProvider";
import ThemeRegistry from "src/styles/ThemeRegistry";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Tiago Ferreira",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <ThemeRegistry>
        <body className="bg-primaryLighter relative border-6 border-muisecondary">
          <Header />
          <main role="role" id={"mainId"}>
            <AppProvider>{children}</AppProvider>
          </main>
          <Footer />
        </body>
      </ThemeRegistry>
    </html>
  );
}
