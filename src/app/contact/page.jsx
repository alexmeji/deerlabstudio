import Banner from "@/components/common/Banner";
import Map from "@/components/contact/Map";
import Marquee from "@/components/contact/Marquee";
import React from "react";

export default function page() {
  const teamBanner = {
    title: "Contactanos",
    path: "/Contactanos",
    desc: "Estamos aquí para ayudarte en todo lo que necesites. No dudes en contactarnos para cualquier consulta, duda o sugerencia que tengas. Nuestro equipo está siempre dispuesto a brindarte la mejor atención y resolver tus inquietudes de manera rápida y eficiente.",
  };
  return (
    <>
      <Banner bannerContent={teamBanner} />
      <Marquee />
      <Map />
    </>
  );
}
