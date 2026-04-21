"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const poppins = Poppins({
    weight: ['400', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
});

export default function Hero() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.from(".hero-content", {
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
            className="relative w-full min-h-[720px] md:min-h-screen py-20 flex items-center bg-[#06102B] overflow-hidden font-sans"
        >
            {/* Background Image using Next.js Image for perfect fit and performance */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/products/bike-rider-images/bike-rider-images/herobbg.png"
                    alt="Bike Rider Background"
                    fill
                    className="object-cover object-center md:object-center"
                    priority
                />
            </div>

            {/* Subtle overlay focused on the left to ensure text readability but keep the bikes and cars clear */}
            <div className="absolute inset-0 bg-linear-to-r from-[#06102B]/95 via-[#06102B]/40 to-transparent z-10"></div>

            <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between">

                {/* Left Side Content */}
                <div className="w-full md:w-[60%] lg:w-[50%] flex flex-col justify-center hero-content">
                    <div className="max-md:mt-10">
                        <h1 className={`${poppins.className} text-[30px] xs:text-[34px] sm:text-[38px] md:text-[42px] lg:text-[52px] xl:text-[60px] font-bold text-white leading-[1.1] md:leading-[1.1] tracking-tight mb-6 md:mb-8`}>
                            A next-generation <br className="hidden lg:block" />
                            <span className="bg-linear-to-r from-[#A26DFF] to-[#3A8EFE] text-transparent bg-clip-text italic">Bike &amp; Car booking</span><br />
                            platform designed for speed.
                        </h1>

                        <p className="text-[#B3BCE5] text-[15px] xs:text-[16px] sm:text-[18px] md:text-[18px] lg:text-[20px] font-medium mb-10 max-w-[600px] leading-[1.6]">
                            Dilshaj Infotech is building a smart mobility solution that connects riders with trusted drivers through a seamless and user-friendly app experience.
                        </p>
                    </div>

                    <div>
                        <button
                            suppressHydrationWarning
                            className="flex items-center group relative h-12 w-fit cursor-pointer overflow-hidden transition-all duration-700 rounded-[34px_34px_0px_34px] hover:rounded-[34px_34px_34px_0px] md:mt-4"
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

                {/* Right Side Spacer - Phones & cars are in the background image */}
                <div className="hidden md:block w-full md:w-[40%] lg:w-[50%] h-[200px] md:h-[500px] pointer-events-none">
                </div>

            </div>
        </section>
    );
}
