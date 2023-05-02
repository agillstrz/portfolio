import Navbar from "@/components/navbar/Navbar";
import Providers from "@/context/Providers";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export const metadata = {
  title: "agillstrz",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <Navbar />
          <div className="dark:bg-dark1  overflow-hidden bg-light2 font-poppins text-dark1  transition-all duration-700 dark:text-text1">
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
