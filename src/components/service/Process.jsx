import React from "react";

const processSteps = [
  {
    id: 1,
    number: 1,
    title: "Identificamos la necesidad",
    description:
      "Comenzamos con una evaluación exhaustiva de su sitio web y competidores, identificando las oportunidades y desafíos únicos de su negocio.",
    bgClass: "bg1",
  },
  {
    id: 2,
    number: 2,
    title: "Desarrollamos la mejor solución",
    description:
      "Nuestro equipo de expertos desarrollan una solución que se adapte a sus necesidades y objetivos comerciales.",
    icon: "/assets/images/shape/process-circle.png",
  },
  {
    id: 3,
    number: 3,
    title: "Desplegamos la solución",
    description:
      "Después de una revisión exhaustiva y aprobación de su solución, la desplegamos para que pueda comenzar a ver los resultados.",
    bgClass: "bg3",
  },
];

export default function Process() {
  return (
    <section className="process-area pb-120">
      <div className="container">
        <div className="d-flex flex-wrap mb-80 justify-content-between align-items-end gap-3">
          <div className="section-header">
            <h5>Trabajamos contigo de la mano</h5>
            <h2 className="fw-300">Nuestro proceso de trabajo probado</h2>
          </div>
          <p>
            Nuestro proceso de trabajo comprobado combina experiencia, precisión
            e innovación para obtener resultados consistentemente
            sobresalientes.
          </p>
        </div>

        <div className="process__wrp">
          <div className="process__line">
            <img src="./assets/images/shape/process-line.png" alt="line" />
          </div>
          <div className="row g-5">
            {processSteps.map((step) => (
              <div key={step.id} className="col-lg-4">
                <div className="process__item">
                  <div className={`process__number ${step.bgClass || ""}`}>
                    <h4>{step.number}</h4>
                    {step.icon && <img src={step.icon} alt="image" />}
                  </div>
                  <h3 className="mb-10 mt-25">{step.title}</h3>
                  <p className="fs-16">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
