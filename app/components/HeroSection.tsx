"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaPhone, FaWhatsapp, FaChevronRight } from "react-icons/fa6";
import GetInTouchModal from "./GetInTouchModal";

const badges = [
    { role: "Manager", x: "4.5%", y: "60%", labelPos: "bottom", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop", delay: "0.2s" },
    { role: "Designer", x: "27%", y: "12%", labelPos: "top", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop", delay: "0s" },
    { role: "Developer", x: "41%", y: "62%", labelPos: "bottom", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&h=300&fit=crop", delay: "0.6s" },
    { role: "Marketer", x: "62%", y: "15%", labelPos: "top", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop", delay: "0.4s" },
    { role: "Investor", x: "83%", y: "64%", labelPos: "bottom", img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=200&q=80", delay: "0.3s" },
    { role: "Analyst", x: "92%", y: "20%", labelPos: "top", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80", delay: "0.5s" }
];

export default function HeroSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isGetInTouchOpen, setIsGetInTouchOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Badge cycling interval
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % badges.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // GSAP entrance timeline
    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // 1. Background glows – pulse in
        tl.fromTo(
            ".hero-glow-right",
            { opacity: 0, scale: 0.7 },
            { opacity: 1, scale: 1, duration: 1.4, ease: "power2.out" },
            0
        ).fromTo(
            ".hero-glow-left",
            { opacity: 0, scale: 0.7 },
            { opacity: 1, scale: 1, duration: 1.4, ease: "power2.out" },
            0.2
        );

        // 2. Mega headline words – stagger slide-up from below (clip trick)
        tl.fromTo(
            ".hero-word",
            { y: 80, opacity: 0, rotateX: 10 },
            {
                y: 0,
                opacity: 1,
                rotateX: 0,
                duration: 0.85,
                stagger: 0.2,
                ease: "expo.out",
            },
            0.05
        );

        // 3. Left headline lines – slide in from left, staggered
        tl.fromTo(
            ".hero-headline-line",
            { x: -50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 0.7,
                stagger: 0.1,
                ease: "power3.out",
            },
            0.4
        );

        // 4. Right sub-heading
        tl.fromTo(
            ".hero-subheading",
            { x: 40, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.65, ease: "power3.out" },
            0.5
        );

        // 5. Bullet list items – stagger fade-up
        tl.fromTo(
            ".hero-bullet",
            { y: 20, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.1,
                ease: "power2.out",
            },
            0.6
        );

        // 6. CTA button – scale pop + fade
        tl.fromTo(
            ".hero-cta",
            { scale: 0.9, opacity: 0, y: 15 },
            { scale: 1, opacity: 1, y: 0, duration: 0.6, ease: "back.out(1.4)" },
            0.8
        );

        // 7. Bot mascot – fade up elegantly
        tl.fromTo(
            ".hero-bot",
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.85, ease: "power3.out" },
            0.3
        );

        // 8. Desktop badges – pop in with stagger
        tl.fromTo(
            ".hero-badge",
            { scale: 0, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 0.5,
                stagger: 0.07,
                ease: "back.out(1.5)",
            },
            0.7
        );

        // 9. Mobile badges - same but separate selector
        tl.fromTo(
            ".hero-mobile-badge",
            { scale: 0, opacity: 0, y: 10 },
            {
                scale: 1,
                opacity: 1,
                y: 0,
                duration: 0.45,
                stagger: 0.06,
                ease: "back.out(1.5)",
            },
            0.6
        );

        // 10. Floating side icons
        tl.fromTo(
            ".hero-side-icon",
            { x: 40, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.55, stagger: 0.1, ease: "power3.out" },
            0.9
        );
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="relative">
            {/* Floating Side Icons */}
            <div className="fixed right-0 lg:right-1 top-[44%] lg:top-1/2 -translate-y-1/2 z-50 flex flex-col gap-0 lg:gap-5">
                <a
                    href="tel:+918977272783"
                    className="hero-side-icon w-[44px] h-[44px] bg-[#00A3FF] flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform"
                >
                    <FaPhone className="w-4 h-4" />
                </a>
                <a
                    href="https://wa.me/918977272783?text=Hello%20Dilshaj%20Infotech%20Team"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-side-icon w-[44px] h-[44px] bg-[#3BCF52] flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform"
                >
                    <FaWhatsapp className="w-6 h-6" />
                </a>
            </div>

            <main className="w-full flex flex-col items-center pt-2 relative">
                {/* Decorative Background Glows for Hero */}
                <div className="hero-glow-right absolute top-0 right-0 w-[600px] h-[600px] bg-[#31B5FE]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
                <div className="hero-glow-left absolute top-[20vh] left-0 w-[500px] h-[500px] bg-[#AC52F2]/5 rounded-full blur-[100px] -translate-x-1/4 pointer-events-none" />

                {/* HERO SECTION WRAPPER */}
                <div className="w-full max-w-[1700px] px-6 md:px-20 flex flex-col items-center">

                    {/* DOMINANT HEADLINE ZONE */}
                    <div className="relative w-full h-auto lg:h-[40vh] flex flex-col items-center justify-center mt-12 sm:mt-16 lg:mt-25 order-last lg:order-1 pt-0 lg:pt-0 py-4 lg:py-0">

                        <h1 className="text-[60px] min-[380px]:text-[80px] sm:text-[110px] lg:text-[100px] xl:text-[10vw] 2xl:text-[170px] font-bold lg:font-semibold text-gray-400 lg:text-black tracking-[-0.05em] z-10 text-center lg:opacity-100 w-full lg:w-full max-w-[100vw] lg:h-auto whitespace-normal xl:whitespace-nowrap drop-shadow-none lg:drop-shadow-sm flex flex-col lg:flex-row justify-center lg:items-center gap-[45px] sm:gap-[75px] lg:gap-[4vw] select-none" style={{ perspective: "1000px" }}>
                            <span className="hero-word block lg:inline leading-[0.75] lg:leading-none opacity-0 will-change-transform">Dilshaj</span>
                            <span className="hero-word block lg:inline leading-[0.75] lg:leading-none opacity-0 will-change-transform">Infotech</span>
                        </h1>

                        {/* DESKTOP MICRO BADGES LAYER */}
                        <div className="hidden lg:block absolute inset-0 pointer-events-none">
                            {badges.map((badge, i) => {
                                const isActive = i === activeIndex;
                                return (
                                    <div
                                        key={i}
                                        className={`hero-badge absolute flex flex-col items-center animate-float-slow transition-all duration-500 ${isActive ? "scale-110 z-30" : "scale-100 z-20 opacity-80"}`}
                                        style={{ left: badge.x, top: badge.y, animationDelay: badge.delay }}
                                    >
                                        {badge.labelPos === "top" && (
                                            <div className="relative mb-3">
                                                <div className="absolute -left-10 -top-4 w-7 h-7 z-30 drop-shadow-md">
                                                    <Image src="/Home/arrow.svg" alt="cursor" width={28} height={28} className="object-contain" />
                                                </div>
                                                <div className={`px-5 py-2 rounded-[8px] border flex items-center justify-center transition-all duration-500 shadow-lg ${isActive ? "bg-linear-to-r from-[#31B5FE] to-[#AC52F2] text-white border-transparent" : "bg-white text-gray-800 border-black/3"}`}>
                                                    <span className="text-[16px] font-medium tracking-tight">{badge.role}</span>
                                                </div>
                                            </div>
                                        )}
                                        <div className="relative group/avatar">
                                            <div className={`rounded-full bg-linear-to-br   from-[#31B5FE] to-[#7206de] shadow-xl p-[3px] transition-all duration-500 ${isActive ? "w-16 h-16" : "w-12 h-12"} ${isActive ? "ring-4 ring-[#31B5FE]/20" : ""}`}>
                                                <img src={badge.img} alt={badge.role} className="w-full h-full object-cover rounded-full" />
                                            </div>
                                        </div>
                                        {badge.labelPos === "bottom" && (
                                            <div className="relative mt-3">
                                                <div className="absolute -left-10 -top-4 w-7 h-7 z-30 drop-shadow-md">
                                                    <Image src="/Home/arrow.svg" alt="cursor" width={28} height={28} className="object-contain" />
                                                </div>
                                                <div className={`px-5 py-2 rounded-[8px] shadow-lg border-0 flex items-center justify-center transition-all duration-500 ${isActive ? "bg-linear-to-r from-[#31B5FE] to-[#AC52F2] text-white" : "bg-white text-gray-800 border-black/3"}`}>
                                                    <span className="text-[16px] font-medium tracking-tight">{badge.role}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        {/* MOBILE MICRO BADGES LAYER - TOP ROW */}
                        <div className="lg:hidden absolute top-[55px] sm:top-[60px] left-0 w-full z-20 flex justify-center pointer-events-none px-0 sm:px-4">
                            <div className="grid grid-cols-3 gap-x-[65px] sm:gap-x-[75px] w-auto max-w-full">
                                {badges.slice(0, 3).map((badge, i) => {
                                    const isActive = i === activeIndex;
                                    return (
                                        <div key={i} className={`hero-mobile-badge flex flex-col items-center relative gap-2 transition-all duration-500 ${isActive ? "scale-110 z-30" : "scale-100 z-20 opacity-80"}`}>
                                            <div className={`w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] rounded-full bg-linear-to-br from-[#31B5FE] to-[#AC52F2] p-[2px] shadow-md transition-all duration-500 ${isActive ? "ring-4 ring-[#31B5FE]/30" : ""}`}>
                                                <img src={badge.img} alt={badge.role} className="w-full h-full object-cover rounded-full border-2 border-white bg-white" />
                                            </div>
                                            <div className="relative flex justify-center w-full">
                                                <div className="absolute -left-1 sm:left-0 -top-[8px] w-[14px] h-[14px] z-30 drop-shadow-md">
                                                    <Image src="/Home/arrow.svg" alt="cursor" width={14} height={14} className="object-contain" />
                                                </div>
                                                <div className={`px-2 py-[4px] sm:py-[5px] rounded-[4px] text-[10px] sm:text-[11px] font-bold text-center whitespace-nowrap shadow-md transition-all duration-500 border ${isActive ? 'bg-linear-to-r from-[#31B5FE] to-[#AC52F2] text-white border-transparent' : 'bg-white text-gray-800 border-gray-100'}`}>
                                                    {badge.role}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* MOBILE MICRO BADGES LAYER - BOTTOM ROW */}
                        <div className="lg:hidden absolute top-[190px] sm:top-[200px] left-0 w-full z-20 flex justify-center pointer-events-none px-0 sm:px-4">
                            <div className="grid grid-cols-3 gap-x-[65px] sm:gap-x-[75px] w-auto max-w-full">
                                {badges.slice(3, 6).map((badge, loopI) => {
                                    const i = loopI + 3;
                                    const isActive = i === activeIndex;
                                    return (
                                        <div key={i} className={`hero-mobile-badge flex flex-col items-center relative gap-2 transition-all duration-500 ${isActive ? "scale-110 z-30" : "scale-100 z-20 opacity-80"}`}>
                                            <div className={`w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] rounded-full bg-linear-to-br from-[#31B5FE] to-[#AC52F2] p-[2px] shadow-md transition-all duration-500 ${isActive ? "ring-4 ring-[#31B5FE]/30" : ""}`}>
                                                <img src={badge.img} alt={badge.role} className="w-full h-full object-cover rounded-full border-2 border-white bg-white" />
                                            </div>
                                            <div className="relative flex justify-center w-full">
                                                <div className="absolute -left-1 sm:left-0 -top-[8px] w-[14px] h-[14px] z-30 drop-shadow-md">
                                                    <Image src="/Home/arrow.svg" alt="cursor" width={14} height={14} className="object-contain" />
                                                </div>
                                                <div className={`px-2 py-[4px] sm:py-[5px] rounded-[4px] text-[10px] sm:text-[11px] font-bold text-center whitespace-nowrap shadow-md transition-all duration-500 border ${isActive ? 'bg-linear-to-r from-[#31B5FE] to-[#AC52F2] text-white border-transparent' : 'bg-white text-gray-800 border-gray-100'}`}>
                                                    {badge.role}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* THREE-COLUMN GRID */}
                    <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-12 items-center justify-between mt-24 lg:mt-2 order-first lg:order-2">

                        {/* ZONE 1: Left Text */}
                        <div className="w-full lg:w-[40%] flex flex-col gap-6 pl-0 lg:pl-0">
                            <h2 className="w-[383px] max-w-full h-auto lg:w-full text-[36px] lg:text-[60px] font-semibold lg:font-bold text-black leading-[1.2] lg:leading-none tracking-[-0.04em] flex flex-col justify-start gap-1 lg:gap-0">
                                <div className="hero-headline-line mb-0 lg:mb-6">Driving Digital</div>
                                <div className="hero-headline-line mb-0 lg:mb-6">Innovation with</div>
                                <div className="hero-headline-line mb-0 lg:mb-6">Smart Technology</div>
                            </h2>
                        </div>

                        {/* ZONE 2: Robot Mascot */}
                        <div className="hidden lg:flex w-full lg:w-[25%] justify-center">
                            <div className="hero-bot relative w-full aspect-3/4 max-h-[60vh] flex flex-col items-center justify-end">
                                <Image
                                    src="/Home/Bot.png"
                                    alt="Robot"
                                    fill
                                    className="object-contain drop-shadow-[0_45px_45px_rgba(0,0,0,0.1)] z-10 animate-float"
                                    priority
                                />
                                </div>
                            </div>

                        {/* ZONE 3: Supporting Content */}
                        <div className="w-full lg:w-[35%] flex flex-col gap-3 lg:gap-10 ml-0 lg:ml-6 mt-2 lg:mt-0 pl-0 lg:pl-0">
                            <div className="space-y-4 lg:space-y-6 flex flex-col">
                                <h3 className="hero-subheading w-[320px] max-w-full h-auto lg:w-[80%] text-[17px] lg:text-[24px] font-normal lg:font-bold text-black opacity-90 leading-[1.4] lg:leading-snug pr-4 lg:pr-0">
                                    Empowering Your Vision with <br className="lg:hidden" />
                                    <span className="font-bold text-black lg:inline">Dilshaj Infotech</span>
                                </h3>
                                <ul className="space-y-4 hidden lg:block">
                                    {[
                                        { main: "High-performance digital", bold: "product development", img: "/Home/empowering/vision1.png" },
                                        { main: "Intelligent platforms &", bold: "AI-driven solutions", img: "/Home/empowering/vision2.png" },
                                        { main: "Scalable, secure, and future-", bold: "ready technology", img: "/Home/empowering/vision3.png" }
                                    ].map((item, i) => (
                                        <li key={i} className="hero-bullet flex gap-4 items-center">
                                            <div className="shrink-0 w-8 h-8 relative">
                                                <Image 
                                                    src={item.img} 
                                                    alt="vision icon" 
                                                    fill 
                                                    className="object-contain" 
                                                />
                                            </div>
                                            <span className="text-[15px] text-gray-600 leading-tight">
                                                {item.main} <span className="font-bold text-black">{item.bold}</span>
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button
                                suppressHydrationWarning
                                onClick={() => setIsGetInTouchOpen(true)}
                                className="hero-cta flex items-center group relative h-12 w-fit cursor-pointer overflow-hidden transition-all duration-700 rounded-[34px_34px_0px_34px] hover:rounded-[34px_34px_34px_0px]"
                            >
                                {/* LEFT ICON CIRCLE */}
                                <div className="absolute left-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-20 transition-all duration-700 ease-in-out group-hover:left-[calc(100%-48px)] group-hover:bg-linear-to-r group-hover:from-[#3799FA] group-hover:to-[#9961FB] group-hover:scale-105">
                                    <FaChevronRight className="w-4 h-4 text-[#3799FA] transition-all duration-700 ease-in-out group-hover:text-white" />
                                </div>
                                {/* MAIN BUTTON BODY */}
                                <div className="pl-14 pr-8 h-full flex items-center text-white font-bold text-[15px] shadow-[0_8px_18px_rgba(55,153,250,0.25)] transition-all duration-700 ease-in-out bg-linear-to-r from-[#3799FA] to-[#9961FB] group-hover:from-white group-hover:to-white group-hover:text-black group-hover:pl-6 group-hover:pr-14 rounded-[34px_34px_0px_34px] group-hover:rounded-[34px_34px_34px_0px]">
                                    Build Your Future Today
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                <GetInTouchModal
                    isOpen={isGetInTouchOpen}
                    onClose={() => setIsGetInTouchOpen(false)}
                />
            </main>
        </div>
    );
}
