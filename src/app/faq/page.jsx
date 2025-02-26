import Banner from "@/components/common/Banner";
import FAQ from "@/components/faq/FAQ";
import React from "react";

export default function page() {
  const faqBanner = {
    title: "Preguntas Frecuentes",
    path: "/Preguntas-Frecuentes",
    desc: "Aquí encontrarás las respuestas a las preguntas más frecuentes que nuestros clientes nos hacen. Si no encuentras la respuesta a tu pregunta, no dudes en contactarnos. Estamos aquí para ayudarte en todo lo que necesites.",
  };
  return (
    <>
      <Banner bannerContent={faqBanner} />
      <FAQ />
    </>
  );
}
