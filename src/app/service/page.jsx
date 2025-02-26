import Banner from "@/components/common/Banner";
import Process from "@/components/service/Process";
import Services from "@/components/service/Services";
import WhyChoose from "@/components/service/WhyChoose";
import React from "react";

export default function page() {
  const bannerContent = {
    title: "Servicios",
    path: "/Servicios",
    desc: "Nuestros servicios son de alta calidad y asequibles. Ofrecemos servicios de diseño web, desarrollo de aplicaciones, marketing digital y mucho más.",
  };
  return (
    <>
      <Banner bannerContent={bannerContent} />
      <Services />
      <WhyChoose />
      <Process />
    </>
  );
}
