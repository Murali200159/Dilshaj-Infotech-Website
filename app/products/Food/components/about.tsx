"use client";
import React, { useEffect, useRef } from 'react';
import { Poppins } from 'next/font/google';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const foodImg1 = '/products/food-images/food.png';

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
        <section ref={sectionRef} className="w-full bg-white relative py-20 lg:py-28 px-4 md:px-8 font-sans overflow-hidden">
            <div className="max-w-[1250px] mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-8 xl:gap-14">

                {/* Left side Image */}
                <div className="w-full lg:w-[45%] max-md:order-2 max-md:mt-6 about-image-reveal">
                    <div className="rounded-[24px] overflow-hidden shadow-2xl relative w-full aspect-4/3 lg:aspect-4/3.5 bg-gray-100">
                        <img
                            src={foodImg1}
                            alt="Cooking Food"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Right side Content */}
                <div className="w-full lg:w-[55%] flex flex-col justify-center max-md:items-start max-md:text-left max-md:order-1 about-content-reveal">
                    <div className="mb-4">
                        <span className="bg-linear-to-r from-[#4DA5FF] to-[#9458F6] text-transparent bg-clip-text font-bold text-[13px] md:text-[14px] tracking-wide uppercase">
                            ABOUT THE UPCOMING APP
                        </span>
                    </div>

                    <h2 className={`${poppins.className} max-md:text-[34px] text-[32px] md:text-[44px] lg:text-[48px] font-bold text-black leading-[1.2] md:leading-[1.1] mb-6`}>
                        <span className="md:hidden">
                            A Platform Built for<br />
                            Speed and Growth
                        </span>
                        <span className="hidden md:block">
                            A Platform Built for Speed<br />
                            and Growth
                        </span>
                    </h2>

                    <p className="text-[#555555] max-md:text-[14.5px] text-[15px] md:text-[16px] leading-[1.7] mb-8 max-w-[650px]">
                        From restaurant onboarding and smart order management to secure payments and real-time delivery tracking, our food delivery platform provides everything businesses need to launch, operate, and scale successfully.
                        <br /><br />
                        Designed with scalable architecture and a mobile-first approach, it ensures smooth performance across all devices while delivering a fast, reliable, and user-friendly experience for customers, restaurants, and delivery partners.
                    </p>

                    <div>
                        <button
                            suppressHydrationWarning
                            className="flex items-center group relative h-12 w-fit cursor-pointer overflow-hidden transition-all duration-700 rounded-[34px_34px_0px_34px] hover:rounded-[34px_34px_34px_0px]"
                        >
                            <div className="absolute left-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-20 transition-all duration-700 ease-in-out group-hover:left-[calc(100%-48px)] group-hover:bg-linear-to-r group-hover:from-[#3799FA] group-hover:to-[#9961FB] group-hover:scale-105">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3799FA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-0.5 transition-all duration-700 ease-in-out group-hover:text-white"><polyline points="9 18 15 12 9 6" /></svg>
                            </div>
                            <div className="pl-14 pr-8 h-full flex items-center text-white font-bold text-[15px] shadow-[0_8px_18px_rgba(55,153,250,0.25)] transition-all duration-700 ease-in-out bg-linear-to-r from-[#3799FA] to-[#9961FB] group-hover:from-white group-hover:to-white group-hover:text-black group-hover:pl-6 group-hover:pr-14 rounded-[34px_34px_0px_34px] group-hover:rounded-[34px_34px_34px_0px]">
                                Stay Tuned
                            </div>
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
