import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer-area secondary-bg pt-120">
      <div className="container">
        <div className="footer__wrp pb-60">
          <div className="footer__item footer-about">
            <Link href="/" className="logo mb-4">
              <Image
                src="./assets/deerlab/logodeerlab.png"
                alt="logo"
                height={80}
                width={80}
              />
            </Link>
            <p>
              Deerlab es una agencia multinacional. Guiamos a las startups desde
              el concepto hasta el liderazgo en el mercado.
            </p>
            <div className="social-icons mt-20">
              <Link
                href="https://www.facebook.com/deerlabstudio"
                target="_blank"
              >
                <FaFacebook color="white" size={30} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/deerlabstudio"
                target="_blank"
              >
                <FaLinkedin color="white" size={30} />
              </Link>
            </div>
          </div>
          <div className="footer__item">
            <h3>Empresa</h3>
            <ul>
              <li>
                <Link href="/about-us">Sobre Nosotros</Link>
              </li>
              <li>
                <Link href="/service">Servicios</Link>
              </li>
              <li>
                <Link href="/contact">Contacto</Link>
              </li>
            </ul>
          </div>
          <div className="footer__item">
            {/* <h3>Support</h3>
            <ul>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/error">Book A Demo</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/term-condition">Terms Conditions</Link>
              </li>
              <li>
                <Link href="/error">Cookies</Link>
              </li>
            </ul> */}
          </div>
          <div className="footer__item footer-subscribe">
            <h3>Contactanos</h3>
            <div className="subscribe-feild">
              <button>Agenda una llamada</button>
            </div>
          </div>
        </div>
        <div className="footer__copyright">
          <p>
            {" "}
            © Copyright 2025 <a href="#0">Deerlab</a> Studio
          </p>
          <a href="#0">
            <FaLocationDot color="white" size={20} />
            9na Calle 2-70 Zona 1, Mazatenango, Suchitepequez
          </a>
        </div>
      </div>
    </footer>
  );
}
