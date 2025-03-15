import Fanfact from "@/components/about/Fanfact";
import Banner from "@/components/common/Banner";
import React from "react";

export const metadata = {
  title: "Sobre Nosotros",
  description:
    "Somos una agencia creativa enfocada en el desarrollo de software a medida e integración con servicios de Inteligencia Artificial para mejorar los procesos de tu negocio.",
  keyworkds: [
    "software a la medida",
    "desarrollo web",
    "e-commerce",
    "aplicaciones móviles",
    "chatbots",
    "IA",
    "Guatemala",
  ],
};

export default function page() {
  const bannerContent = {
    title: "Sobre Nosotros",
    path: "/Sobre Nosotros",
    desc: "Somos una agencia creativa enfocada en el desarrollo de software a medida e integración con servicios de Inteligencia Artificial para mejorar los procesos de tu negocio.",
  };
  return (
    <>
      <Banner bannerContent={bannerContent} />
      <Fanfact />
    </>
  );
}
