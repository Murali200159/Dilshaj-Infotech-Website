"use client";
import React, { useEffect, useRef } from 'react';
import { Poppins } from 'next/font/google';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import hospitalImg from '../images/hos.png';
import daIcon from '../images/da.png';
import ic2Icon from '../images/ic2.png';
import emerIcon from '../images/emer.png';

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
});

// Defining features array to keep JSX clean
const featuresList = [
    {
        icon: (
            <img src={daIcon.src} alt="24/7 Doctor Availability" className="w-[20px] h-auto object-contain max-h-[20px]" />
        ),
        title: "24/7 Doctor Availability",
        desc: "Access medical experts whenever you need urgent or routine consultation.",
    },
    {
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
        ),
        title: "Secure Video Consultation",
        desc: "Encrypted communication ensuring patient privacy and data security.",
    },
    {
        icon: (
            <img src={ic2Icon.src} alt="Digital Prescriptions" className="w-[24px] h-auto object-contain max-h-[24px]" />
        ),
        title: "Digital Prescriptions",
        desc: "Get verified prescriptions instantly and share them with pharmacies easily.",
    },
    {
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
        ),
        title: "Medical Records Management",
        desc: "Securely store prescriptions, reports, and consultation history in one place for easy access anytime.",
    },
    {
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
        ),
        title: "Multi-Specialty Support",
        desc: "Consult trusted doctors across multiple specialties, all through a single platform.",
    },
    {
        icon: (
            <img src={emerIcon.src} alt="Emergency Assistance" className="w-[20px] h-auto object-contain max-h-[20px]" />
        ),
        title: "Emergency Assistance Integration",
        desc: "Quickly connect to nearby hospitals and emergency services during urgent situations.",
    }
];

export default function ComprehensiveFeatures() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.from(".comprehensive-header", {
                y: 30,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".comprehensive-header",
                    start: "top 85%",
                }
            });

            gsap.from(".comprehensive-image-block", {
                scale: 0.95,
                opacity: 0,
                duration: 1.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".comprehensive-image-block",
                    start: "top 85%",
                }
            });

            gsap.from(".feature-list-item", {
                x: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".feature-list-item",
                    start: "top 95%",
                }
            });

            gsap.from(".cta-banner-reveal", {
                y: 40,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".cta-banner-reveal",
                    start: "top 95%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-full bg-white relative py-20 px-4 md:px-8 font-sans overflow-hidden">

            {/* Top Left Features Badge */}
            <div className="absolute top-10 left-0 z-20" style={{ filter: 'drop-shadow(3px 4px 5px rgba(0,0,0,0.25))' }}>
                <div
                    className="bg-linear-to-r from-[#0057A8] to-[#0089F5] text-white py-3 pl-8 pr-10 flex items-center gap-3 border-l-4 border-[#009BFF]"
                    style={{ clipPath: 'polygon(0% 0%, 100% 0%, 85% 50%, 100% 100%, 0% 100%)', width: '230px' }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="13 17 18 12 13 7"></polyline>
                        <polyline points="6 17 11 12 6 7"></polyline>
                    </svg>
                    <span className={`${poppins.className} text-[20px] font-bold tracking-wide mt-0.5`}>Features</span>
                </div>
            </div>

            <div className="max-w-[1300px] mx-auto mt-20">

                {/* Content Split: Left (Title + Image) & Right (List) */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

                    {/* Left Column: Title & Image */}
                    <div className="w-full lg:w-1/2 flex flex-col max-lg:contents">

                        {/* Header Section */}
                        <div className="mb-10 max-lg:order-1 max-lg:mb-6 comprehensive-header">
                            <h2 className={`${poppins.className} text-[25px] md:text-[38px] lg:text-[42px] font-semibold text-black leading-[1.3] tracking-tight`}>
                                Comprehensive Features<br />
                                for <span className="text-[#888888]">Smarter Digital</span><br />
                                <span className="text-[#888888]">Healthcare</span>
                            </h2>
                        </div>

                        {/* Image Section */}
                        <div className="w-full grow min-h-[400px] md:min-h-[500px] rounded-[32px] overflow-hidden shadow-lg relative max-lg:order-3 max-lg:mt-4 comprehensive-image-block">
                            <img
                                src={hospitalImg.src}
                                alt="Hospital Reception"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right: Feature List */}
                    <div className="w-full lg:w-1/2 flex flex-col max-lg:order-2">
                        {featuresList.map((feature, index) => (
                            <div
                                key={index}
                                className={`flex items-start gap-5 p-6 transition-colors border-l ${index === 0 ? 'bg-[#F9F9F9] border-gray-200' : 'border-[#F2F2F4]'} hover:bg-[#F9F9F9] border-b last:border-b-0 feature-list-item`}
                            >
                                <div className="mt-1 w-12 h-12 shrink-0 border border-gray-200 rounded-lg flex items-center justify-center bg-white shadow-sm">
                                    {feature.icon}
                                </div>
                                <div className="flex flex-col">
                                    <h4 className={`${poppins.className} text-[19px] md:text-[21px] font-bold text-black mb-1.5`}>
                                        {feature.title}
                                    </h4>
                                    <p className="text-[#555] text-[14px] md:text-[15px] leading-[1.6]">
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Bottom CTA Banner */}
                <div className="max-md:mt-8 md:mt-20 mt-20 w-full max-w-[1200px] mx-auto rounded-3xl overflow-hidden relative shadow-2xl cta-banner-reveal">
                    {/* Gradient Background matches image EXACTLY */}
                    <div className="absolute inset-0 bg-[#0F1023] z-0 flex">
                        <div className="absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-[#446CE4] to-transparent mix-blend-screen opacity-60"></div>
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-[#221035] to-transparent mix-blend-screen opacity-80"></div>
                    </div>

                    <div className="relative z-10 flex flex-col items-center md:flex-row md:items-center justify-between gap-6 md:gap-8 max-md:py-8 max-md:px-6 p-12 md:p-14">
                        <h2 className={`${poppins.className} max-md:text-[18px] text-[26px] md:text-[32px] font-bold text-white leading-[1.4] max-w-[650px] max-md:text-center`}>
                            <span className="md:hidden">
                                Build the Future of Digital<br />
                                Healthcare with Us for a<br />
                                Smarter Care Experience.
                            </span>
                            <span className="hidden md:inline">
                                Build the Future of Digital Healthcare<br />
                                with Us for a Smarter Care Experience.
                            </span>
                        </h2>

                        <button
                            suppressHydrationWarning
                            className="flex items-center group relative h-12 w-fit cursor-pointer overflow-hidden transition-all duration-700 rounded-[34px_34px_0px_34px] hover:rounded-[34px_34px_34px_0px] max-md:mt-2 mt-2"
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
