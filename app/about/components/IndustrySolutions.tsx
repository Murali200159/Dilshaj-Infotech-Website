"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const industryCards = [
    {
        id: 1,
        title: "Real Estate & Enterprise",
        image: "/industry-solutions/business.png",
        bullets: [
            "Smart Lead Management",
            "Predictive Market Insights",
            "Workflow Automation",
            "Data Visualization Dashboards",
        ],
        ctaText: "Partner With Us",
    },
    {
        id: 2,
        title: "Finance & FinTech",
        image: "/industry-solutions/growth.png",
        bullets: [
            "Fraud Detection Systems",
            "Smart Risk Assessment",
            "Automated Reporting",
            "AI-Powered Customer Support",
        ],
        ctaText: "Partner With Us",
    },
    {
        id: 3,
        title: "Healthcare",
        image: "/industry-solutions/healthcare.png",
        bullets: [
            "Data-Driven Insights",
            "Patient Workflow Automation",
            "Predictive Analytics",
            "Secure Cloud Infrastructure",
        ],
        ctaText: "Partner With Us",
    },
    {
        id: 4,
        title: "E-Commerce & Retail",
        image: "/industry-solutions/ecommerce.png",
        bullets: [
            "Personalized Product Recommendations",
            "Inventory Intelligence",
            "Customer Behavior Analytics",
            "Smart Chat & Support Bots",
        ],
        ctaText: "Partner With Us",
    },
    {
        id: 5,
        title: "Food & Restaurant",
        image: "/industry-solutions/food.png",
        bullets: [
            "Menu Optimization Intelligence",
            "Inventory & Supply Automation",
            "Food Safety Monitoring",
            "AI Customer Engagement",
        ],
        ctaText: "Partner With Us",
    },
];

const allCards = [...industryCards, ...industryCards];

// Default Desktop Constants
const D_CARD_WIDTH = 410;
const D_CARD_HEIGHT = 516;
const D_SPACING = 430;

// Mobile Constants
const M_CARD_WIDTH = 280;
const M_CARD_HEIGHT = 380;
const M_SPACING = 300;

