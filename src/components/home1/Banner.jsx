import Link from "next/link";
import React, { useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import Typewriter from "typewriter-effect";

export default function Banner() {
  useEffect(() => {
    document.querySelectorAll("[data-background]").forEach(function (element) {
      element.style.backgroundImage =
        "url(" + element.getAttribute("data-background") + ")";
    });
  }, []);
  return (
    <section
      className="banner-area bg-image"
      data-background="./assets/images/banner/banner-image.png"
    >
      <div className="banner__info">
        <div className="content">
          <img src="./assets/images/banner/banner-user.png" alt="image" />
          <h3 className="mt-15 mb-1">
            <span className="count">5</span>+
          </h3>
          <h6>Clientes Felices</h6>
        </div>
        <div className="image mt-10">
          <img src="assets/images/banner/banner-voice.png" alt="image" />
        </div>
        <img
          className="line"
          src="assets/images/shape/banner-info-line.png"
          alt="shape"
        />
      </div>
      <div className="container">
        <div className="banner__content pb-120">
          <h5 className="splt-txt wow" data-splitting>
            ¡Su visión, nuestra experiencia!
          </h5>
          <h1>
            Ayudamos <br />
            <Typewriter
              options={{
                strings: ["Emprededores", "Startups", "Empresas"],
                autoStart: true,
                loop: true,
                cursor: "",
              }}
            />
          </h1>
          <p>
            Potenciando ideas audaces, guiamos a las startups desde el concepto
            hasta el liderazgo en el mercado, impulsando a ellos hacia el éxito
            con apoyo experto y dirección estratégica.
          </p>
          <div className="d-flex align-items-center gap-3">
            <Link href="/contact" className="btn-one wow slideInLeft btn-icon">
              <FaCalendarAlt />
              Agenda una Consulta
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
