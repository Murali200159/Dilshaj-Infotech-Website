"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}
import {
    Layout,
    Smartphone,
    Palette,
    RefreshCcw,
    Code2,
    CheckCircle2,
    ChevronRight,
} from "lucide-react";
import { FaChevronRight } from "react-icons/fa6";

const services = [
    {
        id: 1,
        title: "Web Application Development",
        description: "Build secure, scalable web platforms that drive results.",
        img: "/about/innovation/web.png",
        tag: "#WebDevelopment",
        cardTitle: "Build powerful digital systems that scale, perform, and deliver measurable impact.",
        bullets: [
            "Modern, scalable architecture",
            "Custom-built solutions",
            "Optimized for speed & security",
        ],
        features: [
            "Custom Web Platforms",
            "Mobile Application Solutions",
            "E-Commerce Systems",
            "Performance & Maintenance",
        ],
    },
    {
        id: 2,
        title: "Mobile App Development",
        description: "Create high-performance Android & iOS applications.",
        img: "/about/innovation/mobile.png",
        tag: "#MobileDevelopment",
        cardTitle: "Create seamless mobile experiences that engage, retain, and drive business growth.",
        bullets: [
            "Native and cross-platform apps",
            "High-performance Android and iOS solutions",
            "Engineered for engagement, reliability, and speed",
        ],
        features: [
            "iOS App Development",
            "Android App Solutions",
            "Cross-Platform Systems",
            "App Store Optimization",
        ],
    },
    {
        id: 3,
        title: "UI/UX Design & Strategy",
        description: "Design intuitive experiences that users love.",
        img: "/about/innovation/ux.png",
        tag: "#UIUXDesign",
        cardTitle: "Craft intuitive digital experiences that engage users, convert, and drive loyalty.",
        bullets: [
            "User-centric design approach",
            "Intuitive interfaces for your customers",
            "Optimized for flow, usability, and conversions",
        ],
        features: [
            "User Experience Research",
            "Wireframing & Prototyping",
            "Brand Identity Design",
            "Usability & Testing",
        ],
    },
    {
        id: 4,
        title: "Software Integration & Support",
        description: "Seamlessly connect systems and optimize workflows.",
        img: "/about/innovation/software.png",
        tag: "#SystemIntegration",
        cardTitle: "Connect fragmented digital systems to streamline operations, enhance efficiency, and scale.",
        bullets: [
            "Seamless API Integrations",
            "Unified ecosystems for your workflow",
            "Optimized for data, sync, and reliability",
        ],
        features: [
            "Cloud Architecture Setup",
            "Custom API Integration",
            "Legacy System Upgrades",
            "Monitoring & Support",
        ],
    },
    {
        id: 5,
        title: "Custom Software Solutions",
        description: "Develop tailored systems built around your business needs.",
        img: "/about/innovation/solution.png",
        tag: "#CustomSoftware",
        cardTitle: "Develop tailored digital solutions that solve complex challenges and accelerate growth.",
        bullets: [
            "Bespoke enterprise architecture",
            "Purpose-built software for your operations",
            "Optimized for agility, scale, and longevity",
        ],
        features: [
            "Enterprise ERP Systems",
            "Business Process Automation",
            "SaaS Product Development",
            "Security & Compliance",
        ],
    },
];

