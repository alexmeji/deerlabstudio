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
import { Head } from "next/document";
const isServer = typeof window === "undefined";

export const metadata = {
  title: "Deerlab Studio",
  description:
    "Deerlab Studio es una agencia creativa enfocada en el desarrollo de software a medida e integración con servicios de Inteligencia Artificial para mejorar los procesos de tu negocio.",
  keyworkds: [
    "software a la medida",
    "desarrollo web",
    "e-commerce",
    "aplicaciones móviles",
    "chatbots",
    "IA",
    "Guatemala",
  ],
  author: "Deerlab Studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-R7B6SMKTY8"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-R7B6SMKTY8');
          `}
        </Script>

        {/* Open Graph para Facebook, LinkedIn */}
        <meta
          property="og:title"
          content="DeerLab Studio | Desarrollo de Software y E-commerce en Guatemala"
        />
        <meta
          property="og:description"
          content="Desarrollo de software, e-commerce y aplicaciones móviles. ¡Transformamos tu idea en realidad!"
        />
        <meta
          property="og:image"
          content="https://deerlab.studio/assets/deerlab/logodeerlab.png"
        />
        <meta property="og:url" content="https://deerlab.studio" />
        <meta property="og:type" content="website" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="DeerLab Studio | Desarrollo de Software y E-commerce en Guatemala"
        />
        <meta
          name="twitter:description"
          content="Desarrollo de software, e-commerce y aplicaciones móviles. ¡Transformamos tu idea en realidad!"
        />
        <meta
          name="twitter:image"
          content="https://deerlab.studio/assets/deerlab/logodeerlab.png"
        />
      </Head>
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
