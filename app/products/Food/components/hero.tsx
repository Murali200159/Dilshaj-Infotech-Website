"use client";
import React, { useEffect, useRef } from 'react';
import { Poppins } from 'next/font/google';
import { FaChevronRight } from 'react-icons/fa6';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const foodBgImg = '/products/food-images/food-bg.png';

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
            gsap.from(".hero-reveal", {
                y: 50,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                delay: 0.2
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full relative min-h-[90vh] md:min-h-screen flex items-center justify-center font-sans overflow-hidden bg-[#0A0A0A] bg-no-repeat md:bg-center bg-cover"
            style={{ backgroundImage: `url(${foodBgImg})` }}
        >
            <div className="max-w-[850px] w-full px-4 max-md:px-6 mx-auto flex flex-col max-md:items-start max-md:text-left items-center text-center justify-center relative z-10 pt-24 pb-32 hero-reveal">

                {/* Badge */}
                <div className="mb-6 rounded-full px-5 py-1.5 border border-[#3b82f6]/50 md:border-[#3b82f6]/30 flex items-center justify-center bg-[#050505]/40 backdrop-blur-sm">
                    <span className="text-[14px] md:text-[14px] font-medium bg-linear-to-r from-[#4DA5FF] to-[#9458F6] text-transparent bg-clip-text tracking-wide">
                        #upcoming
                    </span>
                </div>

                {/* Heading */}
                <h1 className={`${poppins.className} max-md:text-[38px] text-[36px] md:text-[52px] lg:text-[60px] font-bold md:font-semibold text-white leading-[1.1] md:leading-[1.15] mb-4 md:mb-6 tracking-tight`}>
                    Fresh Food. Fast Delivery. <br className="hidden md:block" />
                    <span className="bg-linear-to-r from-[#4DA5FF] to-[#9458F6] text-transparent bg-clip-text">One Tap Away.</span>
                </h1>

                {/* Subheading */}
                <p className={`${poppins.className} max-md:text-[20px] max-md:font-bold text-[16px] md:text-[20px] lg:text-[22px] font-medium text-white mb-6 md:mb-6 max-w-[650px] leading-[1.4]`}>
                    Order from your favorite restaurants and get meals delivered quickly to your doorstep.
                </p>

                {/* Description */}
                <p className="max-md:text-[15px] text-[13px] md:text-[15px] lg:text-[16px] text-[#A0A0A0] max-w-[750px] leading-normal md:leading-[1.7] mb-10 md:mb-12">
                    Our upcoming food delivery application connects customers with nearby restaurants through a seamless, fast, and reliable ordering experience. From browsing menus to real-time delivery tracking, everything is designed for convenience.
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

            {/* Fixed Side Buttons (Mobile Only) */}
            <div className="md:hidden fixed right-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-1 z-50">
                <a href="#" className="w-10 h-10 bg-[#0094F0] flex items-center justify-center text-white shadow-lg rounded-l-md">
                    <svg className="w-[18px] h-[18px]" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-[#25D366] flex items-center justify-center text-white shadow-lg rounded-l-md">
                    <svg className="w-[20px] h-[20px]" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                </a>
            </div>
        </section>
    );
}
