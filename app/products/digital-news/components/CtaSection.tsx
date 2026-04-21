"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CtaSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.from(".cta-container", {
                scale: 0.95,
                y: 30,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".cta-container",
                    start: "top 90%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-full bg-white pb-16 md:pb-24 px-6 md:px-12 xl:px-24">
            <div
                className="max-w-[1240px] mx-auto rounded-[24px] md:rounded-[32px] overflow-hidden px-8 py-12 md:px-16 md:py-20 flex flex-col lg:flex-row items-center justify-between text-center lg:text-left gap-8 md:gap-12 lg:gap-0 cta-container"
                style={{
                    // Creates the deep blue to black gradient backdrop similar to the image
                    background: "linear-gradient(90deg, #3A5DF2 0%, #17113A 60%, #120C21 100%)",
                    willChange: "transform, opacity"
                }}
            >
                {/* Text Side */}
                <div className="w-full lg:w-2/3">
                    <h2
                        className="text-white font-semibold"
                        style={{
                            fontSize: "clamp(26px, 4vw, 42px)",
                            lineHeight: "130%",
                        }}
                    >
                        Build the Future of<br className="hidden md:block" /> Journalism with Us for a<br className="hidden md:block" /> Better News Experience.
                    </h2>
                </div>

                {/* Button Side */}
                <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
                    <button
                        suppressHydrationWarning
                        className="flex items-center group relative h-12 w-fit cursor-pointer overflow-hidden transition-all duration-700 rounded-[34px_34px_0px_34px] hover:rounded-[34px_34px_34px_0px]"
                    >
                        <div className="absolute left-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-20 transition-all duration-700 ease-in-out group-hover:left-[calc(100%-48px)] group-hover:bg-linear-to-r group-hover:from-[#3799FA] group-hover:to-[#9961FB] group-hover:scale-105">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3799FA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-0.5 transition-all duration-700 ease-in-out group-hover:text-white"><polyline points="9 18 15 12 9 6" /></svg>
                        </div>
                        <div className="pl-14 pr-8 h-full flex items-center text-white font-bold text-[15px] shadow-[0_8px_18px_rgba(55,153,250,0.25)] transition-all duration-700 ease-in-out bg-linear-to-r from-[#3799FA] to-[#9961FB] group-hover:from-white group-hover:to-white group-hover:text-black group-hover:pl-6 group-hover:pr-14 rounded-[34px_34px_0px_34px] group-hover:rounded-[34px_34px_34px_0px]">
                            Get Updates
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
}
