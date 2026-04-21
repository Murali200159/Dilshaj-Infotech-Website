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
            gsap.from(".hero-text-reveal", {
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
        <section ref={sectionRef} className={`${poppins.className} relative w-full min-h-[500px] bg-[#000000] overflow-hidden`}>

            {/* Two-column grid: left text | right image */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_1fr] min-h-[500px] lg:min-h-[700px]">

                {/* ── Left: Text Content ── */}
                <div className="flex flex-col justify-center px-6 sm:px-10 lg:pl-[100px] xl:pl-[140px] 2xl:pl-[160px] lg:pr-6 pt-[100px] pb-10 lg:py-[120px] z-10 hero-text-reveal">

                    {/* Pill */}
                    <div className="border border-[#a855f7]/50 rounded-full w-fit px-4 py-[5px] mb-7">
                        <span className="text-[#a855f7] text-[13px] font-medium tracking-wide">#upcoming</span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-[34px] sm:text-[44px] lg:text-[52px] xl:text-[60px] font-bold text-white leading-[1.1] mb-5 tracking-tight">
                        The Future of <span className="text-[#a855f7]">Smart</span>
                        <br />
                        <span className="text-[#3b82f6]">Online Shopping</span>
                    </h1>

                    {/* Subheading */}
                    <h2 className="text-[15px] sm:text-[17px] lg:text-[18px] font-semibold text-white mb-4 leading-normal max-w-[480px]">
                        A next-generation e-commerce platform built for speed, scale, and seamless customer experiences.
                    </h2>

                    {/* Paragraph */}
                    <p className="text-[#9ca3af] text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.7] mb-9 font-normal max-w-[460px]">
                        We are developing a powerful digital marketplace designed to connect businesses and customers through a fast, secure, and user-friendly shopping experience. From product discovery to secure checkout, every interaction is crafted for convenience and growth.
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

                {/* ── Right: Image ── */}
                <div className="relative w-full h-[260px] sm:h-[360px] lg:h-auto lg:min-h-[700px] lg:-ml-[80px] xl:-ml-[60px] hero-image-reveal">
                    <Image
                        src="/products/commerce/hero.png"
                        alt="Smart Online Shopping — products showcase"
                        fill
                        className="object-contain object-center lg:object-bottom-left"
                        priority
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                </div>

            </div>
        </section>
    );
}
