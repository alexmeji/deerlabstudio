import React from 'react'

const aboutItems = [
    {
        id: 1,
        title: "Análisis y Estrategia",
        description: "Analizamos sus necesidades, preparando el escenario para una estrategia SEO personalizada e impactante.",
        icon: "/assets/images/icon/about-icon1.png",
        bgClass: "bg1",
    },
    {
        id: 2,
        title: "Equipo de Expertos Dedicados",
        description: "Empodere su éxito con nuestro equipo de expertos dedicados, comprometidos a navegar las complejidades del SEO.",
        icon: "/assets/images/icon/about-icon2.png",
        bgClass: "bg2",
    },
    {
        id: 3,
        title: "Servicios Dedicados 24/7",
        description: "Nuestros servicios están disponibles las 24 horas del día, los 7 días de la semana, para garantizar su éxito continuo.",
        icon: "/assets/images/icon/about-icon3.png",
        bgClass: "bg3",
    },
    {
        id: 3,
        title: "Las mejores tecnologías",
        description: "Nuestros expertos utilizan las últimas tecnologías para garantizar que su sitio web esté siempre actualizado.",
        icon: "/assets/images/icon/feature-three-icon1.png",
        bgClass: "bg4",
    }
];

export default function WhyChoose() {
    return (
        <section className="about-area pt-120 pb-120">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6">
                        <div className="about__image">
                            <img className="w-100" src="assets/images/about/service-image.jpg" alt="image" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about__item-right">
                            <div className="section-header">
                                <h5>¿Por qué elegirnos?</h5>
                                <h2 className="fw-300">Estrategias unicas para su éxito</h2>
                                <p>Con precisión en cada detalle, nuestras estrategias personalizadas allanan el camino para su éxito incomparable en el panorama digital.</p>
                            </div>
                            <ul className="mt-40">
                                {aboutItems.map((item) => (
                                    <li key={item.id} className="d-flex align-items-center gap-4">
                                        <div className={`icon ${item.bgClass}`}>
                                            <img src={item.icon} alt="icon" />
                                        </div>
                                        <div>
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
