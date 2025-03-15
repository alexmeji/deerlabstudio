import { FaStore } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdLightbulbOutline, MdOutlineWeb } from "react-icons/md";
import { TbMessageChatbotFilled } from "react-icons/tb";

const services = [
  {
    id: 1,
    title: "Software a la medida",
    desc: "Desarrollamos soluciones de software personalizadas que se adaptan perfectamente a las necesidades y objetivos de tu negocio, optimizando procesos y mejorando la eficiencia.",
    path: "",
    icon: <MdLightbulbOutline size={30} />,
  },
  {
    id: 2,
    title: "Software para E-commerce",
    desc: "Creamos plataformas de comercio electrónico a medida, con funciones avanzadas de pago, gestión de inventarios y personalización, para ofrecer una experiencia de compra única a tus clientes.",
    path: "",
    icon: <FaStore size={30} />,
  },
  {
    id: 3,
    title: "Diseño y Desarrollo de Sitios Web",
    desc: "Diseñamos y desarrollamos sitios web responsivos, atractivos y fáciles de navegar, enfocados en brindar una experiencia de usuario excepcional que impulse tu presencia online.",
    path: "",
    icon: <MdOutlineWeb size={30} />,
  },
  {
    id: 4,
    title: "Aplicaciones Móviles",
    desc: "Desarrollamos aplicaciones móviles nativas y multiplataforma para iOS y Android, con un enfoque en rendimiento, usabilidad y funcionalidades avanzadas que optimizan la experiencia del usuario.",
    path: "",
    icon: <IoIosPhonePortrait size={30} />,
  },
  {
    id: 5,
    title: "Chatbots y Agentes de IA",
    desc: "Implementamos chatbots y agentes virtuales inteligentes para mejorar la atención al cliente, automatizar tareas y ofrecer soluciones rápidas y eficientes en cualquier momento.",
    path: "",
    icon: <TbMessageChatbotFilled size={30} />,
  },
];

export default function Services() {
  return (
    <section className="service-two-area pb-120">
      <div className="container">
        <div className="section-header text-center mb-80">
          <h2 className="fw-300">
            Haga crecer su negocio con nuestro Servicios excepcionales
          </h2>
        </div>
        <div className="row g-4">
          {services.map((service) => (
            <div className="col-lg-6" key={service.id}>
              <div className={`service-two__item ${service.bgClass}`}>
                <div className="icon">{service.icon}</div>
                <div className="service-two__content">
                  <h3 className="mb-10">{service.title}</h3>
                  <p className="mb-20">{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
