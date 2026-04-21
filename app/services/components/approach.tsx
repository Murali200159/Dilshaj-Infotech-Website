"use client";
import React, { useEffect, useRef } from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

const steps = [
    {
        title: "Deep Analysis",
        watermark: "Discover",
        icon: "/services/approach/icon1.png",
        isTop: false,
    },
    {
        title: "Smart Roadmap",
        watermark: "Strategy",
        icon: "/services/approach/icon2.png",
        isTop: true,
    },
    {
        title: "Visual Experience",
        watermark: "Design",
        icon: "/services/approach/icon3.png",
        isTop: false,
    },
    {
        title: "Product Development",
        watermark: "Development",
        icon: "/services/approach/icon4.png",
        isTop: true,
    },
    {
        title: "Precision Testing",
        watermark: "Testing",
        icon: "/services/approach/icon5.png",
        isTop: false,
    }
];

export default function Approach() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Header pop animation
            gsap.from(".gsap-approach-header", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });

            // Process button swoop in
            gsap.from(".gsap-process-btn", {
                x: -50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                }
            });

            // Timeline SVG graphic fade in
            gsap.from(".gsap-timeline-svg", {
                opacity: 0,
                duration: 1.5,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: ".gsap-timeline-container",
                    start: "top 75%",
                }
            });

            // Desktop nodes bouncing pop stagger
            gsap.from(".gsap-desktop-node", {
                scale: 0,
                opacity: 0,
                duration: 0.7,
                stagger: 0.15,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: ".gsap-timeline-container",
                    start: "top 70%",
                }
            });

            // Stunning Mobile nodes individual scroll animations
            gsap.utils.toArray(".gsap-mobile-node").forEach((node: any, i) => {
                gsap.from(node, {
                    x: i % 2 === 0 ? -50 : 50, // Alternate sliding in from left and right
                    y: 40,
                    scale: 0.9,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: node,
                        start: "top 85%", // Triggers precisely when each individual node enters the screen
                    }
                });
            });

            // Sequential Glow Loop
            const glowTl = gsap.timeline({ repeat: -1 });
            const desktopNodes = gsap.utils.toArray(".gsap-desktop-node");
            const mobileNodes = gsap.utils.toArray(".gsap-mobile-node");

            // Desktop Loop
            desktopNodes.forEach((node: any) => {
                const circle = node.querySelector(".node-circle");
                const watermark = node.querySelector(".node-watermark");
                const title = node.querySelector(".node-title");

                glowTl.to(circle, {
                    boxShadow: "0 0 30px rgba(22,120,242,0.8)",
                    scale: 1.15,
                    duration: 0.6,
                    ease: "power2.inOut"
                })
                    .to(watermark, { color: "rgba(255,255,255,0.4)", duration: 0.6, ease: "power2.inOut" }, "<")
                    .to(title, { color: "#1678f2", duration: 0.6, ease: "power2.inOut" }, "<")
                    .to([circle, watermark, title], {
                        clearProps: "all",
                        duration: 0.6,
                        ease: "power2.inOut",
                        delay: 0.2
                    });
            });

            // Mobile Loop (separate timeline part to ensure cross-device consistency)
            mobileNodes.forEach((node: any) => {
                const circle = node.querySelector(".node-circle");
                const watermark = node.querySelector(".node-watermark");
                const title = node.querySelector(".node-title");

                glowTl.to(circle, {
                    boxShadow: "0 0 30px rgba(22,120,242,0.8)",
                    scale: 1.1,
                    duration: 0.6,
                    ease: "power2.inOut"
                }, ">-0.4") // Slight overlap for mobile feel
                    .to(watermark, { color: "rgba(255,255,255,0.4)", duration: 0.6, ease: "power2.inOut" }, "<")
                    .to(title, { color: "#1678f2", duration: 0.6, ease: "power2.inOut" }, "<")
                    .to([circle, watermark, title], {
                        clearProps: "all",
                        duration: 0.6,
                        ease: "power2.inOut",
                        delay: 0.1
                    });
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`${poppins.className} w-full bg-[#0a0a0a] relative overflow-hidden pt-28 pb-32`}
        >
            {/* Desktop Background Image - hidden on mobile so it remains pure dark like Image 1 */}
            <div className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none z-0" style={{ backgroundImage: 'url("/services/approachbg.png")' }}></div>
            {/* ── "Process" absolute ribbon attached to exact screen left edge ─── */}
            <div
                className="gsap-process-btn absolute left-0 top-8 md:top-12 flex items-center gap-2 pl-4 pr-10 md:pr-14 py-2.5 md:py-3 shadow-[0_4px_15px_rgba(30,95,153,0.4)] z-30"
                style={{
                    background: 'linear-gradient(to right, #029EFA, #0E4E8B)',
                    clipPath: 'polygon(0% 0%, 100% 0%, 88% 50%, 100% 100%, 0% 100%)'
                }}
            >
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white -ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </div>
                <span className="text-[18px] md:text-[22px] font-bold tracking-wider pr-4">Process</span>
            </div>

            {/* 3D Grid Image saved by User (square.png) mapped directly into the bottom exactly like Image 3 */}
            <div className="hidden md:block absolute bottom-0 left-0 w-full h-[60%] pointer-events-none z-0 overflow-hidden select-none">
                <img
                    src="/services/square.png"
                    alt="perspective grid"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full min-w-[1400px] h-full object-cover object-bottom opacity-100"
                    style={{
                        maskImage: "linear-gradient(to top, rgba(0,0,0,1) 5%, rgba(0,0,0,0) 80%)",
                        WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1) 5%, rgba(0,0,0,0) 80%)"
                    }}
                />
            </div>

            <div className="w-full px-[5%] xl:px-[8%] mx-auto relative z-10">
                {/* ── HEADER ────────────────────────────────────────────────── */}
                <div className="text-center mb-24 relative z-20 mt-4 md:mt-0">
                    <h2 className="gsap-approach-header text-white text-3xl md:text-[45px] font-semibold mb-6 tracking-wide">
                        Approach We Follow
                    </h2>
                    <p className="gsap-approach-header text-white/80 text-[16px] md:text-[18px] max-w-3xl mx-auto font-light leading-relaxed px-4">
                        From concept to launch, our streamlined process ensures efficiency, quality, and measurable impact at every stage.
                    </p>
                </div>

                {/* ── TIMELINE GRAPHIC (DESKTOP) Image 2 ──────────────────────── */}
                <div className="gsap-timeline-container relative w-full max-w-[1500px] px-2 md:px-8 mx-auto h-[400px] hidden md:block">
                    {/* SVG Wavy Dashed Line precisely connecting nodes directly through their centers */}
                    <svg viewBox="0 0 1000 400" className="gsap-timeline-svg absolute inset-x-0 w-full h-[400px] pointer-events-none overflow-visible" preserveAspectRatio="none">
                        <path
                            d="M 60 280 C 148 280, 192 120, 280 120 S 412 280, 500 280 S 632 120, 720 120 S 852 280, 940 280 Q 970 280, 985 240"
                            fill="none"
                            stroke="rgba(255,255,255,0.25)"
                            strokeWidth="2"
                            strokeDasharray="8 6"
                        />
                        {/* Blue directional arrows aligned seamlessly flush to exact curve math tangent, updated to larger dart shapes matching Image 2 */}
                        <polygon points="178,200 160,192 164,200 160,208" fill="#1678f2" transform="rotate(-35 170 200)" />
                        <polygon points="398,200 380,192 384,200 380,208" fill="#1678f2" transform="rotate(35 390 200)" />
                        <polygon points="618,200 600,192 604,200 600,208" fill="#1678f2" transform="rotate(-35 610 200)" />
                        <polygon points="838,200 820,192 824,200 820,208" fill="#1678f2" transform="rotate(35 830 200)" />

                        {/* Final green finishing dot exactly matching Image 2 at the tail */}
                        <circle cx="985" cy="240" r="5" fill="#10b981" />
                    </svg>

                    {/* Nodes positioned via absolute percentages mapped flawlessly to SVG path points universally wide left-to-right */}
                    <div className="absolute inset-0 w-full h-full">
                        {[
                            { ...steps[0], left: '6%', top: '280px' },
                            { ...steps[1], left: '28%', top: '120px' },
                            { ...steps[2], left: '50%', top: '280px' },
                            { ...steps[3], left: '72%', top: '120px' },
                            { ...steps[4], left: '94%', top: '280px' }
                        ].map((step, idx) => (
                            <div
                                key={idx}
                                className="gsap-desktop-node absolute z-20"
                                style={{
                                    left: step.left,
                                    top: step.top,
                                }}
                            >
                                {/* Circle Icon Centered Dead-on the absolute CSS coordinates on the line! */}
                                <div className="node-circle absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px] rounded-full bg-[#1678f2] flex items-center justify-center shadow-[0_0_20px_rgba(22,120,242,0.4)] pointer-events-auto hover:scale-110 transition-transform duration-300 cursor-pointer">
                                    <Image src={step.icon} alt={step.title} width={26} height={26} className="object-contain brightness-0 invert" />
                                </div>

                                {/* Text Block: Vertically stacked properly ABOVE every single circle like Image 2 strictly */}
                                <div className="absolute left-1/2 -translate-x-1/2 bottom-[55px] w-[300px] pointer-events-none flex flex-col items-center justify-end">
                                    <h3 className="node-title text-white text-[16px] xl:text-[18px] font-bold tracking-wide relative z-10 w-full text-center transition-colors duration-300">
                                        {step.title}
                                    </h3>
                                    {/* Large dark watermark directly below title precisely styled as requested */}
                                    <h4 className="node-watermark text-[32px] xl:text-[42px] font-bold text-[#333333] uppercase tracking-wide leading-none select-none z-0 mt-[-2px] transition-colors duration-300">
                                        {step.watermark}
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Flow Layout (Image 3) - Stacked with no connecting line */}
                <div className="gsap-mobile-container md:hidden flex flex-col gap-10 items-center relative py-4 mt-8">
                    {steps.map((step, idx) => (
                        <div key={idx} className="gsap-mobile-node flex flex-col items-center relative z-10 w-full px-6">
                            <div className="node-circle w-[56px] h-[56px] rounded-full bg-[#1678f2] flex items-center justify-center shadow-[0_0_24px_rgba(22,120,242,0.5)] mb-3 shrink-0 z-20 transition-all duration-300">
                                <Image src={step.icon} alt={step.title} width={28} height={28} className="object-contain brightness-0 invert" />
                            </div>

                            <div className="flex flex-col justify-center items-center w-full">
                                <h3 className="node-title text-white text-[18px] sm:text-[20px] font-bold tracking-wide relative z-10 text-center transition-colors duration-300">
                                    {step.title}
                                </h3>
                                {/* Mobile Dark Watermark firmly stacked beneath the title in explicit gray */}
                                <h4 className="node-watermark text-[32px] sm:text-[42px] font-black text-[#333333] uppercase tracking-wide leading-none select-none z-0 mt-[-2px] transition-colors duration-300">
                                . {step.watermark}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
