"use client";
import React, { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import {
  FaAngleDown,
  FaCalendarAlt,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    var fixedTop = document.querySelector(".header-area");

    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        fixedTop.classList.add("menu-fixed", "animated", "fadeInDown");
      } else {
        fixedTop.classList.remove("menu-fixed", "fadeInDown");
      }
    });
  }, []);

  const manageSelectedItem = (value) => {
    const items = [...selectedItem];
    const index = selectedItem.indexOf(value);
    if (index < 0) {
      items.push(value);
      setSelectedItem(items);
    } else {
      items.splice(index, 1);
      setSelectedItem(items);
    }
  };

  const sideBarItem = [
    {
      title: "Inicio",
      href: "/",
    },
    {
      title: "Sobre Nosotros",
      href: "/about-us",
    },
    {
      title: "Servicios",
      href: "/service",
    },
    {
      title: "Contacto",
      href: "/contact",
    },
  ];
  return (
    <>
      <header className="header-area border-none header-one-area">
        <div className="container">
          <div className="header__main header__main-one">
            <Link href="/" className="logo">
              <Image
                src="./assets/deerlab/logodeerlab.png"
                height={45}
                width={45}
                alt="logo"
              />
              <span>Deerlab Studio</span>
            </Link>
            <div className="main-menu d-none d-lg-block">
              <nav>
                <ul>
                  <li>
                    <Link href="/">Inicio</Link>
                  </li>
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
              </nav>
            </div>
            <div className="menu-btns d-none d-lg-flex">
              <Link className="menu-btn-one" href="/contact">
                <FaCalendarAlt /> Agenda una Consulta
              </Link>
            </div>
            <button
              onClick={() => setShow(!show)}
              className="menubars d-block d-lg-none"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#menubar"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
      {/* sidebar */}
      <Offcanvas
        placement="end"
        scroll={false}
        show={show}
        onHide={handleClose}
        className="sidebar-area offcanvas offcanvas-end"
        id="menubar"
      >
        <Offcanvas.Header className="offcanvas-header">
          <Link href="/" className="logo">
            <img src="assets/images/logo/logo-light.svg" alt="logo" />
          </Link>
          <button
            onClick={handleClose}
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          >
            <i className="ri-close-fill"></i>
          </button>
        </Offcanvas.Header>
        <Offcanvas.Body className="offcanvas-body sidebar__body">
          <div className="mobile-menu overflow-hidden text-white">
            <ul>
              {sideBarItem.map((sItem, key) => {
                return !sItem.subMenu ? (
                  <li key={key} className="menuItem border-top py-3">
                    <Link
                      href={sItem.href}
                      className="text-white w-100 d-block"
                    >
                      {sItem.title}
                    </Link>
                  </li>
                ) : (
                  <li key={key} onClick={() => manageSelectedItem(sItem.title)}>
                    <div className="submenuHeading w-100 d-flex align-items-center justify-content-between border-top py-3">
                      <span className="text-white">{sItem.title}</span>
                      <FaAngleDown className="text-white" />
                    </div>
                    <ul
                      className={`subItemsContainer ${
                        selectedItem.indexOf(sItem.title) !== -1
                          ? "d-block"
                          : "d-none"
                      }`}
                    >
                      {sItem.subMenu.map((subItem, i) => (
                        <li key={i} className="py-2 ps-5">
                          <Link
                            href={subItem.path}
                            className="text-white w-100 d-block"
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="sidebar__contact-info mt-30">
            <h5 className="text-white mb-20">Información de Contacto</h5>
            <ul>
              <li>
                <i className="fa-solid fa-location-dot" />{" "}
                <Link href="#0">info@deerlab.studio</Link>
              </li>
              <li className="py-2">
                <i className="fa-solid fa-phone-volume" />{" "}
                <Link href="tel:+50230358525">+502 3035 8525</Link>
              </li>
            </ul>
          </div>
          <div className="sidebar__socials">
            <ul>
              <li>
                <Link
                  href="https://www.facebook.com/deerlabstudio"
                  target="_blank"
                >
                  <FaFacebook color="white" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/company/deerlabstudio"
                  target="_blank"
                >
                  <FaLinkedin color="white" />
                </Link>
              </li>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
