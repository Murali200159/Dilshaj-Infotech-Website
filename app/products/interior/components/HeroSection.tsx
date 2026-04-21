"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HeroSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            // Mobile entrance
            gsap.from(".hero-mobile-content", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                delay: 0.2
            });

            // Desktop entrance
            gsap.from(".hero-desktop-content", {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                delay: 0.3
            });
            
            // Background image parallax or reveal
            gsap.from(".hero-image-reveal", {
                scale: 1.05,
                opacity: 0,
                duration: 1.5,
                ease: "power2.out"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full min-h-screen flex flex-col md:block bg-black shrink-0 overflow-hidden">

            {/* --- Mobile View Top Content --- */}
            <div
                style={{ willChange: "transform, opacity" }}
                className="flex-1 flex flex-col items-center justify-center px-4 py-16 md:hidden z-10 w-full relative bg-linear-to-b from-black to-[#050505] hero-mobile-content"
            >
                <h1
                    className="text-white text-center font-bold"
                    style={{
                        fontSize: "25px",
                        lineHeight: "100%",
                        letterSpacing: "-1.5%",
                        color: "#FFFFFF"
                    }}
                >
                    Design Smarter. Build<br />Better.
                </h1>
                <p
                    className="text-center mt-6 w-full max-w-[400px]"
                    style={{
                        fontSize: "20px",
                        lineHeight: "38px",
                        letterSpacing: "0px",
                        color: "#F1F5F9BD"
                    }}
                >
                    Dilshaj Infotech is developing an intelligent Architecture & Design
                    Platform that streamlines planning, visualization, collaboration, and
                    project management in one unified ecosystem.
                </p>

                <button
                    suppressHydrationWarning
                    className="mt-10 flex items-center group relative h-12 w-fit cursor-pointer overflow-hidden transition-all duration-700 rounded-[34px_34px_0px_34px] hover:rounded-[34px_34px_34px_0px]"
                >
                    <div className="absolute left-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-20 transition-all duration-700 ease-in-out group-hover:left-[calc(100%-48px)] group-hover:bg-linear-to-r group-hover:from-[#3799FA] group-hover:to-[#9961FB] group-hover:scale-105">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3799FA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-0.5 transition-all duration-700 ease-in-out group-hover:text-white"><polyline points="9 18 15 12 9 6" /></svg>
                    </div>
                    <div className="pl-14 pr-8 h-full flex items-center text-white font-bold text-[15px] shadow-[0_8px_18px_rgba(55,153,250,0.25)] transition-all duration-700 ease-in-out bg-linear-to-r from-[#3799FA] to-[#9961FB] group-hover:from-white group-hover:to-white group-hover:text-black group-hover:pl-6 group-hover:pr-14 rounded-[34px_34px_0px_34px] group-hover:rounded-[34px_34px_34px_0px]">
                        Coming Soon
                    </div>
                </button>
            </div>

            {/* --- Mobile Image (Bottom) & Desktop Background --- */}
            <div className="relative w-full h-[45vh] sm:h-[55vh] md:h-screen shrink-0 md:absolute md:inset-0 md:z-0 overflow-hidden hero-image-reveal">
                <div className="hidden md:block absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src="/products-images/architechture.png"
                        alt="Architecture Background"
                        fill
                        className="object-cover object-bottom md:object-center"
                        priority
                    />
                </div>
            </div>

            {/* --- Desktop View Bottom Content --- */}
            <div
                style={{ willChange: "transform, opacity" }}
                className="hidden md:flex absolute bottom-0 left-0 right-0 z-20 w-full px-12 lg:px-24 pb-16 justify-between items-end hero-desktop-content"
            >
                <div className="max-w-[700px] xl:max-w-[850px]">
                    <h1
                        className="text-white font-bold"
                        style={{
                            fontSize: "40px",
                            lineHeight: "100%",
                            letterSpacing: "-1.5%",
                            color: "#FFFFFF"
                        }}
                    >
                        Design Smarter. Build Better.
                    </h1>
                    <p
                        className="mt-5"
                        style={{
                            fontSize: "25px",
                            lineHeight: "38px",
                            letterSpacing: "0px",
                            color: "#F1F5F9BD"
                        }}
                    >
                        Dilshaj Infotech is developing an intelligent Architecture & Design
                        Platform that streamlines planning, visualization, collaboration,
                        and project management in one unified ecosystem.
                    </p>
                </div>

                <button
                    suppressHydrationWarning
                    className="flex items-center group relative h-12 w-fit cursor-pointer shrink-0 mb-4 ml-8 overflow-hidden transition-all duration-700 rounded-[34px_34px_0px_34px] hover:rounded-[34px_34px_34px_0px]"
                >
                    <div className="absolute left-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-20 transition-all duration-700 ease-in-out group-hover:left-[calc(100%-48px)] group-hover:bg-linear-to-r group-hover:from-[#3799FA] group-hover:to-[#9961FB] group-hover:scale-105">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3799FA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-0.5 transition-all duration-700 ease-in-out group-hover:text-white"><polyline points="9 18 15 12 9 6" /></svg>
                    </div>
                    <div className="pl-14 pr-8 h-full flex items-center text-white font-bold text-[15px] shadow-[0_8px_18px_rgba(55,153,250,0.25)] transition-all duration-700 ease-in-out bg-linear-to-r from-[#3799FA] to-[#9961FB] group-hover:from-white group-hover:to-white group-hover:text-black group-hover:pl-6 group-hover:pr-14 rounded-[34px_34px_0px_34px] group-hover:rounded-[34px_34px_34px_0px]">
                        Coming Soon
                    </div>
                </button>
            </div>
        </section>
    );
}
