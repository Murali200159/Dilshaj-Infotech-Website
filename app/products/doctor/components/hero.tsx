"use client";
import React, { useEffect, useRef } from 'react';
import { Poppins } from 'next/font/google';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import dcbg from '../images/dcbg.png';
import doctorimg from '../images/doctorimg.png';

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
});

export default function Hero() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.from(".hero-text-content", {
                x: -50,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                delay: 0.2
            });

            gsap.from(".hero-image-reveal", {
                scale: 0.95,
                opacity: 0,
                duration: 1.5,
                ease: "power2.out",
                delay: 0.4
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full min-h-screen flex items-center bg-[#07131C] overflow-hidden font-sans pt-20 pb-16">
            {/* Background Image */}
            <div
                className="absolute top-0 left-0 w-full h-[90%] z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${dcbg.src})` }}
            ></div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-[1300px] mx-auto px-4 md:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between -mt-10 lg:-mt-24">

                {/* Left Side: Text Content */}
                <div className="w-full lg:w-1/2 flex flex-col items-start mt-8 lg:mt-0 z-20 hero-text-content">

                    {/* #upcoming pill */}
                    <div className="inline-block max-md:p-[1.5px] max-md:bg-linear-to-r max-md:from-[#00B4FF] max-md:to-[#A26DFF] rounded-full mb-6">
                        <div className="px-4 py-1.5 rounded-full md:border md:border-purple-500/30 max-md:bg-[#07131C] md:bg-purple-500/10 backdrop-blur-sm w-full h-full flex items-center justify-center">
                            <span className="max-md:text-transparent max-md:bg-clip-text max-md:bg-linear-to-r max-md:from-[#00B4FF] max-md:to-[#A26DFF] text-[#3A8EFE] text-sm md:text-[15px] font-medium tracking-wide">
                                #upcoming
                            </span>
                        </div>
                    </div>

                    {/* Main Heading */}
                    <h1 className={`${poppins.className} max-md:text-[28px] text-[36px] md:text-[46px] lg:text-[54px] font-bold text-white leading-[1.1] mb-6`}>
                        <span className="max-md:whitespace-nowrap">Doctor Consultation.</span><br />
                        {/* Mobile view gradient text */}
                        <span className="md:hidden max-md:whitespace-nowrap text-transparent bg-clip-text bg-linear-to-r from-[#00B4FF] to-[#A26DFF]">Just One Click Away.</span>
                        {/* Desktop view normal text */}
                        <span className="hidden md:inline"><span className="text-[#459CFF]">Just One Click</span> Away.</span>
                    </h1>

                    {/* Subheading */}
                    <h3 className={`${poppins.className} text-[18px] md:text-[20px] font-semibold text-white mb-4 leading-[1.4] max-w-[500px]`}>
                        Instant access to certified medical professionals anytime, anywhere.
                    </h3>

                    {/* Description */}
                    <p className="text-[#A0AABF] text-[15px] md:text-[16px] leading-[1.6] mb-10 max-w-[520px]">
                        Doctor-on-One-Click is an upcoming digital healthcare platform designed to simplify medical consultations through secure video calls, easy appointment booking, and fast prescription access — all from the comfort of your home.
                    </p>

                    {/* Button */}
                    <button
                        suppressHydrationWarning
                        className="flex items-center group relative h-12 w-fit cursor-pointer overflow-hidden transition-all duration-700 rounded-[34px_34px_0px_34px] hover:rounded-[34px_34px_34px_0px]"
                    >
                        <div className="absolute left-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-20 transition-all duration-700 ease-in-out group-hover:left-[calc(100%-48px)] group-hover:bg-linear-to-r group-hover:from-[#3799FA] group-hover:to-[#9961FB] group-hover:scale-105">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3799FA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-0.5 transition-all duration-700 ease-in-out group-hover:text-white"><polyline points="9 18 15 12 9 6" /></svg>
                        </div>
                        <div className="pl-14 pr-8 h-full flex items-center text-white font-bold text-[15px] shadow-[0_8px_18px_rgba(55,153,250,0.25)] transition-all duration-700 ease-in-out bg-linear-to-r from-[#3799FA] to-[#9961FB] group-hover:from-white group-hover:to-white group-hover:text-black group-hover:pl-6 group-hover:pr-14 rounded-[34px_34px_0px_34px] group-hover:rounded-[34px_34px_34px_0px]">
                            Notify Me at Launch
                        </div>
                    </button>
                </div>

                {/* Right Side: Image */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end max-md:-mt-20 md:mt-12 lg:mt-0 relative z-10 pointer-events-none hero-image-reveal">
                    <div className="relative w-full max-w-[500px] lg:max-w-[650px] aspect-4/5 lg:aspect-auto lg:h-[700px]">
                        <img
                            src={doctorimg.src}
                            alt="Doctors holding smartphone"
                            className="w-full h-full object-contain object-bottom"
                        />
                    </div>
                </div>

            </div>

            {/* Fixed Side Buttons */}
            <div className="fixed right-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 z-50">
                <a href="#" className="max-md:w-8 max-md:h-8 w-12 h-12 bg-[#0094F0] flex items-center justify-center text-white hover:bg-blue-600 transition-colors shadow-lg rounded-l-md">
                    <svg className="max-md:w-[14px] max-md:h-[14px]" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                </a>
                <a href="#" className="max-md:w-8 max-md:h-8 w-12 h-12 bg-[#25D366] flex items-center justify-center text-white hover:bg-green-600 transition-colors shadow-lg rounded-l-md">
                    <svg className="max-md:w-[16px] max-md:h-[16px]" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                </a>
            </div>
        </section>
    );
}
