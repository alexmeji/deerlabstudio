"use client";

import { useEffect, useRef } from "react";
import { useIsVisible } from "react-is-visible";

export default function FanFact() {
  const countRef = useRef();
  const isVisible = useIsVisible(countRef);

  const countupRef = useRef(null);
  const countupRef1 = useRef(null);
  const countupRef2 = useRef(null);
  const countupRef3 = useRef(null);
  let countUpAnim;

  useEffect(() => {
    initCountUp(countupRef, 10);
    initCountUp(countupRef1, 100);
    initCountUp(countupRef2, 1000);
    initCountUp(countupRef3, 15);
  }, []);

  async function initCountUp(ref, count) {
    const countUpModule = await import("countup.js");
    countUpAnim = new countUpModule.CountUp(ref.current, count);
    if (!countUpAnim.error) {
      countUpAnim.start();
    } else {
      console.error(countUpAnim.error);
    }
  }

  return (
    <section
      ref={countRef}
      className="fanfact-area fanfact-radius pt-120 pb-120"
    >
      <div className="container">
        <div className="row g-4 justify-content-between">
          <div className="col-lg-5">
            <div className="fanfact__item-left">
              <h2 className="splt-txt wow" data-splitting>
                Transformamos tus ideas en soluciones reales y sostenibles
              </h2>
              <p
                className="mb-40 wow fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                No solo ofrecemos consultoría, somos arquitectos de la
                innovación y constructores de futuros prósperos. Creamos
                soluciones a medida que impulsan tu negocio hacia el éxito.
              </p>
              <h2 className="splt-txt wow" data-splitting>
                Nuestra Misión
              </h2>
              <p className="mb-30">
                Convertimos ideas en soluciones digitales efectivas que
                transforman emprendedores en líderes del mercado. Ya seas un
                visionario o un innovador en crecimiento, estamos aquí para
                llevar tus sueños a la realidad.
              </p>
              <h2 className="splt-txt wow" data-splitting>
                Nuestra Visión
              </h2>
              <p>
                Ser la agencia líder en innovación digital, estableciendo nuevos
                estándares de excelencia en cada proyecto y dejando una huella
                transformadora en el futuro de nuestros clientes.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <h2 className="mb-60 wow splt-txt" data-splitting>
              Hacemos realidad tus ideas
            </h2>
            <div className="fanfact__item-right">
              <div className="fanfact__item mb-60">
                <h2 className="mb-10">
                  <span className="count" ref={countupRef}>
                    +10
                  </span>
                </h2>
                <strong>Proyectos Completados</strong>
              </div>
              <div className="fanfact__item">
                <h2 className="mb-10">
                  <span className="count" ref={countupRef1}>
                    100
                  </span>
                  %
                </h2>
                <strong>Clientes Satisfechos</strong>
              </div>
              <div className="fanfact__item">
                <h2 className="mb-10">
                  <span className="count" ref={countupRef2}>
                    1000
                  </span>
                  +
                </h2>
                <strong>Tazas de café</strong>
              </div>
              <div className="fanfact__item">
                <h2 className="mb-10">
                  <span className="count" ref={countupRef3}>
                    15
                  </span>
                  +
                </h2>
                <strong>Años de Experiencia</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
