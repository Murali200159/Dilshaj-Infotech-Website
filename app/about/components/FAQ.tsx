"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaPhone, FaPlus, FaMinus, FaWhatsapp } from "react-icons/fa6";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const faqData = [
    {
        question: "What Services Does Dilshaj Infotech Provide?",
        answer: "We offer a comprehensive range of services including Custom Software Development, Mobile App Development (iOS & Android), Web Application Development, Cloud Solutions, AI & Machine Learning Integration, and Digital Transformation consulting."
    },
    {
        question: "How Much Does a Custom Software Project Cost?",
        answer: "The cost depends on various factors such as project complexity, features, platform (web/mobile), and integration requirements. We provide tailored quotes after a detailed discovery session to understand your specific business needs."
    },
    {
        question: "How Long Does It Take to Develop a Web or Mobile Application?",
        answer: "Development timelines vary based on scope. Typically, a Minimum Viable Product (MVP) takes 2-4 months, while more complex enterprise solutions can take 6 months or longer. We follow agile methodologies to ensure timely delivery."
    },
    {
        question: "Can You Integrate New Solutions Into Existing Systems?",
        answer: "Yes, we specialize in legacy system modernization and third-party API integrations. We ensure that new solutions work seamlessly with your current infrastructure to minimize disruption and maximize efficiency."
    },
    {
        question: "Which Industries Do You Work With?",
        answer: "We work across diverse sectors including Healthcare, Education (EdTech), Finance (FinTech), E-commerce, Real Estate, and Logistics. Our team adapts to the specific compliance and functional needs of each industry."
    },
    {
        question: "Why Choose Dilshaj Infotech as Your Technology Partner?",
        answer: "Clients choose us for our technical excellence, transparent communication, and commitment to delivering user-centric solutions. We don't just build software; we partner with you to drive innovation and business growth."
    }
];

export default function FAQ() {
    const [activeFaqIdx, setActiveFaqIdx] = useState(0);
    const container = useRef(null);

    useGSAP(() => {
        // Header animation
        gsap.fromTo(".faq-header",
            { y: 40, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 85%",
                },
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out"
            }
        );

        // FAQ Items animation
        gsap.fromTo(".faq-item",
            { y: 30, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 85%",
                },
                y: 0,
                opacity: 1,
                stagger: 0.1,
                duration: 0.8,
                ease: "power2.out",
                immediateRender: false
            }
        );

        // Contact Card animation
        gsap.fromTo(".faq-contact-card",
            { x: 50, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                },
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                immediateRender: false
            }
        );
    }, { scope: container });

    return (
        <section ref={container} id="faq" className="w-full bg-[#f8fafc] py-24 flex flex-col items-center relative overflow-hidden">
            <div className="w-full flex justify-start mb-10 px-8 md:px-[104px] relative z-10">
                <div
                    className="relative flex items-center gap-4 px-10 py-3 w-fit ml-[-32px] md:ml-[-104px]"
                    style={{
                        background: 'linear-gradient(to right, #029EFA, #0E4E8B)',
                        clipPath: 'polygon(0% 0%, 100% 0%, 92% 50%, 100% 100%, 0% 100%)'
                    }}
                >
                    <div className="relative w-12 h-12">
                        <Image src="/Home/arrow.png" alt="Arrow" fill className="object-contain" />
                    </div>
                    <span className="text-white font-bold text-[24px] tracking-wider pr-4">FAQs</span>
                </div>
            </div>

            <div className="w-full max-w-[1700px] px-8 md:px-[104px] flex flex-col relative z-20">
                <h2 className="faq-header text-[32px] md:text-[44px] font-bold text-[#1a1c1e] leading-tight mb-16">
                    Frequently Asked Questions
                </h2>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Accordion Column */}
                    <div className="flex-1 w-full space-y-4">
                        {faqData.map((faq, idx) => (
                            <div
                                key={idx}
                                className={`faq-item bg-white rounded-[20px] transition-all duration-300 border ${activeFaqIdx === idx ? 'border-blue-500 shadow-xl' : 'border-black/5'}`}
                            >
                                <button
                                    suppressHydrationWarning
                                    onClick={() => setActiveFaqIdx(activeFaqIdx === idx ? -1 : idx)}
                                    className="w-full px-8 py-6 flex items-center justify-between text-left group"
                                >
                                    <div className="flex items-center gap-6">
                                        <span className="text-[#1a1c1e]/40 font-bold text-[18px]">
                                            {String(idx + 1).padStart(2, '0')}
                                        </span>
                                        <span className={`text-[18px] md:text-[20px] font-semibold transition-colors ${activeFaqIdx === idx ? 'text-blue-600' : 'text-[#1a1c1e] group-hover:text-blue-500'}`}>
                                            {faq.question}
                                        </span>
                                    </div>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${activeFaqIdx === idx ? 'bg-blue-600 text-white rotate-180' : 'bg-black/5 text-black/60'}`}>
                                        {activeFaqIdx === idx ? <FaMinus className="w-4 h-4" /> : <FaPlus className="w-4 h-4" />}
                                    </div>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${activeFaqIdx === idx ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="px-8 pb-8 pl-[84px] text-black/60 text-[16px] leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Card Column */}
                    <div className="faq-contact-card w-full lg:w-[399px] flex-shrink-0 sticky top-24">
                        <div
                            className="rounded-[32px] p-8 relative overflow-hidden flex flex-col items-center justify-center text-center shadow-2xl h-full"
                            style={{
                                background: 'linear-gradient(to bottom, #000000, #20B5F9)'
                            }}
                        >
                            {/* Floating Asset */}
                            <div
                                className="absolute -top-16 -right-16 opacity-40 pointer-events-none rotate-[15deg]"
                                style={{
                                    width: '364.52px',
                                    height: '420.6px'
                                }}
                            >
                                <Image src="/Home/question-mark.png" alt="Question Mark" fill className="object-contain" />
                            </div>

                            <div className="relative z-10 mt-20">
                                <h3 className="text-white text-[28px] font-bold mb-6 leading-tight">
                                    Do You Have More Questions?
                                </h3>
                                <p className="text-white/70 text-[15px] mb-10 px-4 leading-relaxed">
                                    We're here to help. If you didn't find the answer you're looking for, feel free to reach out to our team for personalized assistance.
                                </p>

                                <div className="w-full space-y-4 px-4">
                                    {/* Call Button */}
                                    <a href="tel:+918977272783" className="w-full py-4 rounded-xl flex items-center justify-center gap-3 text-white font-bold transition-transform hover:scale-[1.02] shadow-lg"
                                        style={{
                                            background: 'linear-gradient(to right, #3799FA, #9961FB)'
                                        }}>
                                        <FaPhone className="w-5 h-5" />
                                        Call Us Now
                                    </a>

                                    {/* WhatsApp Button */}
                                    <a href="https://wa.me/918977272783?text=Hello%20Dilshaj%20Infotech%20Team" target="_blank" rel="noopener noreferrer" className="w-full py-4 rounded-xl flex items-center justify-center gap-3 bg-white text-black font-bold transition-transform hover:scale-[1.02] shadow-lg">
                                        <FaWhatsapp className="w-6 h-6 text-[#25D366]" />
                                        Connect on WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
