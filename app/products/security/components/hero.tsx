"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Hero() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.from(".hero-content-reveal", {
                x: -50,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                delay: 0.2
            });

            gsap.from(".hero-bg-reveal", {
                scale: 1.05,
                opacity: 0,
                duration: 1.5,
                ease: "power2.out"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`${poppins.className} relative w-full overflow-hidden bg-[#060d1f] mt-24 md:mt-0`}
        >
            {/*
             * ── WRAPPER ──────────────────────────────────────────────
             * All sizes: aspect-[16/7] so the phone shows horizontally
             * Desktop (lg+): cap at 460px max-height
             * ────────────────────────────────────────────────────────
             */}
            <div className="relative w-full aspect-16/7 max-h-[500px] lg:max-h-[650px]">

                {/* ── Background image ── */}
                <div className="hero-bg-reveal absolute inset-0">
                    <Image
                        src="/products-images/security-navigation.png"
                        alt="Security Hero Background"
                        fill
                        /*
                         * object-center keeps the phone perfectly centered/right
                         * on all screen sizes so it shows the full device
                         */
                        className="object-cover object-right"
                        priority
                    />
                </div>

                {/* ── Overlays ── */}
                {/* Left-to-transparent gradient so text is readable on all sizes */}
                <div className="absolute inset-0 bg-linear-to-r from-[#060d1f]/90 via-[#060d1f]/55 to-transparent" />
                {/* Bottom fade into next section */}
                <div className="absolute inset-x-0 bottom-0 h-[40px] bg-linear-to-t from-[#060d1f] to-transparent" />



                {/* ── Text Content ── */}
                <div
                    className="
                        hero-content-reveal
                        absolute inset-0 z-10 flex flex-col justify-center
                        pl-3 pr-0 pt-4 pb-4 max-w-[44%]
                        lg:pt-[clamp(32px,5vw,72px)] lg:pb-[clamp(24px,3vw,48px)]
                        lg:pl-[clamp(40px,5vw,80px)] lg:pr-0
                        lg:max-w-[clamp(280px,46%,620px)]
                    "
                >
                    {/* ── Heading ── */}
                    <h1 className="
                        font-extrabold leading-[1.15] tracking-tight
                        mb-1.5 text-[clamp(11px,2.8vw,16px)]
                        lg:w-[682px] lg:h-[120px]
                        lg:mb-[clamp(12px,1.6vw,22px)] lg:text-[clamp(26px,2.4vw,36px)]
                    ">
                        <span className="text-white">Secure Every Move. </span>
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-[#60a5fa] to-[#a855f7]">
                            Navigate with{" "}
                        </span>
                        <br className="hidden lg:block" />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-[#60a5fa] to-[#a855f7]">
                            Confidence.
                        </span>
                    </h1>

                    {/* ── Description ── */}
                    <p className="
                        text-white/75 leading-[1.6] font-normal
                        mb-2 text-[clamp(7px,1.5vw,10px)] max-w-[clamp(120px,36vw,300px)]
                        lg:mb-[clamp(16px,2.2vw,32px)] lg:text-[clamp(14px,1.2vw,18px)] lg:max-w-[clamp(220px,38vw,500px)]
                    ">
                        Dilshaj Infotech is developing a powerful security-focused
                        navigation solution that combines GPS tracking, emergency
                        alerts, and live monitoring for safer journeys.
                    </p>

                    {/* ── CTA Button ── */}
                    <button
                        suppressHydrationWarning
                        className="flex items-center group relative h-12 w-fit cursor-pointer overflow-hidden transition-all duration-700 rounded-[34px_34px_0px_34px] hover:rounded-[34px_34px_34px_0px] mt-4"
                    >
                        <div className="absolute left-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-20 transition-all duration-700 ease-in-out group-hover:left-[calc(100%-48px)] group-hover:bg-linear-to-r group-hover:from-[#3799FA] group-hover:to-[#9961FB] group-hover:scale-105">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3799FA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-0.5 transition-all duration-700 ease-in-out group-hover:text-white"><polyline points="9 18 15 12 9 6" /></svg>
                        </div>
                        <div className="pl-14 pr-8 h-full flex items-center text-white font-bold text-[15px] shadow-[0_8px_18px_rgba(55,153,250,0.25)] transition-all duration-700 ease-in-out bg-linear-to-r from-[#3799FA] to-[#9961FB] group-hover:from-white group-hover:to-white group-hover:text-black group-hover:pl-6 group-hover:pr-14 rounded-[34px_34px_0px_34px] group-hover:rounded-[34px_34px_34px_0px]">
                            Coming Soon
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
}
