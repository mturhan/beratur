import TourProvider from "@/providers/TourProvider";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import SessionProvider from "@/providers/SessionProvider";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bera Turizm",
  description: "Beratur",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //bg-gradient-to-bl from-blue-200 to-blue-500

  return (
    <html lang="tr">
      <body
        className={`bg-gradient-to-tl from-blue-50 to-blue-100 flex flex-col items-center ${inter.className}`}
      >
        <SessionProvider>
          <TourProvider>
            <Header />
            {children}
            <Footer />
          </TourProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
