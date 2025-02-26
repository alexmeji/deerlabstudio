import Link from "next/link";
import React from "react";

export default function Error() {
  return (
    <section className="error-area">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5">
            <div className="error__content">
              <h1>404</h1>
              <h2>
                Ooops! <br /> Pagina no encontrada
              </h2>
              <p>
                La página que está buscando no se pudo encontrar. Por favor,
                vuelva a la página de inicio o intente buscar algo más.
              </p>
              <Link href="/contact" className="btn-three mt-40">
                Envianos un mensaje<i className="ri-arrow-right-line fs-5"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="error__image image">
              <img src="assets/images/error/error-image.png" alt="image" />
              <h3 className="mt-50">Error 404!</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
