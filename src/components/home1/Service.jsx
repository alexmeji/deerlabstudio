import Link from 'next/link';
import React, { useEffect } from 'react'

import { MdLightbulbOutline, MdOutlineWeb } from "react-icons/md";
import { FaStore } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";
import { TbMessageChatbotFilled } from "react-icons/tb";



const servicesData = [
    {
        id: 1,
        title: "Software a la medida",
        desc: "Desarrollamos soluciones de software personalizadas que se adaptan perfectamente a las necesidades y objetivos de tu negocio, optimizando procesos y mejorando la eficiencia.",
        path: "",
        icon: <MdLightbulbOutline size={30} />
    },
    {
        id: 2,
        title: "Software para E-commerce",
        desc: "Creamos plataformas de comercio electrónico a medida, con funciones avanzadas de pago, gestión de inventarios y personalización, para ofrecer una experiencia de compra única a tus clientes.",
        path: "",
        icon: <FaStore size={30} />
    },
    {
        id: 3,
        title: "Diseño y Desarrollo de Sitios Web",
        desc: "Diseñamos y desarrollamos sitios web responsivos, atractivos y fáciles de navegar, enfocados en brindar una experiencia de usuario excepcional que impulse tu presencia online.",
        path: "",
        icon: <MdOutlineWeb size={30} />
    },
    {
        id: 4,
        title: "Aplicaciones Móviles",
        desc: "Desarrollamos aplicaciones móviles nativas y multiplataforma para iOS y Android, con un enfoque en rendimiento, usabilidad y funcionalidades avanzadas que optimizan la experiencia del usuario.",
        path: "",
        icon: <IoIosPhonePortrait size={30} />
    },
    {
        id: 5,
        title: "Chatbos y Agentes de IA",
        desc: "Implementamos chatbots y agentes virtuales inteligentes para mejorar la atención al cliente, automatizar tareas y ofrecer soluciones rápidas y eficientes en cualquier momento.",
        path: "",
        icon: <TbMessageChatbotFilled size={30} />
    },
]

export default function Service() {
    useEffect(() => {
        document.querySelectorAll(".service__item").forEach(function (item) {
            item.addEventListener("mouseenter", function () {
                document.querySelectorAll(".service__item").forEach(function (el) {
                    el.classList.remove("active");
                });
                this.classList.add("active");
            });
        });
    }, [])
    return (
        <section className="service-area sub-bg pt-120 pb-120">
            <div className="service__shape1 sway__animationX">
                <img src="assets/images/shape/service-shape1.png" alt="shape" />
            </div>
            <div className="service__shape2 sway_Y__animationY">
                <img src="assets/images/shape/service-shape2.png" alt="shape" />
            </div>
            <div className="container">
                <div className="row g-4">
                    <div className="col-xl-4 col-md-6">
                        <div className="section-header line-title">
                            <h2 className="fw-600 splt-txt wow" data-splitting>Nuestros
                                <span>Servicios <img src="assets/images/shape/title-line-service.png" alt="shape" /></span>
                            </h2>
                            <p className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">Nuestra diversa gama de servicios está diseñada para satisfacer las necesidades únicas de nuestro clientes</p>
                            <Link href="/contact" className="btn-one active wow fadeInUp mt-40" data-wow-delay="600ms" data-wow-duration="1500ms">
                                Charlemos
                            </Link>
                        </div>
                    </div>
                    {
                        servicesData.length > 0 && servicesData.map((service, i) => (
                            <div key={service.id} className="col-xl-4 col-md-6">
                                <div className={`service__item ${i == 0 && "active"}`}>
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="icon">
                                            {service.icon}
                                        </div>
                                        <h4 className="splt-txt wow" data-splitting>{service.title}</h4>
                                    </div>
                                    <p className="mt-20 pb-20 fs-16">{service.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}