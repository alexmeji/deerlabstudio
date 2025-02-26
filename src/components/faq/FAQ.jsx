"use client"
import Link from "next/link";
import { useState } from "react";

const faqs = [
    {
        id: "collapseOne",
        question: "Are your services scalable for small businesses?",
        answer: "Absolutely! Whether you're a startup or an established enterprise, our services are scalable to meet the unique needs and budgets of businesses of all sizes. Our agency stands out for its collaborative approach, creative expertise, and commitment to delivering high-quality results. We prioritize communication, innovation, and client satisfaction in every project we undertake.",
        isOpen: true,
    },
    {
        id: "collapseTwo",
        question: "What services does your agency provide?",
        answer: "Our agency provides a wide range of services including digital marketing, SEO, content creation, and social media management. We work closely with clients to create tailored strategies that meet their business goals.",
        isOpen: false,
    },
    {
        id: "collapseThree",
        question: "How do I contact your team for further inquiries?",
        answer: "You can contact our team via the contact form on our website, or email us directly at support@example.com. We aim to respond to all inquiries within 24 hours.",
        isOpen: false,
    },
    {
        id: "collapseFour",
        question: "What industries does your agency work with?",
        answer: "We work with a variety of industries including healthcare, e-commerce, technology, and education. Our team has the expertise to adapt strategies to fit any sector.",
        isOpen: false,
    }
];


export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <section className="faq-four-area pb-120">
            <div className="container">
                <div className="d-flex flex-wrap mb-80 justify-content-between align-items-end gap-3">
                    <div className="section-header-four">
                        <h5><span className="title-dot"></span>Frequently Asked Questions</h5>
                        <h2 className="fw-300">Most Common and Top <br /> Questions Answered</h2>
                    </div>
                    <div>
                        <p>Most common questions answered. Have any other questions? <br /> Please contact us and we will be in touch ASAP.</p>
                        <Link href="/contact" className="btn-three mt-50">Contact Us<i className="ri-arrow-right-line fs-5"></i></Link>
                    </div>
                </div>

                <div className="faq-four__accordion accordion-two">
                    <div className="accordion" id="accordionExample">
                        {faqs.map((faq, index) => (
                            <div className="accordion-item" key={faq.id}>
                                <h2 className="accordion-header" id={`heading${faq.id}`}>
                                    <button
                                        className={`accordion-button ${activeIndex === index ? '' : 'collapsed'}`}
                                        type="button"
                                        onClick={() => setActiveIndex(index)}
                                        aria-expanded={activeIndex === index ? "true" : "false"}
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#${faq.id}`}
                                        aria-controls={faq.id}
                                    >
                                        {faq.question}
                                    </button>
                                </h2>
                                <div
                                    id={faq.id}
                                    className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
                                    aria-labelledby={`heading${faq.id}`}
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
