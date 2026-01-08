import Footer from "./Components/layout/Footer";
import Navbar from "./Components/layout/Navbar";
import "@fortawesome/fontawesome-svg-core/styles.css"; 

import "./globals.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