export default function ServicesDetail() {
    const [activeId, setActiveId] = useState(1);
    const active = services.find((s) => s.id === activeId)!;
    const container = useRef(null);

    useGSAP(() => {
        // Heading Animation
        gsap.fromTo(".services-heading",
            { y: 50, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 85%",
                },
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out"
            }
        );

        // Left: Service List Items animation
        gsap.fromTo(".service-list-item",
            { x: -50, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                },
                x: 0,
                opacity: 1,
                stagger: 0.15,
                duration: 0.8,
                ease: "power2.out",
                immediateRender: false
            }
        );

        // Right Content animation
        gsap.fromTo(".service-detail-card",
            { scale: 0.95, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 75%",
                },
                scale: 1,
                opacity: 1,
                duration: 1.2,
                ease: "expo.out",
                immediateRender: false
            }
        );

        // Bottom Banner animation
        gsap.fromTo(".service-growth-banner",
            { y: 60, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 90%",
                },
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                immediateRender: false
            }
        );
    }, { scope: container });

    return (
        <section ref={container} className="bg-[#f3f4f6] py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden">

            {/* Heading Area */}
            <div className="services-heading max-w-7xl mx-auto text-center mb-16 md:mb-20">
                <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-gray-900 leading-tight">
                    Full-Stack Digital Development <br className="md:hidden" /> Services to Drive Innovation
                </h2>
                <p className="text-gray-600 text-base md:text-[16px] mt-6 max-w-5xl mx-auto px-4">
                    Our technology solutions are engineered to deliver measurable impact — faster performance,{" "}
                    <br className="hidden md:block" />
                    smarter workflows, and scalable systems built for modern businesses.
                </p>
            </div>

            {/* Main Content */}
            <div className="w-full max-w-[1600px] mx-auto lg:ml-0">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-12 sm:gap-16 lg:gap-24 items-start">

                    {/* LEFT: Service List */}
                    <div className="space-y-4 px-2 sm:px-0">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                onClick={() => setActiveId(service.id)}
                                className={`service-list-item flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 rounded-2xl p-6 cursor-pointer transition-all duration-300 ${activeId === service.id
                                    ? "bg-black text-white shadow-2xl"
                                    : "bg-white text-gray-900 border border-gray-100 hover:shadow-md"
                                    }`}
                            >
                                <div
                                    className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${activeId === service.id ? "bg-white/10" : "bg-gray-100"
                                        }`}
                                >
                                    <Image
                                        src={service.img}
                                        alt={service.title}
                                        width={32}
                                        height={32}
                                        className={`object-contain ${activeId === service.id ? "brightness-0 invert" : "opacity-80"
                                            }`}
                                    />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">{service.title}</h3>
                                    <p
                                        className={`text-sm mt-2 ${activeId === service.id ? "text-gray-400" : "text-gray-500"
                                            }`}
                                    >
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT: Detail Card (updates based on active service) */}
                    <div className="service-detail-card flex flex-col">

                        {/* Gradient Dark Card */}
                        <div className="relative overflow-hidden rounded-[27px] bg-[#1a1c2e] p-6 sm:p-10 lg:p-12 text-white shadow-2xl w-full max-w-[1200px] min-h-auto lg:min-h-[460px] flex flex-col justify-between">

                            {/* Top Section */}
                            <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 relative z-10">

                                {/* Left: Tag + Title */}
                                <div className="w-full lg:max-w-xl text-left">
                                    <span className="inline-block bg-transparent px-4 py-1 rounded-full text-xs sm:text-sm border border-white/20 mb-6 sm:mb-8">
                                        {active.tag}
                                    </span>
                                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-[1.2]">
                                        {active.cardTitle}
                                    </h3>
                                </div>

                                {/* Right: Bullet Points */}
                                <div className="space-y-4 sm:space-y-6 lg:mt-16 w-full lg:w-auto">
                                    {active.bullets.map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 text-sm text-gray-200">
                                            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                                    <path d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div className="relative z-10 mt-12 md:mt-0 mb-2">
                                <button
                                    suppressHydrationWarning
                                    className="flex items-center group relative h-12 w-fit cursor-pointer overflow-hidden transition-all duration-700 rounded-[34px_34px_0px_34px] hover:rounded-[34px_34px_34px_0px]"
                                >
                                    <div className="absolute left-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-20 transition-all duration-700 ease-in-out group-hover:left-[calc(100%-48px)] group-hover:bg-linear-to-r group-hover:from-[#3799FA] group-hover:to-[#9961FB] group-hover:scale-105">
                                        <FaChevronRight className="w-4 h-4 text-[#3799FA] transition-all duration-700 ease-in-out group-hover:text-white" />
                                    </div>
                                    <div className="pl-14 pr-8 h-full flex items-center text-white font-bold text-[15px] shadow-[0_8px_18px_rgba(55,153,250,0.25)] transition-all duration-700 ease-in-out bg-linear-to-r from-[#3799FA] to-[#9961FB] group-hover:from-white group-hover:to-white group-hover:text-black group-hover:pl-6 group-hover:pr-14 rounded-[34px_34px_0px_34px] group-hover:rounded-[34px_34px_34px_0px]">
                                        Start Your Project
                                    </div>
                                </button>
                            </div>

                            {/* Mesh Overlays */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(90,103,251,0.15)_0%,transparent_50%),radial-gradient(circle_at_bottom_left,rgba(155,110,253,0.15)_0%,transparent_50%)] pointer-events-none opacity-50" />
                            <div className="absolute top-0 right-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.03)_50%,transparent_75%)] pointer-events-none" />
                        </div>

                        {/* BOTTOM: 4 Feature Cards */}
                        <div className="mt-12 w-full">
                            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-10">
                                {active.features.map((feature, i) => (
                                    <div key={i} className="flex flex-col items-center sm:items-start text-center sm:text-left">
                                        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center mb-5 shrink-0">
                                            <Image 
                                                src={i === 3 ? "/about/innovation/software.png" : `/about/stack/image${i + 1}.png`} 
                                                alt="feature icon" 
                                                width={24} 
                                                height={24} 
                                                className="object-contain brightness-0 invert" 
                                            />
                                        </div>
                                        <h4 className="text-gray-900 font-bold text-lg leading-tight">
                                            {feature}
                                        </h4>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* AI Growth Banner */}
            <div className="service-growth-banner mt-20 md:mt-24 w-full flex justify-center">
                <div className="relative overflow-hidden rounded-[27px] bg-[#1a1c2e] px-8 sm:px-10 lg:px-14 py-12 lg:py-0 text-white shadow-2xl w-full max-w-[1379px] h-auto lg:h-[249px] flex flex-col lg:flex-row items-center justify-between gap-10">

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold max-w-2xl relative z-10 leading-tight text-center lg:text-left">
                        Turn Your Business Into an AI-Powered <br className="hidden sm:block lg:hidden" /> Growth Engine
                    </h3>
                    <div className="relative z-10 w-full lg:w-auto">
                        <button
                            suppressHydrationWarning
                            className="flex items-center group relative h-12 w-fit cursor-pointer mx-auto lg:mx-0 overflow-hidden transition-all duration-700 rounded-[34px_34px_0px_34px] hover:rounded-[34px_34px_34px_0px]"
                        >
                            <div className="absolute left-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-20 transition-all duration-700 ease-in-out group-hover:left-[calc(100%-48px)] group-hover:bg-linear-to-r group-hover:from-[#3799FA] group-hover:to-[#9961FB] group-hover:scale-105">
                                <FaChevronRight className="w-4 h-4 text-[#3799FA] transition-all duration-700 ease-in-out group-hover:text-white" />
                            </div>
                            <div className="pl-14 pr-8 h-full flex items-center whitespace-nowrap text-white font-bold text-[15px] shadow-[0_8px_18px_rgba(55,153,250,0.25)] transition-all duration-700 ease-in-out bg-linear-to-r from-[#3799FA] to-[#9961FB] group-hover:from-white group-hover:to-white group-hover:text-black group-hover:pl-6 group-hover:pr-14 rounded-[34px_34px_0px_34px] group-hover:rounded-[34px_34px_34px_0px]">
                                Unlock AI Potential
                            </div>
                        </button>
                    </div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(90,103,251,0.15)_0%,transparent_50%),radial-gradient(circle_at_bottom_left,rgba(155,110,253,0.15)_0%,transparent_50%)] pointer-events-none opacity-50" />
                    <div className="absolute inset-0 bg-[#1a1c2e]/60 pointer-events-none" />
                </div>
            </div>

        </section>
    );
}