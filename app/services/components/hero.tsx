"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";

import { FaChevronRight } from "react-icons/fa6";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export default function Hero() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            /* ─── MASTER TIMELINE (page load) ─── */
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            // 1. Background fade-in
            tl.from(".hero-bg-layer", {
                opacity: 0,
                duration: 1.4,
            });

            // 2. "Looking for a" subtitle — clip-path reveal
            tl.from(".gsap-subtitle", {
                opacity: 0,
                y: 30,
                duration: 0.7,
            }, "-=0.8");

            // 3. Main headlines — staggered slide-up with clip reveal
            tl.from(".gsap-headline", {
                opacity: 0,
                y: 60,
                skewY: 4,
                stagger: 0.18,
                duration: 0.9,
            }, "-=0.5");

            // 4. Body paragraph — fade up
            tl.from(".gsap-body", {
                opacity: 0,
                y: 25,
                duration: 0.7,
            }, "-=0.4");

            // 5. CTA button — scale + fade
            tl.from(".gsap-cta", {
                opacity: 0,
                scale: 0.85,
                duration: 0.6,
            }, "-=0.3");

            // 6. Right column bot image — fly in from right + slight rotation
            tl.from(".gsap-bot-wrapper", {
                opacity: 0,
                x: 120,
                rotation: 6,
                duration: 1.4,
                ease: "expo.out",
            }, "-=1.2");

            // 7. Floating glow orbs
            tl.from(".gsap-glow", {
                opacity: 0,
                scale: 0,
                stagger: 0.1,
                duration: 1,
                ease: "elastic.out(1, 0.6)",
            }, "-=0.8");

            /* ─── CONTINUOUS BOT FLOAT ─── */
            gsap.to(".gsap-bot-wrapper", {
                y: -18,
                duration: 2.8,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true,
            });

            /* ─── GLOW PULSE ─── */
            gsap.to(".gsap-glow-pulse", {
                scale: 1.15,
                opacity: 0.55,
                duration: 2,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true,
            });

            /* ─── BOTTOM CARDS — stagger slide up on scroll ─── */
            gsap.from(".gsap-hero-card", {
                opacity: 0,
                y: 60,
                stagger: 0.18,
                duration: 0.85,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".gsap-hero-card-container",
                    start: "top 92%",
                },
            });

            /* ─── LEFT BORDER REVEAL on each card ─── */
            gsap.from(".gsap-card-border", {
                scaleY: 0,
                transformOrigin: "top center",
                stagger: 0.18,
                duration: 0.6,
                delay: 0.3,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".gsap-hero-card-container",
                    start: "top 92%",
                },
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`${poppins.className} relative w-full pt-[90px] lg:pt-[80px] pb-6 flex flex-col justify-start min-h-screen bg-[#07050e] overflow-hidden`}
        >
            {/* ── Background layer ── */}
            <div className="hero-bg-layer absolute top-0 right-0 w-full lg:w-[65%] h-full z-0 opacity-90 pointer-events-none">
                <Image
                    src="/pro-det/hero-bg.png"
                    alt="Abstract Background"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="right center"
                    priority
                />
                <div className="absolute inset-0 bg-linear-to-r from-[#07050e] via-[#07050e]/80 to-transparent" />
                <div className="absolute right-[40%] top-0 w-px h-full bg-[#8e54e9]/20 hidden lg:block" />
                <div className="absolute right-[20%] top-0 w-px h-full bg-[#8e54e9]/20 hidden lg:block" />
            </div>

            {/* ── Decorative glow orbs ── */}
            <div className="gsap-glow gsap-glow-pulse absolute top-[20%] left-[5%] w-[320px] h-[320px] rounded-full bg-blue-600/10 blur-[90px] pointer-events-none" />
            <div className="gsap-glow gsap-glow-pulse absolute bottom-[10%] right-[30%] w-[240px] h-[240px] rounded-full bg-purple-600/10 blur-[80px] pointer-events-none" />
            <div className="gsap-glow absolute top-[55%] left-[40%] w-[180px] h-[180px] rounded-full bg-cyan-500/8 blur-[60px] pointer-events-none" />

            {/* ── Main grid ── */}
            <div className="w-full px-[5%] xl:px-[8%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10 grow mt-[-40px]">

                {/* Left Column */}
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left justify-start pt-14 lg:pt-0 mt-2 lg:mt-[-80px]">

                    {/* Subtitle */}
                    <h2 className="gsap-subtitle text-[#ececec] text-[15.5px] md:text-[36px] lg:text-[40px] font-normal leading-tight mb-2 lg:mb-2 tracking-wide">
                        Looking for a
                    </h2>

                    {/* Headlines */}
                    <div className="overflow-hidden">
                        <h1 className="gsap-headline text-white text-[25.5px] md:text-[52px] lg:text-[58px] font-bold leading-[1.2] lg:leading-[1.1] mb-0 lg:mb-2 tracking-wide">
                            Technology Partner
                        </h1>
                    </div>
                    <div className="overflow-hidden">
                        <h1 className="gsap-headline text-white text-[25.5px] md:text-[50px] lg:text-[56px] font-bold leading-[1.2] lg:leading-[1.1] mb-5 lg:mb-6 tracking-wide">
                            You Can Truly Rely On?
                        </h1>
                    </div>

                    {/* Body */}
                    <p className="gsap-body text-[#a5a5af] text-[13px] md:text-[18px] max-w-180 font-normal leading-[1.7] lg:leading-[1.6] mt-2 lg:mt-12 mb-7 w-[95%] px-5 lg:px-0 mx-auto lg:mx-0">
                        Dilshaj Infotech delivers innovative digital solutions,
                        scalable products, and industry-ready services designed
                        to transform your business vision into reality.
                    </p>

                    {/* CTA Button */}
                    <button
                        suppressHydrationWarning
                        className="gsap-cta flex items-center group relative h-12 w-fit cursor-pointer overflow-hidden transition-all duration-700 rounded-[34px_34px_0px_34px] hover:rounded-[34px_34px_34px_0px]"
                    >
                        <div className="absolute left-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-20 transition-all duration-700 ease-in-out group-hover:left-[calc(100%-48px)] group-hover:bg-linear-to-r group-hover:from-[#3799FA] group-hover:to-[#9961FB] group-hover:scale-105">
                            <FaChevronRight className="w-4 h-4 text-[#3799FA] transition-all duration-700 ease-in-out group-hover:text-white" />
                        </div>
                        <div className="pl-14 pr-8 h-full flex items-center text-white font-bold text-[15px] shadow-[0_8px_18px_rgba(55,153,250,0.25)] transition-all duration-700 ease-in-out bg-linear-to-r from-[#3799FA] to-[#9961FB] group-hover:from-white group-hover:to-white group-hover:text-black group-hover:pl-6 group-hover:pr-14 rounded-[34px_34px_0px_34px] group-hover:rounded-[34px_34px_34px_0px]">
                            Build Your Future Today
                        </div>
                    </button>
                </div>

                {/* Right Column — Bot Image */}
                <div className="relative h-[500px] md:h-[650px] lg:h-[800px] w-full flex items-center justify-center lg:justify-end mt-[-20px] md:mt-12 lg:mt-0">
                    {/* Ring glow behind bot */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-[340px] h-[340px] md:w-[460px] md:h-[460px] rounded-full border border-blue-500/10 animate-spin-slow" style={{ animationDuration: '20s' }} />
                        <div className="absolute w-[260px] h-[260px] md:w-[350px] md:h-[350px] rounded-full border border-purple-500/10 animate-spin-slow" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
                    </div>

                    <div className="gsap-bot-wrapper relative w-[115%] max-w-[700px] lg:max-w-[950px] h-[120%] -right-4 lg:-right-[80px] top-[-30px] md:top-10 lg:top-[60px]">
                        <Image
                            src="/services/bot-tab.png"
                            alt="Robot holding tablet"
                            layout="fill"
                            objectFit="contain"
                            className="z-10 drop-shadow-[0_30px_60px_rgba(55,153,250,0.3)]"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* ── 3 Bottom Cards ── */}
            <div className="gsap-hero-card-container w-full px-0 md:px-[5%] xl:px-[8%] mx-auto mt-[-30px] md:mt-6 mb-0 md:mb-8 relative z-20">
                <div className="w-full bg-[#1b1c1e]/90 md:bg-[#1c1d20]/95 backdrop-blur-2xl md:rounded-2xl border-t border-[#ffffff15] md:border md:border-white/30 flex flex-col md:flex-row shadow-[0_20px_60px_rgba(0,0,0,0.5)]">

                    {/* Card 1 */}
                    <div className="gsap-hero-card flex-1 flex flex-row items-center p-6 md:p-8 lg:p-10 xl:p-12 border-b border-[#ffffff10] md:border-b-0 md:border-r md:border-white/20 relative overflow-hidden group">
                        <div className="gsap-card-border absolute left-0 top-0 h-full w-[3px] bg-linear-to-b from-blue-400 to-purple-500 rounded-full" />
                        <div className="absolute -inset-2 bg-linear-to-r from-blue-500/0 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="w-[30px] h-[30px] md:w-[48px] md:h-[48px] min-w-[30px] min-h-[30px] md:min-w-[48px] md:min-h-[48px] rounded-full bg-[#3b82f6] flex items-center justify-center mr-5 shadow-sm group-hover:scale-110 transition-transform duration-300">
                            <Image src="/services/technology/img1.png" alt="Scalable Web" width={24} height={24} className="w-[14px] h-[14px] md:w-6 md:h-6 object-contain brightness-0 invert" />
                        </div>
                        <p className="text-[#a0a0ab] text-[13px] md:text-[16px] lg:text-[17px] leading-[1.6] font-normal tracking-wide group-hover:text-white/80 transition-colors duration-300">
                            Scalable Web Solutions Powered By Modern Technology &amp; Smart Architecture
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="gsap-hero-card flex-1 flex flex-row items-center p-6 md:p-8 lg:p-10 xl:p-12 border-b border-[#ffffff10] md:border-b-0 md:border-r md:border-white/20 relative overflow-hidden group">
                        <div className="gsap-card-border absolute left-0 top-0 h-full w-[3px] bg-linear-to-b from-cyan-400 to-blue-500 rounded-full" />
                        <div className="absolute -inset-2 bg-linear-to-r from-blue-500/0 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="w-[30px] h-[30px] md:w-[48px] md:h-[48px] min-w-[30px] min-h-[30px] md:min-w-[48px] md:min-h-[48px] rounded-full bg-[#3b82f6] flex items-center justify-center mr-5 shadow-sm group-hover:scale-110 transition-transform duration-300">
                            <Image src="/services/technology/img2.png" alt="Performance" width={24} height={24} className="w-[14px] h-[14px] md:w-6 md:h-6 object-contain brightness-0 invert" />
                        </div>
                        <p className="text-[#a0a0ab] text-[13px] md:text-[16px] lg:text-[17px] leading-[1.6] font-normal tracking-wide group-hover:text-white/80 transition-colors duration-300">
                            Performance-Driven Development Built For Speed, Security &amp; Reliability
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="gsap-hero-card flex-1 flex flex-row items-center p-6 md:p-8 lg:p-10 xl:p-12 relative overflow-hidden group">
                        <div className="gsap-card-border absolute left-0 top-0 h-full w-[3px] bg-linear-to-b from-purple-400 to-pink-500 rounded-full" />
                        <div className="absolute -inset-2 bg-linear-to-r from-blue-500/0 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="w-[30px] h-[30px] md:w-[48px] md:h-[48px] min-w-[30px] min-h-[30px] md:min-w-[48px] md:min-h-[48px] rounded-full bg-[#3b82f6] flex items-center justify-center mr-5 shadow-sm group-hover:scale-110 transition-transform duration-300">
                            <Image src="/services/technology/img3.png" alt="User-Centric" width={24} height={24} className="w-[14px] h-[14px] md:w-6 md:h-6 object-contain brightness-0 invert" />
                        </div>
                        <p className="text-[#a0a0ab] text-[13px] md:text-[16px] lg:text-[17px] leading-[1.6] font-normal tracking-wide group-hover:text-white/80 transition-colors duration-300">
                            User-Centric Web Experiences Designed To Maximize Growth &amp; Engagement
                        </p>
                    </div>

                </div>
            </div>

            <style jsx>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to   { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 20s linear infinite;
                }
            `}</style>
        </section>
    );
}
