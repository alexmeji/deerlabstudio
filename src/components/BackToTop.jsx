"use client"
import React, { useEffect } from 'react'

export default function BackToTop() {
    useEffect(() => {
        document.addEventListener("scroll", function () {
            if (window.scrollY > 20) {
                document.getElementById("back-top")?.classList.add("show");
            } else {
                document.getElementById("back-top")?.classList.remove("show");
            }
        });

        document.getElementById("back-top")?.addEventListener("click", function (event) {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }, [])
    return (
        <button id="back-top" className="btn-backToTop">
            <i className="ri-arrow-up-s-line"></i>
        </button>
    )
}
