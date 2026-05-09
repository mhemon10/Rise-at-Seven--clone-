

import Footer from "./cmoponents/layouts/Footer";
import Navbar from "./cmoponents/navbar";
import TopBar from "./cmoponents/topbar";
import "./globals.css";


export const metadata = {
  title: "Rise Clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      {/* <Navbar /> */}
      <body>
        <TopBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
