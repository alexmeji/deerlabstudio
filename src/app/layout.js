import { Inter } from "next/font/google";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./sass/style.scss";
const inter = Inter({ subsets: ["latin"] });
import "@/app/styles/animate.css";
import TopHeader from "@/components/common/TopHeader";
import Header from "@/components/common/Header";
import BookArea from "@/components/common/BookArea";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/common/Footer";
const isServer = typeof window === "undefined";

export const metadata = {
  title: "Deerlab Studio",
  description:
    "Deerlab Studio es una agencia creativa enfocada en el desarrollo de software a medida e integración con servicios de Inteligencia Artificial para mejorar los procesos de tu negocio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopHeader />
        <Header />
        {children}
        <BookArea />
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}
