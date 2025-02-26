"use client"
import Link from 'next/link'
import React from 'react'
import { Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const teamData = [
    {
        id: 1,
        name: "Abu Rayhan",
        position: "Founder of AgenShark",
        image: "/assets/images/team/team-four-image1.png",
    },
    {
        id: 2,
        name: "Rahat Hossain",
        position: "CEO of AgenShark",
        image: "/assets/images/team/team-four-image2.png",
    },
    {
        id: 3,
        name: "Shanta Rohman",
        position: "Project Manager of AgenShark",
        image: "/assets/images/team/team-four-image3.png",
    },
    {
        id: 4,
        name: "Kawser Ahmed",
        position: "Lead Developer of AgenShark",
        image: "/assets/images/team/team-four-image4.png",
    },
    {
        id: 5,
        name: "Abu Rayhan",
        position: "Founder of AgenShark",
        image: "/assets/images/team/team-four-image1.png",
    },
    {
        id: 6,
        name: "Rahat Hossain",
        position: "CEO of AgenShark",
        image: "/assets/images/team/team-four-image2.png",
    },
    {
        id: 7,
        name: "Shanta Rohman",
        position: "Project Manager of AgenShark",
        image: "/assets/images/team/team-four-image3.png",
    },
    {
        id: 8,
        name: "Kawser Ahmed",
        position: "Lead Developer of AgenShark",
        image: "/assets/images/team/team-four-image4.png",
    },
]

export default function TeamArea() {
    return (
        <section className="team-four-area">
            <div className="container">
                <div className="section-header-four mb-80">
                    <h5 className="wow splt-txt" data-splitting><span className="title-dot" />Our Team Members</h5>
                    <h2 className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">Meet with Our 60+
                        Talented <span className="unread">Designers,</span> <span className="unread">Coders,
                            and Strategists!</span></h2>
                </div>
                <div>
                    <Swiper
                        spaceBetween={24}
                        speed={500}
                        modules={[Pagination, Navigation, Scrollbar]}
                        pagination={{
                            el: ".team-four__dot",
                            clickable: true,
                        }}
                        navigation={{
                            nextEl: ".team-four__arry-next",
                            prevEl: ".team-four__arry-prev",
                        }}
                        scrollbar={{
                            el: ".swiper-scrollbar",
                        }}
                        breakpoints={{
                            1200: {
                                slidesPerView: 4,
                            },
                            991: {
                                slidesPerView: 3,
                            },
                            575: {
                                slidesPerView: 2,
                            },
                        }}
                        className="team-four__slider"
                    >
                        {teamData.map((member) => (
                            <SwiperSlide key={member.id} className="swiper-slide">
                                <div className="team-four__item">
                                    <div className="image">
                                        <img src={member.image} alt={member.name} />
                                        <div className="team-four__social">
                                            <a href="#"><i className="ri-send-plane-fill"></i></a>
                                            <a href="#"><i className="ri-linkedin-fill"></i></a>
                                            <a href="#"><i className="ri-discord-fill"></i></a>
                                            <a href="#"><i className="ri-facebook-fill"></i></a>
                                        </div>
                                    </div>
                                    <h5 className="mt-4">
                                        {/* <a href={`/team/${member.id}`}>{member.name}</a> */}
                                        <Link href={`/team-details`}>{member.name}</Link>
                                    </h5>
                                    <span>{member.position}</span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="mt-40">
                        <div className="team-four__swiper-scrollbar">
                            <div className="position-relative">
                                <div className="swiper-scrollbar" />
                            </div>
                        </div>
                        <div className="pb-15" />
                        <div className="swiper-four__info">
                            <button className="team-four__arry-prev active disable"><i className="ri-arrow-left-line"></i></button>
                            <button className="team-four__arry-next active"><i className="ri-arrow-right-line"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
