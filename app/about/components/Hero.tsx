"use client";

import Image from "next/image";
import { FaReact, FaNodeJs, FaAws, FaFlutter, FaChevronRight } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const desktopImages = [
    "/about/vizag-1.png",
    "/about/vizag-2.png",
    "/about/vizag-3.png",
    "/about/vizag-4.png",
    "/about/vizag-5.png",
];

export default function Hero() {
    const [currentIdx, setCurrentIdx] = useState(0);
    const [isActionActive, setIsActionActive] = useState(false);
    const container = useRef(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIdx((prev) => (prev + 1) % desktopImages.length);
        }, 7000);
        return () => clearInterval(timer);
    }, []);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

        tl.from(".hero-title", {
            y: 80,
            opacity: 0,
            stagger: 0.2,
        })
            .from(".hero-text", {
                y: 40,
                opacity: 0,
            }, "-=0.6")
            .from(".hero-button", {
                scale: 0.8,
                opacity: 0,
            }, "-=0.6")
            .from(".hero-tech-item", {
                y: 30,
                opacity: 0,
                stagger: 0.1,
            }, "-=0.8");
    }, { scope: container });

    return (
        <section ref={container} className="relative w-full min-h-[70vh] md:min-h-[80vh] flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden">
            {/* Background Slideshow - FAIL-SAFE LAYERED APPROACH */}
            <div
                className="absolute inset-0 z-0 overflow-hidden bg-black"
                style={{
                    backgroundImage: `url('${desktopImages[0]}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                {/* Dynamic Layers */}
                {desktopImages.map((src, idx) => (
                    <div
                        key={src}
                        className={`absolute inset-0 transition-all duration-2000 ease-in-out ${idx === currentIdx ? "opacity-100 scale-100" : "opacity-0 scale-105"
                            }`}
                    >
                        <Image
                            src={src}
                            alt={`About Background ${idx + 1}`}
                            fill
                            priority={idx === 0}
                            className="object-cover"
                            sizes="100vw"
                            quality={90}
                        />
                    </div>
                ))}
                {/* Dark Overlay - Standardized Z-Index to stay below content but above images */}
                <div className="absolute inset-0 bg-black/50 z-1" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-[1200px] px-6 text-center flex flex-col items-center gap-6 md:gap-8">
                <h1 className="hero-title text-3xl sm:text-4xl md:text-6xl lg:text-5xl font-semibold text-white leading-tight max-w-5xl">
                    Transform Your Business With <br className="hidden sm:block" />
                    Next-Generation Digital Solutions
                </h1>

                <p className="hero-text text-base md:text-xl text-gray-300 max-w-5xl leading-relaxed">
                    We are a modern technology company helping startups and enterprises streamline operations, <br className="hidden md:block" />
                    enhance user experiences, and accelerate growth with secure, scalable, and performance-driven digital solutions.
                </p>

                <div className="hero-button flex justify-center w-full mt-4">
                    <button
                        suppressHydrationWarning
                        className="flex items-center group relative h-12 w-fit overflow-hidden transition-all duration-700 rounded-[34px_34px_0px_34px] hover:rounded-[34px_34px_34px_0px]"
                    >
                        {/* LEFT ICON CIRCLE */}
                        <div className="absolute left-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg z-20 transition-all duration-700 ease-in-out group-hover:left-[calc(100%-48px)] group-hover:bg-linear-to-r group-hover:from-[#3799FA] group-hover:to-[#9961FB] group-hover:scale-105">
                            <FaChevronRight className="w-4 h-4 text-[#3799FA] transition-all duration-700 ease-in-out group-hover:text-white" />
                        </div>

                        {/* MAIN BUTTON BODY */}
                        <div
                            className="pl-14 pr-8 h-full flex items-center text-white font-bold text-[15px] shadow-[0_8px_18px_rgba(55,153,250,0.25)] transition-all duration-700 ease-in-out bg-linear-to-r from-[#3799FA] to-[#9961FB] group-hover:from-white group-hover:to-white group-hover:text-black group-hover:pl-6 group-hover:pr-14 rounded-[34px_34px_0px_34px] group-hover:rounded-[34px_34px_34px_0px]"
                        >
                            Connect With Us
                        </div>
                    </button>
                </div>

                {/* Technologies Row */}
                <div className="mt-12 md:mt-16 w-full flex flex-wrap items-center justify-center gap-6 md:gap-16 opacity-80 shrink-0 px-4">
                    <div className="flex items-center gap-3 group cursor-pointer w-full md:w-auto justify-center mb-4 md:mb-0">
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <span className="text-white font-medium text-sm flex items-center gap-2">
                                <span className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center overflow-hidden shrink-0">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" className="w-2.5 h-2.5"><path d="M5 13l4 4L19 7" /></svg>
                                </span>
                                Technologies We Work With
                            </span>
                            <span className="text-white text-xs ml-0 md:ml-7 opacity-70">Across Different Platforms</span>
                        </div>
                    </div>

                    <div className="hero-tech-item flex items-center gap-3 transition-transform cursor-pointer">
                        <FaReact className="w-6 h-6 md:w-8 md:h-8 text-white" />
                        <span className="text-white text-lg md:text-xl font-bold">React</span>
                    </div>

                    <div className="hero-tech-item flex items-center gap-3 transition-transform cursor-pointer">
                        <FaNodeJs className="w-6 h-6 md:w-8 md:h-8 text-white" />
                        <span className="text-white text-lg md:text-xl font-bold">Node.js</span>
                    </div>

                    <div className="hero-tech-item flex items-center gap-3 transition-transform cursor-pointer">
                        <FaAws className="w-7 h-7 md:w-9 md:h-9 text-white" />
                        <span className="text-white text-lg md:text-xl font-bold uppercase tracking-widest">AWS</span>
                    </div>

                    <div className="hero-tech-item flex items-center gap-3 transition-transform cursor-pointer">
                        <SiMongodb className="w-6 h-6 md:w-8 md:h-8 text-white" />
                        <span className="text-white text-lg md:text-xl font-bold">MongoDB</span>
                    </div>

                    <div className="hero-tech-item flex items-center gap-3 transition-transform cursor-pointer">
                        <FaFlutter className="w-6 h-6 md:w-8 md:h-8 text-white" />
                        <span className="text-white text-lg md:text-xl font-bold">Flutter</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
