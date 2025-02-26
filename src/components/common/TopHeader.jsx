import React from 'react'
import Link from 'next/link'

import { FaFacebook, FaLinkedin } from "react-icons/fa";


export default function TopHeader() {
  return (
    <div className="header-top header-top-area d-none d-lg-block">
        <div className="container">
          <div className="header-top-wrp">
            <ul className="info">
              <li>
                <i className="ri-time-line"></i>
                <span className="paragraph-light">
                  <span className="text-white">Horas Laborales: </span>
                   Lunes - Sabado, 8am - 05pm
                </span>
              </li>
            </ul>
            <div className="right-info">
              <ul className="site-link">
                <li><a href="#0">info@deerlab.studio</a></li>
                <li><a href="tel:+50230358525">+502 30358525</a></li>
              </ul>
              <ul className="link-info">
                <li>
                  <Link href="https://www.facebook.com/deerlabstudio" target='_blank'>
                    <FaFacebook color='white' />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/company/deerlabstudio" target='_blank'>
                    <FaLinkedin color='white' />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  )
}
