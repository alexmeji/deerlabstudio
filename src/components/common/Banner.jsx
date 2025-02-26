import React from 'react'

export default function Banner({bannerContent}) {
    return (
        <section className="banner-inner-area">
            <div className="container">
                <div className="banner-inner__content">
                    <a href="/">Inicio</a><span>{bannerContent.path}</span>
                    <h2>{bannerContent.title}</h2>
                    <p>{bannerContent.desc}</p>
                </div>
            </div>
        </section>
    )
}
