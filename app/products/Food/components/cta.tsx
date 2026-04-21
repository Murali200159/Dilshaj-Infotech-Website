"use client";
import React, { useEffect, useRef } from 'react';
import { Poppins } from 'next/font/google';
import { FaChevronRight } from 'react-icons/fa6';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
});

export default function CTA() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.from(".cta-card-reveal", {
                scale: 0.95,
                y: 30,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".cta-card-reveal",
                    start: "top 95%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-full bg-white relative pb-16 md:pb-24 px-4 md:px-8 font-sans">
            <div className="max-w-[1250px] mx-auto px-4 md:px-0 -mt-10 md:-mt-16 relative z-30">
                {/* Background Box */}
                <div className="relative w-full rounded-[24px] md:rounded-[32px] overflow-hidden bg-[#120F1D] p-8 md:p-12 lg:p-14 flex flex-col md:flex-row items-center justify-between gap-10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/5 mx-auto lg:max-w-[1100px] cta-card-reveal">

                    {/* Gradient Effects */}
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <div className="absolute top-0 left-0 w-2/3 h-full bg-linear-to-r from-[#2B4BBA]/60 to-transparent"></div>
                        <div className="absolute right-0 top-0 w-1/3 h-full bg-linear-to-l from-[#0D0B14] to-transparent"></div>
                    </div>

                    {/* Content Left */}
                    <div className="relative z-10 w-full md:w-auto flex-1 overflow-visible ml-4 lg:ml-8 max-md:ml-0 max-md:flex max-md:justify-center">
                        <h2 className={`${poppins.className} text-[26px] md:text-[30px] lg:text-[36px] font-bold text-white leading-[1.2] md:whitespace-nowrap tracking-tight max-md:text-[20px] max-md:text-center max-md:leading-[1.4]`}>
                            <span className="md:hidden">
                                Build the Future of <br />
                                Food Delivery with Us for a<br />
                                Faster, Smarter Dining Experience.
                            </span>
                            <span className="hidden md:block">
                                Build the Future of Food Delivery with Us<br />
                                for a Faster, Smarter Dining Experience.
                            </span>
                        </h2>
                    </div>

                    {/* Button Right w/ full rounded look */}
                    <div className="relative z-10 w-full md:w-auto flex justify-center md:justify-end shrink-0 max-md:mr-0 mr-4 lg:mr-8">
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
            </div>
        </section>
    );
}
