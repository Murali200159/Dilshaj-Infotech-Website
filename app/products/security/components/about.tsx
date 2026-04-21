"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

export default function About() {
    return (
        <section className={`${poppins.className} relative w-full bg-white overflow-hidden`}>

            {/* About Ribbon */}
            <div className="absolute left-0 top-[30px] lg:top-[40px] z-20">
                <div
                    className="relative flex items-center gap-2 pl-4 pr-10 py-2.5 w-fit"
                    style={{
                        background: 'linear-gradient(to right, #029EFA, #0E4E8B)',
                        clipPath: 'polygon(0% 0%, 100% 0%, 88% 50%, 100% 100%, 0% 100%)'
                    }}
                >
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white -ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                    </div>
                    <span className="text-white font-bold text-[18px] tracking-wider pr-4">About</span>
                </div>
            </div>

            <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-14 pt-[80px] lg:pt-[100px] pb-[60px] lg:pb-[90px]">

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-x-12 xl:gap-x-16 gap-y-10 lg:gap-y-0 items-center">

                    {/* Left — Text */}
                    <div className="flex flex-col order-2 lg:order-1">

                        <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] font-extrabold text-[#111827] leading-tight mb-2 tracking-tight">
                            Security &amp; Navigation App
                        </h2>

                        <p className="text-[16px] sm:text-[18px] font-bold text-[#111827] mb-5 leading-[1.4]">
                            "Smart Security &amp; Navigation Assistant"
                        </p>

                        <p className="text-[#374151] text-[14px] sm:text-[15px] leading-[1.75] mb-4 max-w-[500px] indent-4">
                            The Security &amp; Navigation App is an upcoming intelligent mobility solution designed to enhance personal safety and real-time navigation. With integrated GPS tracking, emergency assistance features, and secure route monitoring, the app ensures users stay connected and protected at all times.
                        </p>

                        <p className="text-[#374151] text-[14px] sm:text-[15px] leading-[1.75] mb-8 max-w-[500px] indent-4">
                            Built using modern technologies and real-time data processing, the platform delivers accurate directions, instant alerts, and seamless communication during travel.
                        </p>

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

                    {/* Right — Image */}
                    <div className="relative w-full order-1 lg:order-2">
                        <div className="relative w-full aspect-[1.25] sm:aspect-[1.35] lg:aspect-[1.3] rounded-[20px] overflow-hidden shadow-[0_10px_36px_rgba(0,0,0,0.13)]">
                            <Image
                                src="/products/security/about.png"
                                alt="Security & Navigation App"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