export default function IndustrySolutions() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const scrollX = useMotionValue(0);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const CARD_WIDTH = isMobile ? M_CARD_WIDTH : D_CARD_WIDTH;
    const CARD_HEIGHT = isMobile ? M_CARD_HEIGHT : D_CARD_HEIGHT;
    const SPACING = isMobile ? M_SPACING : D_SPACING;
    const TRACK_WIDTH = allCards.length * SPACING;

    useGSAP(() => {
        // Heading animation
        gsap.from(".industry-heading", {
            scrollTrigger: {
                trigger: ".industry-heading",
                start: "top 85%",
            },
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });
    }, { scope: sectionRef });

    useAnimationFrame((time, delta) => {
        if (!isHovered) {
            scrollX.set(scrollX.get() - (delta * 0.15));
        }
    });

    return (
        <section ref={sectionRef} className="bg-white pt-16 pb-10 md:py-24 px-6 md:px-12 lg:px-20 overflow-hidden relative">
            <div className="max-w-[1920px] mx-auto">
                <div className="industry-heading text-center mb-16 space-y-4 relative z-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                        Transforming Industries with Intelligent <br className="hidden md:block " /> <span className="mt-6 block">Digital Solutions</span>
                    </h2>
                    <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
                        We combine domain expertise and advanced technology to deliver measurable impact across diverse sectors.
                    </p>
                </div>

                {/* 3D Convex Carousel Container */}
                <div
                    className="relative w-full h-[480px] md:h-[600px] flex items-center justify-center pointer-events-auto transform-gpu"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {allCards.map((card, index) => (
                        <CarouselCard
                            key={`${card.id}-${index}`}
                            card={card}
                            index={index}
                            scrollX={scrollX}
                            dimensions={{
                                width: CARD_WIDTH,
                                height: CARD_HEIGHT,
                                spacing: SPACING,
                                trackWidth: TRACK_WIDTH
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function CarouselCard({ card, index, scrollX, dimensions }: { card: any, index: number, scrollX: any, dimensions: any }) {
    const [isHovered, setIsHovered] = useState(false);
    const { width, height, spacing, trackWidth } = dimensions;
    const baseX = index * spacing;

    const xOffset = useTransform(scrollX, (latest: number) => {
        const globalX = ((baseX + latest) % trackWidth + trackWidth) % trackWidth;
        return globalX > trackWidth / 2 ? globalX - trackWidth : globalX;
    });

    const halfTrack = trackWidth / 2;

    const inRange = [-halfTrack, 0, halfTrack];

    // Scale mapping - slight scale up for center card
    const scale = useTransform(xOffset, inRange, [0.95, 1, 0.95]);

    // Opacity mapping for seamless loop fade-out at edges
    const opacity = useTransform(xOffset,
        [-halfTrack, -halfTrack + 400, 0, halfTrack - 400, halfTrack],
        [0, 1, 1, 1, 0]
    );

    return (
        <motion.div
            className="absolute top-1/2 left-1/2 rounded-[32px] overflow-hidden shadow-2xl border border-gray-100 bg-black cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                width: width,
                height: height,
                marginLeft: -width / 2,
                marginTop: -height / 2,
                x: xOffset,
                scale,
                opacity,
            }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
        >
            {/* Base Image */}
            <Image
                src={card.image}
                alt={card.title}
                fill
                className={`object-cover transition-transform duration-700 opacity-90 ${isHovered ? "scale-110 opacity-100" : "scale-100"}`}
            />

            {/* Overlay for Content on Hover */}
            <div className={`absolute inset-0 bg-black/85 transition-opacity duration-300 z-20 ${isHovered ? "opacity-100" : "opacity-0"}`} />

            {/* Dark Gradient from bottom (hidden on hover) */}
            <div className={`absolute inset-0 bg-linear-to-t from-black/95 via-black/20 to-transparent z-10 p-8 flex flex-col justify-end transition-all duration-300 ${isHovered ? "opacity-0 invisible" : "opacity-100 visible"}`}>
                <h3 className="text-2xl font-bold text-white mb-2 shadow-sm drop-shadow-md">
                    {card.title}
                </h3>
            </div>

            {/* Detailed Content (Shown on Hover) */}
            <div className={`absolute inset-0 z-30 p-8 flex flex-col justify-between transition-all duration-300 ease-out ${isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
                <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 drop-shadow-xl">
                        {card.title}
                    </h3>
                    <div className="max-h-[180px] md:max-h-[280px] overflow-y-auto pr-2 custom-scrollbar md:max-h-none md:overflow-visible">
                        <ul className="space-y-4">
                            {card.bullets.map((bullet: string, i: number) => (
                                <li key={i} className="flex items-center gap-3 text-white text-sm sm:text-base font-semibold">
                                    <span className="drop-shadow-lg">{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <button suppressHydrationWarning className="group/btn flex items-center relative h-12 w-fit cursor-pointer overflow-hidden transition-all duration-700 rounded-[34px_34px_0px_34px] hover:rounded-[34px_34px_34px_0px]">
                    {/* LEFT ICON CIRCLE */}
                    <div className="absolute left-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-20 transition-all duration-700 ease-in-out group-hover/btn:left-[calc(100%-48px)] group-hover/btn:bg-linear-to-r group-hover/btn:from-[#3799FA] group-hover/btn:to-[#9961FB] group-hover/btn:scale-105">
                        <ChevronRight className="w-4 h-4 text-[#3799FA] transition-all duration-700 ease-in-out group-hover/btn:text-white" />
                    </div>

                    {/* MAIN BUTTON BODY */}
                    <div className="pl-14 pr-8 h-full flex items-center text-white font-bold text-[15px] shadow-[0_8px_18px_rgba(55,153,250,0.25)] transition-all duration-700 ease-in-out bg-linear-to-r from-[#3799FA] to-[#9961FB] group-hover/btn:from-white group-hover/btn:to-white group-hover/btn:text-black group-hover/btn:pl-6 group-hover/btn:pr-14 rounded-[34px_34px_0px_34px] group-hover/btn:rounded-[34px_34px_34px_0px]">
                        {card.ctaText}
                    </div>
                </button>
            </div>

            {/* Subtle glow/shadow on hover */}
            <div className={`absolute inset-0 rounded-[32px] ring-1 ring-inset transition-all duration-500 ${isHovered ? "ring-blue-500/30" : "ring-transparent"}`} />
        </motion.div>
    );
}
