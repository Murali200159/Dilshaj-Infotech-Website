"use client";
import React, { useEffect, useRef } from 'react';
import { Poppins } from 'next/font/google';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const poppins = Poppins({
    weight: ['400', '500', '600', '700', '800'],
    subsets: ['latin'],
    display: 'swap',
});

export default function About() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.from(".about-image-reveal", {
                x: -50,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".about-image-reveal",
                    start: "top 85%",
                }
            });

            gsap.from(".about-content-reveal", {
                x: 50,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".about-content-reveal",
                    start: "top 85%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-full bg-white relative font-sans overflow-hidden pt-16 md:pt-24 pb-16 md:pb-24">

            {/* Top Ribbon - About */}
            <div
                className="absolute left-0 top-6 md:top-12 z-10 w-[115px] md:w-[190px]"
                style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))' }}
            >
                <div
                    className="w-full text-white py-2 md:py-4 pl-3 md:pl-10 pr-6 md:pr-14 text-[13px] md:text-[22px] font-bold flex items-center gap-1 md:gap-2 [clip-path:polygon(0_0,100%_0,calc(100%-12px)_50%,100%_100%,0_100%)] md:[clip-path:polygon(0_0,100%_0,calc(100%-24px)_50%,100%_100%,0_100%)]"
                    style={{
                        background: 'linear-gradient(to right, #00A3FF, #005A99)'
                    }}
                >
                    <img src="/Home/arrow.png" alt="arrow" className="w-[12px] md:w-[22px] h-auto object-contain mr-1 md:mr-2" />
                    <span className="mb-[-2px]">About</span>
                </div>
            </div>

            <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 mt-8 md:mt-0 flex flex-col items-center">

                <div className="flex flex-col md:flex-row items-center w-full gap-12 lg:gap-20">

                    {/* Left Column (Image) */}
                    <div className="w-full md:w-1/2 flex justify-center max-md:-mt-4 md:mt-0 relative z-10 about-image-reveal">
                        <div className="relative w-full aspect-16/11 rounded-tr-[40px] md:rounded-tr-[60px] overflow-hidden shadow-none bg-[#f1f1f1]">
                            <img
                                src="/products/bike-rider-images/bike-rider-images/bikecar.png"
                                alt="Bike and Car App"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.currentTarget.src = "https://placehold.co/800x550/e0e0e0/333333?text=Add+bikecar.png+here"
                                }}
                            />
                        </div>
                    </div>

                    {/* Right Column (Content) */}
                    <div className="w-full md:w-1/2 flex flex-col max-md:pt-0 max-md:-mt-8 md:pt-4 about-content-reveal">
                        <h2 className={`${poppins.className} max-md:text-center max-md:whitespace-nowrap text-[22px] sm:text-[24px] md:text-[38px] lg:text-[42px] font-bold text-[#1A1A1A] mb-4 md:mb-6 leading-tight`}>
                            Bike & Car Rider App
                        </h2>

                        <p className="text-[#3A3A3A] text-[15px] md:text-[16px] lg:text-[17px] leading-[1.8] mb-12 w-full lg:w-[95%] font-medium">
                            The Bike & Car Rider App is an upcoming mobility platform that enables users to book bike rides and car rides instantly through a secure and intuitive interface. Built with advanced technology and real-time tracking, the app ensures quick pickups, transparent pricing, and safe journeys.
                        </p>

                        {/* Stats Row */}
                        <div className="flex items-center gap-12 md:gap-20 mb-12">
                            <div className="flex flex-col">
                                <span className={`${poppins.className} text-[32px] md:text-[56px] font-bold text-[#111111] leading-none mb-3`}>
                                    50%
                                </span>
                                <span className="text-[#333] max-md:whitespace-nowrap max-md:text-[11px] text-[15px] md:text-[16px] font-medium">
                                    Faster Ride Matching
                                </span>
                            </div>

                            <div className="flex flex-col">
                                <span className={`${poppins.className} text-[32px] md:text-[56px] font-bold text-[#111111] leading-none mb-3`}>
                                    GPS
                                </span>
                                <span className="text-[#333] max-md:whitespace-nowrap max-md:text-[11px] text-[15px] md:text-[16px] font-medium">
                                    Real-Time GPS Tracking
                                </span>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="mt-8 flex justify-center md:justify-start w-full">
                            <button
                                suppressHydrationWarning
                                className="flex items-center group relative h-12 w-fit cursor-pointer overflow-hidden transition-all duration-700 rounded-[34px_34px_0px_34px] hover:rounded-[34px_34px_34px_0px]"
                            >
                                <div className="absolute left-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-20 transition-all duration-700 ease-in-out group-hover:left-[calc(100%-48px)] group-hover:bg-linear-to-r group-hover:from-[#3799FA] group-hover:to-[#9961FB] group-hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3799FA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-0.5 transition-all duration-700 ease-in-out group-hover:text-white"><polyline points="9 18 15 12 9 6" /></svg>
                                </div>
                                <div className="pl-14 pr-8 h-full flex items-center text-white font-bold text-[15px] shadow-[0_8px_18px_rgba(55,153,250,0.25)] transition-all duration-700 ease-in-out bg-linear-to-r from-[#3799FA] to-[#9961FB] group-hover:from-white group-hover:to-white group-hover:text-black group-hover:pl-6 group-hover:pr-14 rounded-[34px_34px_0px_34px] group-hover:rounded-[34px_34px_34px_0px]">
                                    Get Early Access
                                </div>
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            {/* Bottom Ribbon - Key Features */}
            <div
                className="absolute left-0 bottom-2 md:bottom-4 z-10 w-[160px] md:w-[260px]"
                style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))' }}
            >
                <div
                    className="w-full text-white py-2 md:py-4 pl-3 md:pl-10 pr-6 md:pr-14 text-[13px] md:text-[22px] font-bold flex items-center gap-1 md:gap-2 [clip-path:polygon(0_0,100%_0,calc(100%-12px)_50%,100%_100%,0_100%)] md:[clip-path:polygon(0_0,100%_0,calc(100%-24px)_50%,100%_100%,0_100%)]"
                    style={{
                        background: 'linear-gradient(to right, #00A3FF, #005A99)'
                    }}
                >
                    <img src="/Home/arrow.png" alt="arrow" className="w-[12px] md:w-[22px] h-auto object-contain mr-1 md:mr-2" />
                    <span className="mb-[-2px] whitespace-nowrap">Key Features</span>
                </div>
            </div>

        </section>
    );
}
