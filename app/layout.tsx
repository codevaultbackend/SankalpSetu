import Footer from "./Components/layout/Footer";
import Navbar from "./Components/layout/Navbar";
import { ServicesProvider } from "./context/ServicesContext";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>

      <body className="" >
        <ServicesProvider>
          <Navbar />
          {children}

          <Footer />
        </ServicesProvider>
      </body>
    </html>
  );
}
