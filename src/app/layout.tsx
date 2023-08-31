import Footer from "src/components/Organisms/navigation/footer/Footer";
import Header from "src/components/Organisms/navigation/header/Header";
import "../styles/globals.css";

export const metadata = {
  title: "Tiago Ferreira",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-primaryLighter">
        <Header />
        <main role="role">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
