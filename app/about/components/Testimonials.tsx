"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCirclePlay, FaStar } from "react-icons/fa6";
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
    {
        name: "Vikram Reddy",
        role: "Founder & CEO",
        image: "/Testimonials/vikram.png",
        type: "video"
    },
    {
        name: "Neha Singh",
        role: "Managing Director",
        image: "/Testimonials/neha.png",
        type: "message",
        stars: 5,
        message: "Their user-focused approach and expertise helped us build a product our customers love. Dilshaj Infotech delivered a seamless solution with creativity, professionalism, and true commitment to quality."
    },
    {
        name: "Arjun Mehta",
        role: "CTO",
        image: "/Testimonials/arjun.png",
        type: "video"
    },
    {
        name: "Priya Sharma",
        role: "Product Manager",
        image: "/Testimonials/priya.png",
        type: "message",
        stars: 5,
        message: "\"The development process was incredibly smooth. They didn't just write code; they understood our business goals and helped us refine our digital strategy for better user engagement.\""
    },
    {
        name: "Ananya Gupta",
        role: "Co-Founder & CEO",
        image: "/Testimonials/ananya.png",
        type: "video"
    },
    {
        name: "Sonal Varma",
        role: "Head of Operations",
        image: "/Testimonials/sonal.png",
        type: "message",
        stars: 5,
        message: "Dilshaj Infotech transformed our legacy systems into a modern, high-performance platform. Their attention to detail and proactive support made all the difference in our success."
    },
    {
        name: "Karthik Nair",
        role: "Tech Lead",
        image: "/Testimonials/karthik.png",
        type: "video"
    },
    {
        name: "Rahul Sharma",
        role: "CEO",
        image: "/Testimonials/rahul.png",
        type: "message",
        stars: 5,
        message: "\"Dilshaj Infotech exceeded our expectations with their creativity and technical expertise. Their team understood our requirements clearly and delivered a solution that improved our business performance and digital presence.\""
    }
];

export default function Testimonials() {
    const container = useRef(null);

    useGSAP(() => {
        // Header animation
        gsap.fromTo(".testimonial-header",
            { y: 50, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 85%",
                },
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out"
            }
        );

        // Testimonial cards animation
        gsap.fromTo(".testimonial-card",
            { scale: 0.9, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 85%",
                },
                scale: 1,
                opacity: 1,
                stagger: 0.1,
                duration: 0.8,
                ease: "power2.out",
                immediateRender: false
            }
        );
    }, { scope: container });

    return (
        <section ref={container} id="testimonials" className="w-full bg-[#0a0a0a] flex flex-col items-center relative overflow-hidden h-[896px] py-20">
            {/* Cinematic Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/Home/bg_jobs.png"
                    alt="Background"
                    fill
                    className="object-cover opacity-60 mix-blend-overlay"
                    priority
                />
                <div className="absolute inset-0 bg-linear-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
            </div>

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
                    <span className="text-white font-bold text-[24px] tracking-wider pr-4">Testimonials</span>
                </div>
            </div>

            <div className="w-full max-w-[1700px] px-8 md:px-[104px] flex flex-col relative z-20">
                <h2 className="testimonial-header text-[32px] md:text-[44px] font-semibold text-white leading-tight mb-20 max-w-full lg:max-w-[1200px]">
                    Real stories from clients who trust our technology <br className="hidden md:block" /> and expertise.
                </h2>

                <div className="relative group mx-auto w-fit max-w-full">
                    {/* Scroll Controls */}
                    <button
                        suppressHydrationWarning
                        onClick={() => document.getElementById('testimonial-scroll')?.scrollBy({ left: -338, behavior: 'smooth' })}
                        className="absolute -left-12 md:-left-24 lg:-left-36 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 items-center justify-center backdrop-blur-md transition-all border border-white/20 hidden md:flex"
                    >
                        <IoMdArrowBack className="w-6 h-6 text-white" />
                    </button>

                    <button
                        suppressHydrationWarning
                        onClick={() => document.getElementById('testimonial-scroll')?.scrollBy({ left: 338, behavior: 'smooth' })}
                        className="absolute -right-12 md:-right-24 lg:-right-36 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 items-center justify-center backdrop-blur-md transition-all border border-white/20 hidden md:flex"
                    >
                        <IoMdArrowForward className="w-6 h-6 text-white" />
                    </button>

                    {/* Testimonial Cards Carousel */}
                    <div
                        id="testimonial-scroll"
                        className="flex gap-8 overflow-x-auto snap-x snap-mandatory py-4 pb-12 max-w-[1320px] [ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    >
                        {(testimonials || []).map((t, idx) => (
                            t.type === 'video' ? (
                                <div key={idx} className="testimonial-card shrink-0 w-[306px] h-[401px] relative rounded-[24px] overflow-hidden snap-start shadow-2xl border border-white/10 group/card">
                                    <Image src={t.image} alt={t.name} fill className="object-cover transition-transform duration-700 group-hover/card:scale-105" />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent" />

                                    <div className="absolute bottom-6 left-5 right-5 flex flex-col gap-2">
                                        <div className="bg-white/15 backdrop-blur-xl px-4 py-4 rounded-[20px] border border-white/20 w-full flex items-center gap-4 shadow-xl">
                                            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#3799FA] shadow-lg shrink-0">
                                                <FaCirclePlay className="w-5 h-5" />
                                            </div>
                                            <div className="flex flex-col overflow-hidden">
                                                <span className="text-white font-bold text-[16px] truncate">{t.name} —</span>
                                                <span className="text-white/70 text-[13px] font-semibold truncate uppercase tracking-wide">{t.role}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div key={idx} className="testimonial-card shrink-0 w-[306px] h-[446px] bg-[#1a1c1e]/80 backdrop-blur-md rounded-[24px] p-8 snap-start border border-white/5 flex flex-col justify-between shadow-2xl">
                                    <div>
                                        <div className="flex gap-1.5 mb-8">
                                            {[...Array(t.stars || 5)].map((_, i) => (
                                                <FaStar key={i} className="text-white w-3.5 h-3.5" />
                                            ))}
                                        </div>
                                        <div className="max-h-[220px] overflow-y-auto pr-1">
                                            <p className="text-white/80 font-semibold text-[15px] leading-relaxed italic">
                                                {t.message}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-white/5 p-4 rounded-[20px] border border-white/5 flex items-center gap-4 hover:bg-white/10 transition-colors duration-300">
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 shrink-0">
                                            <Image src={t.image} alt={t.name} fill className="object-cover" />
                                        </div>
                                        <div className="flex flex-col overflow-hidden">
                                            <span className="text-white font-bold text-[15px] truncate">{t.name},</span>
                                            <span className="text-white/40 text-[11px] font-bold uppercase tracking-wider truncate">{t.role}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </div>

            {/* Perspective Grid Background Effect */}
            <div className="absolute bottom-0 left-0 right-0 h-[500px] pointer-events-none opacity-20 z-0"
                style={{
                    perspective: '1000px',
                    transformStyle: 'preserve-3d'
                }}>
                <div className="absolute inset-0"
                    style={{
                        backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
                        backgroundSize: '80px 80px',
                        transform: 'rotateX(55deg) translateY(-100px)',
                        maskImage: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))'
                    }} />
            </div>
        </section>
    );
}
