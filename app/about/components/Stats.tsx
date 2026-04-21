"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const stats = [
    {
        value: "15+",
        label: "Project Ideas Delivered",
        delay: "0.1s",
    },
    {
        value: "8+",
        label: "Project Ideas Delivered", // The image shows "Project Ideas Delivered" twice for 15+ and 8+, but logically 8+ might be years or something else. I'll stick to the image text.
        delay: "0.2s",
    },
    {
        value: "6+",
        label: "Industry Domains",
        delay: "0.3s",
    },
    {
        value: "98%",
        label: "On-Time Project Delivery",
        delay: "0.4s",
    },
    {
        value: "24/7",
        label: "Technical Support",
        delay: "0.5s",
    },
    {
        value: "100%",
        label: "Quality Assurance Standards",
        delay: "0.6s",
    },
];

export default function Stats() {
    const container = useRef(null);

    useGSAP(() => {
        // Headline and Map animation
        gsap.fromTo(".stats-headline",
            { x: -100, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 85%",
                },
                x: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out"
            }
        );

        // Glass Card animation
        gsap.fromTo(".stats-glass-card",
            { scale: 0.9, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                },
                scale: 1,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                immediateRender: false
            }
        );

        // Stat items intro animation
        gsap.fromTo(".stat-item",
            { y: 30, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 75%",
                },
                y: 0,
                opacity: 1,
                stagger: 0.15,
                duration: 0.8,
                ease: "back.out(1.7)",
                immediateRender: false
            }
        );
    }, { scope: container });

    return (
        <section ref={container} className="relative w-full bg-black py-16 md:py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
            <div className="relative z-10 w-full max-w-[1700px] mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-20">

                {/* Left Side: Headline with Map Background */}
                <div className="stats-headline w-full lg:w-[45%] space-y-6 relative py-12 lg:py-20 flex flex-col items-center lg:items-start text-center lg:text-left">
                    {/* Map Background positioned to start from the 2nd line */}
                    <div className="absolute top-[30%] lg:top-[40%] left-0 w-full h-[120%] lg:h-[150%] z-0 opacity-40 lg:opacity-80 pointer-events-none">
                        <Image
                            src="/about/map-removebg-preview.png"
                            alt="Map Background"
                            fill
                            className="object-contain object-center lg:object-top-left scale-125 lg:scale-100"
                            priority
                        />
                    </div>

                    <div className="relative z-10 w-full">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
                            Driving Innovation with <br className="hidden sm:block" />
                            <span className="text-white">Scalable Technology & <br className="hidden lg:block" /> Proven Execution</span>
                        </h2>
                    </div>
                </div>

                {/* Right Side: Stats Grid inside Glass Card */}
                <div className="stats-glass-card w-full lg:w-[55%] p-6 sm:p-8 md:p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-4xl md:rounded-[2.5rem] shadow-2xl relative z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-4">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="stat-item group relative flex flex-col items-center justify-center p-8 bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/50 rounded-2xl transition-all duration-300 hover:border-[#31B5FE]/50 hover:bg-zinc-800/80"
                                style={{ animationDelay: stat.delay }}
                            >
                                <span className="text-4xl md:text-5xl font-bold text-[#31B5FE] group-hover:text-white transition-colors duration-300">
                                    {stat.value}
                                </span>
                                <span className="mt-4 text-center text-zinc-400 text-sm font-medium leading-tight min-h-10 flex items-center">
                                    {stat.label}
                                </span>

                                {/* Corner accent on hover */}
                                <div className="absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 border-[#31B5FE]/0 group-hover:w-4 group-hover:h-4 group-hover:border-[#31B5FE]/50 transition-all duration-300 rounded-tr-xl" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background Decorative Glows */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#31B5FE]/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#AC52F2]/10 rounded-full blur-[100px] pointer-events-none" />
        </section>
    );
}
