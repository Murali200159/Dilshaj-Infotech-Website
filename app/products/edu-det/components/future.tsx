"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronRight, GraduationCap, Briefcase, Bot, Users, Rocket } from "lucide-react";
import { Poppins } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export default function Future() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.from(".future-img-block", {
                x: -50,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".future-img-block",
                    start: "top 85%",
                }
            });

            gsap.from(".future-text-content", {
                y: 40,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".future-text-content",
                    start: "top 90%",
                }
            });

            gsap.from(".future-list-item", {
                x: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".future-list-item",
                    start: "top 95%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const points = [
        "Personalized AI-driven learning paths",
        "Verified career & earning opportunities",
        "Resume, mock interview & grammar assistant",
        "Posts, networking & professional connections",
    ];

    return (
        <section ref={sectionRef} className={`${poppins.className} future-clip w-full relative text-white overflow-hidden bg-no-repeat`}
            style={{
                marginTop: "-80px",
                paddingTop: "200px",
                paddingBottom: "180px",
                backgroundImage: "url('/products/edu-det/futurebg.png')",
                backgroundSize: "cover",
                backgroundPosition: "bottom center"
            }}>

            <style>{`
                .future-clip {
                    clip-path: polygon(0 15px, 53% 25px, 55% 0, 100% 0, 100% 100%, 0 100%);
                }
                @media (min-width: 1024px) {
                    .future-clip {
                        clip-path: polygon(0 4%, 53% 6%, 55% 0, 100% 0, 100% 100%, 0 100%);
                    }
                }
            `}</style>            <div className="max-w-[1300px] w-full mx-auto flex flex-col-reverse lg:flex-row items-center justify-between z-10 relative px-5 lg:px-6">

                {/* Left Side: Tilted Tablet Image */}
                <div className="w-full max-w-[450px] mx-auto lg:w-[1303px] lg:max-w-[55%] relative shrink-0 scale-[1.15] lg:scale-[1.10] origin-center lg:translate-x-12 mt-12 md:mt-16 lg:mt-0 translate-y-6 lg:translate-y-[60px] aspect-[1.18] future-img-block">
                    <Image
                        src="/products/edu-det/futuremobile.png"
                        alt="EduProva Future AI Platform"
                        fill
                        className="object-contain drop-shadow-2xl"
                        priority
                    />
                </div>

                {/* Right Side: Text & Features */}
                <div className="max-w-full lg:max-w-[650px] w-full shrink-0 ml-0 lg:ml-20 mt-0 lg:mt-0 z-20 future-text-content">
                    <h2 className="text-[32px] sm:text-[36px] md:text-[52px] lg:text-[56px] leading-[1.15] font-normal mb-5 lg:mb-8 tracking-wide text-white uppercase text-left lg:text-left drop-shadow-md lg:drop-shadow-none">
                        GENERATE YOUR <br className="hidden md:block" />
                        FUTURE WITH AI
                    </h2>

                    <p className="text-[#a0a0a0] text-[14.5px] lg:text-[15.5px] leading-[1.7] lg:leading-[1.8] mb-8 lg:mb-12 w-full lg:w-[90%] text-left lg:text-left px-0 pr-4 lg:pr-0">
                        EduProva combines AI-powered learning, career tools,
                        networking, freelancing, and startup collaboration — all in
                        one intelligent platform.
                    </p>

                    <div className="flex flex-row items-center justify-start lg:justify-between mb-10 lg:mb-16 w-full lg:w-[90%] gap-4 lg:gap-0 px-0">
                        <button
                            suppressHydrationWarning
                            className="flex items-center group relative h-12 w-fit cursor-pointer overflow-hidden transition-all duration-700 rounded-[34px_34px_0px_34px] hover:rounded-[34px_34px_34px_0px]"
                        >
                            <div className="absolute left-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-20 transition-all duration-700 ease-in-out group-hover:left-[calc(100%-48px)] group-hover:bg-linear-to-r group-hover:from-[#3799FA] group-hover:to-[#9961FB] group-hover:scale-105">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3799FA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-0.5 transition-all duration-700 ease-in-out group-hover:text-white"><polyline points="9 18 15 12 9 6" /></svg>
                            </div>
                            <div className="pl-14 pr-8 h-full flex items-center text-white font-bold text-[15px] shadow-[0_8px_18px_rgba(55,153,250,0.25)] transition-all duration-700 ease-in-out bg-linear-to-r from-[#3799FA] to-[#9961FB] group-hover:from-white group-hover:to-white group-hover:text-black group-hover:pl-6 group-hover:pr-14 rounded-[34px_34px_0px_34px] group-hover:rounded-[34px_34px_34px_0px]">
                                Get Started
                            </div>
                        </button>

                        {/* 5 Cyan circular icons block overlapping */}
                        <div className="flex -space-x-2 lg:-space-x-3 ml-2 lg:mr-4">
                            <div className="w-[38px] lg:w-[44px] h-[38px] lg:h-[44px] rounded-full bg-[#0ea5e9] border-[3px] border-[#0a0a0a] flex items-center justify-center shadow-lg hover:z-10 z-5 transition-transform hover:scale-110 relative"><GraduationCap size={16} className="lg:w-[18px] lg:h-[18px]" color="white" /></div>
                            <div className="w-[38px] lg:w-[44px] h-[38px] lg:h-[44px] rounded-full bg-[#0ea5e9] border-[3px] border-[#0a0a0a] flex items-center justify-center shadow-lg hover:z-10 z-4 transition-transform hover:scale-110 relative"><Briefcase size={16} className="lg:w-[18px] lg:h-[18px]" color="white" /></div>
                            <div className="w-[38px] lg:w-[44px] h-[38px] lg:h-[44px] rounded-full bg-[#0ea5e9] border-[3px] border-[#0a0a0a] flex items-center justify-center shadow-lg hover:z-10 z-3 transition-transform hover:scale-110 relative"><Bot size={16} className="lg:w-[18px] lg:h-[18px]" color="white" /></div>
                            <div className="w-[38px] lg:w-[44px] h-[38px] lg:h-[44px] rounded-full bg-[#0ea5e9] border-[3px] border-[#0a0a0a] flex items-center justify-center shadow-lg hover:z-10 z-2 transition-transform hover:scale-110 relative"><Users size={16} className="lg:w-[18px] lg:h-[18px]" color="white" /></div>
                            <div className="w-[38px] lg:w-[44px] h-[38px] lg:h-[44px] rounded-full bg-[#0ea5e9] border-[3px] border-[#0a0a0a] flex items-center justify-center shadow-lg hover:z-10 z-1 transition-transform hover:scale-110 relative"><Rocket size={16} className="lg:w-[18px] lg:h-[18px]" color="white" /></div>
                        </div>
                    </div>

                    {/* List items with connected line */}
                    <div className="relative border-l-[1.5px] border-indigo-900/40 pl-6 lg:pl-10 ml-4 lg:ml-[160px] space-y-[26px] lg:space-y-[32px] mt-8 lg:mt-0">
                        {points.map((pt, i) => (
                            <div key={i} className="relative flex items-center min-h-[26px] future-list-item">
                                {/* Outer purple/blue ring, inner cyan dot */}
                                <div className="absolute -left-[36.5px] lg:-left-[51.5px] top-[2px] lg:top-0 w-[22px] h-[22px] rounded-full border-2 border-[#6366f1] bg-[#050505] flex items-center justify-center shadow-[0_0_12px_rgba(99,102,241,0.5)] z-10 transition-transform duration-300 hover:scale-110">
                                    <div className="w-[8px] h-[8px] rounded-full bg-[#0ea5e9] shadow-[0_0_6px_rgba(14,165,233,0.8)]" />
                                </div>
                                <span className="text-[#e2e8f0] text-[14px] lg:text-[15.5px] font-light leading-snug tracking-wide pt-[2px]">{pt}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
