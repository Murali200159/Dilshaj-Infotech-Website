"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MapPin, AlertTriangle, Cloud, Calendar, ShieldCheck, Pointer, Activity, Network, CalendarPlus, Smartphone } from "lucide-react";
import { FaChevronRight } from "react-icons/fa6";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Poppins } from "next/font/google";
import { useFilter } from "../context/FilterContext";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"]
});

gsap.registerPlugin(ScrollTrigger);

// ─── Data ─────────────────────────────────────────────────────────────────────
const cardsData = [
    {
        id: 1,
        tag: "Ai Tech Skill",
        tagColor: "bg-[#4daafc]",
        logoImage: "/products-images/logocard-1.png",
        quote: "AI-Powered Skill Development with EduProva",
        desc: "EduProva is an intelligent career acceleration platform combining AI tools, professional networking, freelancing, startup collaboration, and skill-based learning — all in one ecosystem.",
        metrics: [
            { val: "95%", label: "Personalized Learning Experience" },
            { val: "100%", label: "Faster Skill Improvement" },
        ],
        buttonText: "View Project",
        buttonColor: "from-[#8fb2ff] to-[#604aff]",
        href: "/products/edu-det",
        imageBg: "bg-linear-to-br from-[#b4d2ff] via-[#dcdbfc] to-[#f4b6fa]",
        computercard: "",
        mobilecard: "",
        plogocard: "",
        rightcard: "",
        newscard: "",
        bgText: "",
        eduprovacard: "/products-images/eduprova.png",
        reverse: false,
    },
    {
        id: 2,
        tag: "Media & Content Platform",
        tagColor: "bg-[#ab52f2]",
        logoImage: "",
        title: "Digital News Channel",
        quote: "Real-Time Digital News & Insights Platform",
        desc: "A modern digital news ecosystem delivering fast, reliable, and personalized news experiences through AI-powered content curation and live updates.",
        metrics: [
            { val: "24/7", label: "Live News Coverage" },
            { val: "100%", label: "Digital-First Experience" },
        ],
        buttonText: "View Details",
        buttonColor: "from-[#8fb2ff] to-[#604aff]",
        href: "/products/digital-news",
        imageBg: "bg-[linear-gradient(to_bottom,#A00000,#000063)]",
        computercard: "",
        mobilecard: "",
        plogocard: "",
        rightcard: "",
        newscard: "/products-images/digital-news.png",
        ridecard: "",
        bgText: "Media",
        reverse: true,
    },
    {
        id: 3,
        tag: "Mobility & Transport",
        tagColor: "bg-[#4daafc]",
        logoImage: "",
        title: "Bike & Car Rider App",
        quote: "Smart Ride Booking for Bikes & Cars",
        desc: "An intelligent ride-booking platform offering seamless travel experiences with real-time tracking, optimized routes, and dynamic pricing.",
        metrics: [
            { val: "50%", label: "Faster Ride Matching" },
            { val: "GPS", label: "Real-Time GPS Tracking" },
        ],
        buttonText: "View Details",
        buttonColor: "from-[#8fb2ff] to-[#604aff]",
        href: "/products/bike-rider",
        imageBg: "bg-[#041a2e]",
        computercard: "",
        mobilecard: "",
        plogocard: "",
        rightcard: "",
        newscard: "",
        ridecard: "/products-images/bike-car.png",
        ecommercecard: "",
        bgText: "",
        reverse: false,
    },
    {
        id: 4,
        tag: "Retail & Commerce",
        tagColor: "bg-[#ab52f2]",
        logoImage: "",
        title: "E-Commerce Platform",
        quote: "Scalable E-Commerce Experience",
        desc: "A powerful e-commerce solution built for modern businesses with advanced product management, secure payments, and personalized shopping experiences.",
        metrics: [
            { val: "text-only", label: "Multi-Vendor Support" },
            { val: "text-only", label: "Secure Payment Integration" },
        ],
        buttonText: "View Details",
        buttonColor: "from-[#8fb2ff] to-[#604aff]",
        href: "/products/commerce",
        imageBg: "bg-[#041a2e]",
        computercard: "",
        mobilecard: "",
        plogocard: "",
        rightcard: "",
        newscard: "",
        ridecard: "",
        ecommercecard: "/products-images/e-card4.png",
        securitycard: "",
        bgText: "",
        reverse: true,
    },
    {
        id: 5,
        tag: "Safety & Navigation",
        tagColor: "bg-[#2563eb]",
        logoImage: "",
        title: "Security & Navigation App",
        quote: "Smart Security & Navigation Assistant",
        desc: "An AI-powered safety app providing real-time navigation, emergency alerts, and location tracking to ensure safer journeys.",
        metrics: [
            { val: "icon-location", label: "Live Location Tracking" },
            { val: "icon-alert", label: "Instant Emergency Alerts" },
        ],
        buttonText: "View Details",
        buttonColor: "from-[#8fb2ff] to-[#604aff]",
        href: "/products/security",
        imageBg: "bg-[#0a0f1d]",
        computercard: "",
        mobilecard: "",
        plogocard: "",
        rightcard: "",
        newscard: "",
        ridecard: "",
        ecommercecard: "",
        securitycard: "/products-images/security-navigation.png",
        architecturecard: "",
        doctorcard: "",
        bgText: "",
        reverse: false,
    },
    {
        id: 6,
        tag: "Design & Architecture",
        tagColor: "bg-linear-to-r from-[#4ad1f2] to-[#ab52f2]",
        logoImage: "",
        title: "Architecture & Design Platform",
        quote: "Collaborative Architecture & Design Hub",
        desc: "A platform for architects and designers to showcase work, collaborate on projects, and streamline design workflows with modern digital tools.",
        metrics: [
            { val: "100+", label: "Design Showcases (Planned)" },
            { val: "icon-network", label: "Seamless Collaboration Tools" },
        ],
        buttonText: "View Details",
        buttonColor: "from-[#8fb2ff] to-[#604aff]",
        href: "/products/interior",
        imageBg: "bg-[#040b16]",
        computercard: "",
        mobilecard: "",
        plogocard: "",
        rightcard: "",
        newscard: "",
        ridecard: "",
        ecommercecard: "",
        securitycard: "",
        architecturecard: "/products-images/architechture.png",
        doctorcard: "",
        bgText: "",
        reverse: true,
    },
    {
        id: 7,
        tag: "Health Care",
        tagColor: "bg-linear-to-r from-[#4ad1f2] to-[#ab52f2]",
        logoImage: "",
        title: "Doctor-on-One-Click",
        quote: "Instant Doctor Access Anytime",
        desc: "A healthcare platform enabling users to connect with certified doctors instantly through video, chat, and appointment booking.",
        metrics: [
            { val: "24/7", label: "Doctor Access" },
            { val: "icon-calendar-plus", label: "Quick Appointment Booking" },
        ],
        buttonText: "View Details",
        buttonColor: "from-[#8fb2ff] to-[#604aff]",
        href: "/products/doctor",
        imageBg: "bg-[#dbeafe]",
        computercard: "",
        mobilecard: "",
        plogocard: "",
        rightcard: "",
        newscard: "",
        ridecard: "",
        ecommercecard: "",
        securitycard: "",
        architecturecard: "",
        doctorcard: "/products-images/doctor-card7.png",
        urbancard: "",
        bgText: "",
        reverse: false,
    },
    {
        id: 8,
        tag: "On-Demand Services",
        tagColor: "bg-linear-to-r from-[#22d3ee] to-[#8b5cf6]",
        logoImage: "",
        title: "UrbanServe-Style Service App",
        quote: "All-in-One Home Services Platform",
        desc: "A service marketplace connecting users with verified professionals for home services like cleaning, repairs, and maintenance.",
        metrics: [
            { val: "icon-shield-check", label: "Verified Service Providers" },
            { val: "icon-smartphone-tap", label: "Easy Booking System" },
        ],
        buttonText: "View Details",
        buttonColor: "from-[#8fb2ff] to-[#604aff]",
        href: "/products/urban-clap",
        imageBg: "bg-[#040b16]",
        computercard: "",
        mobilecard: "",
        plogocard: "",
        rightcard: "",
        newscard: "",
        ridecard: "",
        ecommercecard: "",
        securitycard: "",
        architecturecard: "",
        doctorcard: "",
        urbancard: "/products-images/urban-clap.png",
        foodcard: "",
        bgText: "",
        reverse: true,
    },
    {
        id: 9,
        tag: "Food & Delivery",
        tagColor: "bg-linear-to-r from-[#4ad1f2] to-[#ab52f2]",
        logoImage: "",
        title: "Food Delivery Application",
        quote: "Fast & Reliable Food Delivery Platform",
        desc: "A smart food delivery app offering quick ordering, real-time tracking, and seamless restaurant integrations for better customer experience.",
        metrics: [
            { val: "15min", label: "Delivery Target" },
            { val: "icon-signal", label: "Live Order Tracking" },
        ],
        buttonText: "View Details",
        buttonColor: "from-[#8fb2ff] to-[#604aff]",
        href: "/products/Food",
        imageBg: "bg-[#ffae00]",
        computercard: "",
        mobilecard: "",
        plogocard: "",
        rightcard: "",
        newscard: "",
        ridecard: "",
        ecommercecard: "",
        securitycard: "",
        architecturecard: "",
        doctorcard: "",
        urbancard: "",
        foodcard: "/products-images/foodcard9.jpg",
        bgText: "",
        reverse: false,
    }
];

// ─── Filter maps ─────────────────────────────────────────────────────────────
// Maps dropdown values → card tags (substring match)
const industryTagMap: Record<string, string> = {
    "ai-tech": "Ai Tech Skill",
    "media": "Media",
    "mobility": "Mobility",
    "retail": "Retail",
    "safety": "Safety",
    "architecture": "Architecture",
    "healthcare": "Health",
    "on-demand": "On-Demand",
    "food": "Food",
};

// Maps solution values → keywords found in card desc / tag
const solutionTagMap: Record<string, string[]> = {
    "mobile": ["App", "Mobile", "Ride", "Delivery", "Doctor", "Service", "Food"],
    "web": ["Platform", "Web", "Digital", "News"],
    "ai": ["AI", "EduProva", "Smart", "intelligent"],
    "marketplace": ["Marketplace", "E-Commerce", "Vendor", "Service"],
};

// ─── Metric icon renderer ──────────────────────────────────────────────────────
const renderMetricValue = (val: string) => {
    if (val === "icon-multi") return <ShieldCheck size={44} className="text-black mb-1" strokeWidth={1.5} />;
    if (val === "icon-secure") return <ShieldCheck size={44} className="text-black mb-1" strokeWidth={1.5} />;
    if (val === "icon-shield-check") return <ShieldCheck size={44} className="text-black mb-1" strokeWidth={1.5} />;
    if (val === "icon-location") return <MapPin size={46} className="text-black mb-1" strokeWidth={2} />;
    if (val === "icon-alert") return <AlertTriangle size={46} className="text-black mb-1" strokeWidth={2} />;
    if (val === "icon-cloud") return <Cloud size={44} className="text-black mb-1" strokeWidth={1.5} />;
    if (val === "icon-calendar") return <Calendar size={44} className="text-black mb-1" strokeWidth={1.5} />;
    if (val === "icon-shield") return <ShieldCheck size={44} className="text-black mb-1" strokeWidth={1.5} />;
    if (val === "icon-tap") return <Pointer size={44} className="text-black mb-1" strokeWidth={1.5} />;
    if (val === "icon-signal") return <Activity size={44} className="text-black mb-1" strokeWidth={1.5} />;
    if (val === "icon-network") return <Network size={44} className="text-black mb-1" strokeWidth={1.5} />;
    if (val === "icon-calendar-plus") return <CalendarPlus size={44} className="text-black mb-1" strokeWidth={1.5} />;
    if (val === "icon-smartphone-tap") return (
        <div className="relative inline-flex items-center justify-center mb-1 w-[46px] h-[46px]">
            <Smartphone size={40} className="text-black" strokeWidth={1.5} />
            <Pointer size={24} className="text-black absolute -bottom-1 -right-2 transform rotate-[-20deg]" strokeWidth={2} />
        </div>
    );
    return <div className="text-[36px] md:text-[42px] font-bold leading-none mb-1 text-black tracking-tight">{val}</div>;
};

// ─── Desktop TextBox ───────────────────────────────────────────────────────────
function TextBox({ card }: { card: typeof cardsData[number] }) {
    return (
        <div className="bg-white relative flex flex-col justify-center px-10 sm:px-12 lg:px-14 xl:px-16 py-6 sm:py-8 z-20 w-full min-h-[400px] lg:h-[480px] rounded-[16px] overflow-hidden">
            <div className={`absolute top-0 right-0 ${card.tagColor} text-white text-[11px] sm:text-[13px] font-bold px-4 sm:px-6 py-2 rounded-bl-[16px] z-50`}>
                {card.tag}
            </div>
            <div className="flex items-center gap-2 mb-6 mt-4">
                {card.logoImage ? (
                    <div className="relative w-[160px] sm:w-[200px] h-[40px] sm:h-[50px]">
                        <Image src={card.logoImage} alt="Logo" fill className="object-contain object-left" />
                    </div>
                ) : (
                    <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] font-bold tracking-tight text-black leading-tight">
                        {(card as any).title}
                    </h2>
                )}
            </div>
            <h3 className="w-full max-w-[600px] text-[15px] sm:text-[17px] md:text-[18px] lg:text-[20px] font-semibold text-black mb-3 leading-snug tracking-tight">
                &ldquo;{card.quote}&rdquo;
            </h3>
            <p className="w-full max-w-[620px] text-[#4B5563] text-[12.5px] sm:text-[13px] md:text-[14px] leading-[1.6] mb-5 font-medium pr-2">
                {card.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-3 mt-4">
                {card.metrics.map((m, idx) => (
                    <div key={idx} className="flex flex-col w-full sm:w-[210px] min-h-fit justify-start mt-1">
                        {m.val !== "text-only" && (
                            <span className="text-[24px] sm:text-[30px] md:text-[34px] font-bold text-black leading-none tracking-tight mb-1 flex items-center">
                                {m.val.startsWith("icon-") ? renderMetricValue(m.val) : m.val}
                            </span>
                        )}
                        <span className={`text-[#000000] text-[12px] sm:text-[13.5px] md:text-[14.5px] font-semibold leading-snug w-full ${(m.val === "text-only" || m.val.startsWith("icon-")) ? "mt-2 mb-1" : ""}`}>
                            {m.label}
                        </span>
                    </div>
                ))}
            </div>
            <div className="mt-6">
                {(card as any).href ? (
                    <Link href={(card as any).href} className="flex items-center group relative h-12 w-fit cursor-pointer overflow-hidden transition-all duration-400 rounded-[34px_34px_0px_34px] hover:rounded-[34px_34px_34px_0px]">
                        {/* LEFT ICON CIRCLE */}
                        <div className="absolute left-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-20 transition-all duration-400 ease-in-out group-hover:left-[calc(100%-48px)] group-hover:bg-linear-to-r group-hover:from-[#3799FA] group-hover:to-[#9961FB] group-hover:scale-105">
                            <FaChevronRight className="w-4 h-4 text-[#3799FA] transition-all duration-400 ease-in-out group-hover:text-white" />
                        </div>
                        {/* MAIN BUTTON BODY */}
                        <div className="pl-14 pr-8 h-full flex items-center text-white font-bold text-[15px] shadow-[0_8px_18px_rgba(55,153,250,0.25)] transition-all duration-400 ease-in-out bg-linear-to-r from-[#3799FA] to-[#9961FB] group-hover:from-white group-hover:to-white group-hover:text-black group-hover:pl-6 group-hover:pr-14 rounded-[34px_34px_0px_34px] group-hover:rounded-[34px_34px_34px_0px]">
                            {card.buttonText}
                        </div>
                    </Link>
                ) : (
                    <button suppressHydrationWarning className="flex items-center group relative h-12 w-fit cursor-pointer overflow-hidden transition-all duration-700 rounded-[34px_34px_0px_34px] hover:rounded-[34px_34px_34px_0px]">
                        {/* LEFT ICON CIRCLE */}
                        <div className="absolute left-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-20 transition-all duration-700 ease-in-out group-hover:left-[calc(100%-48px)] group-hover:bg-linear-to-r group-hover:from-[#3799FA] group-hover:to-[#9961FB] group-hover:scale-105">
                            <FaChevronRight className="w-4 h-4 text-[#3799FA] transition-all duration-700 ease-in-out group-hover:text-white" />
                        </div>
                        {/* MAIN BUTTON BODY */}
                        <div className="pl-14 pr-8 h-full flex items-center text-white font-bold text-[15px] shadow-[0_8px_18px_rgba(55,153,250,0.25)] transition-all duration-700 ease-in-out bg-linear-to-r from-[#3799FA] to-[#9961FB] group-hover:from-white group-hover:to-white group-hover:text-black group-hover:pl-6 group-hover:pr-14 rounded-[34px_34px_0px_34px] group-hover:rounded-[34px_34px_34px_0px]">
                            {card.buttonText}
                        </div>
                    </button>
                )}
            </div>
        </div>
    );
}

// ─── Desktop ImageBox ──────────────────────────────────────────────────────────
function ImageBox({ card }: { card: typeof cardsData[number] }) {
    return (
        <div className={`w-full min-h-[320px] sm:min-h-[400px] lg:h-[480px] flex items-center justify-center ${card.imageBg} relative overflow-hidden group rounded-[16px]`}>
            <div className="absolute inset-0 opacity-[0.25] pointer-events-none" style={{ background: "radial-gradient(circle at center, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 65%)" }}></div>
            {(card as any).plogocard && (
                <div className="absolute top-[2%] left-[2%] w-[28%] h-[28%] z-0 pointer-events-none opacity-[0.6] mix-blend-overlay">
                    <Image src={(card as any).plogocard} alt="Background P Logo" fill className="object-contain object-top-left" />
                </div>
            )}
            {(card as any).rightcard && (
                <div className="absolute bottom-[-8%] right-[-5%] w-[32%] h-[32%] z-0 pointer-events-none opacity-[0.8] mix-blend-screen">
                    <Image src={(card as any).rightcard} alt="Star Decoration" fill className="object-contain object-bottom-right" />
                </div>
            )}
            {card.computercard && (
                <div className="absolute left-[-2%] xl:left-[-5%] top-[15%] w-[85%] xl:w-[85%] h-[80%] z-10 transform group-hover:-translate-y-2 group-hover:scale-[1.02] transition-all duration-500 ease-out">
                    <Image src={card.computercard} alt="Desktop Preview" fill className="object-contain object-bottom-left" />
                </div>
            )}
            {card.mobilecard && (
                <div className="absolute right-[2%] xl:right-[4%] top-[5%] w-[45%] xl:w-[42%] h-[95%] z-20 transform group-hover:-translate-y-4 group-hover:-translate-x-2 group-hover:scale-[1.05] transition-all duration-600 ease-out drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                    <Image src={card.mobilecard} alt="Mobile Preview" fill className="object-contain object-bottom-right" />
                </div>
            )}
            {(card as any).bgText && (
                <div className="absolute top-[4%] left-[5%] z-0 pointer-events-none">
                    <span className="text-white opacity-[0.6] text-[48px] md:text-[60px] lg:text-[75px] font-semibold tracking-wider leading-none drop-shadow-sm">{(card as any).bgText}</span>
                </div>
            )}
            {(card as any).newscard && (
                <div className="absolute right-[-5%] lg:right-[-10%] bottom-[-5%] w-[110%] h-[105%] z-20 transform group-hover:-translate-y-2 group-hover:scale-[1.03] transition-all duration-1000 ease-out">
                    <Image src={(card as any).newscard} alt="News App Preview" fill className="object-contain object-bottom-right drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]" />
                </div>
            )}
            {(card as any).ridecard && (
                <div className="absolute inset-0 w-full h-full z-20 overflow-hidden rounded-[16px] transform group-hover:scale-[1.01] transition-all duration-1000 ease-out">
                    <Image src={(card as any).ridecard} alt="Ride App Dashboard" fill className="object-cover object-center" />
                </div>
            )}
            {(card as any).ecommercecard && (
                <div className="absolute inset-0 w-full h-full z-20 overflow-hidden rounded-[16px] transform group-hover:scale-[1.02] transition-all duration-1000 ease-out">
                    <Image src={(card as any).ecommercecard} alt="E-Commerce Interface Preview" fill className="object-cover object-center" />
                </div>
            )}
            {(card as any).securitycard && (
                <div className="absolute inset-0 w-full h-full z-20 overflow-hidden rounded-[16px] p-16 transform group-hover:scale-[1.02] transition-all duration-600 ease-out">
                    <Image src={(card as any).securitycard} alt="Security App Dashboard" fill className="object-contain" />
                </div>
            )}
            {(card as any).architecturecard && (
                <div className="absolute inset-0 w-full h-full z-20 overflow-hidden rounded-[16px] p-16 transform group-hover:scale-[1.02] transition-all duration-600 ease-out">
                    <Image src={(card as any).architecturecard} alt="Architecture Blueprint Interface" fill className="object-contain" />
                </div>
            )}
            {(card as any).doctorcard && (
                <div className="absolute inset-0 w-full h-full z-20 overflow-hidden rounded-[16px] p-16 transform group-hover:scale-[1.02] transition-all duration-600 ease-out">
                    <Image src={(card as any).doctorcard} alt="Doctor Appointment Interface" fill className="object-contain" />
                </div>
            )}
            {(card as any).urbancard && (
                <div className="absolute inset-0 w-full h-full z-20 overflow-hidden rounded-[16px] p-16 transform group-hover:scale-[1.02] transition-all duration-600 ease-out">
                    <Image src={(card as any).urbancard} alt="UrbanClap Services Interface" fill className="object-contain" />
                </div>
            )}
            {(card as any).foodcard && (
                <div className="absolute inset-0 w-full h-full z-20 overflow-hidden rounded-[16px] p-16 transform group-hover:scale-[1.02] transition-all duration-600 ease-out">
                    <Image src={(card as any).foodcard} alt="Food Delivery App Interface" fill className="object-contain" />
                </div>
            )}
            {(card as any).eduprovacard && (
                <div className="absolute inset-0 w-full h-full z-20 overflow-hidden rounded-[16px] p-16 transform group-hover:scale-[1.03] transition-all duration-600 ease-out">
                    <Image src={(card as any).eduprovacard} alt="EduProva Platform Mockup" fill className="object-contain" />
                </div>
            )}
        </div>
    );
}

// ─── Mobile: Image section (top half) ─────────────────────────────────────────
function MobileImageSection({ card }: { card: typeof cardsData[number] }) {
    return (
        <div className={`relative w-full h-[280px] sm:h-[320px] overflow-hidden rounded-t-[20px] ${card.imageBg} group`}>
            <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{ background: "radial-gradient(circle at center, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 65%)" }} />

            {/* Tag — top-LEFT corner matching images 1–4 */}
            <div className={`absolute top-0 left-0 ${card.tagColor} text-white text-[11px] font-bold px-4 py-[7px] rounded-br-[14px] z-30`}>
                {card.tag}
            </div>

            {card.plogocard && (
                <div className="absolute top-[2%] left-[2%] w-[28%] h-[28%] z-0 pointer-events-none opacity-60 mix-blend-overlay">
                    <Image src={card.plogocard} alt="P Logo" fill className="object-contain object-top-left" />
                </div>
            )}
            {card.rightcard && (
                <div className="absolute bottom-[-8%] right-[-5%] w-[32%] h-[32%] z-0 pointer-events-none opacity-80 mix-blend-screen">
                    <Image src={card.rightcard} alt="Star" fill className="object-contain object-bottom-right" />
                </div>
            )}
            {card.computercard && (
                <div className="absolute left-[-2%] top-[12%] w-[80%] h-[80%] z-10 group-hover:-translate-y-1 transition-transform duration-700 ease-out">
                    <Image src={card.computercard} alt="Desktop" fill className="object-contain object-bottom-left" />
                </div>
            )}
            {card.mobilecard && (
                <div className="absolute right-[2%] top-[4%] w-[44%] h-[94%] z-20 group-hover:-translate-y-2 group-hover:scale-[1.03] transition-all duration-700 ease-out drop-shadow-[0_16px_30px_rgba(0,0,0,0.45)]">
                    <Image src={card.mobilecard} alt="Mobile" fill className="object-contain object-bottom-right" />
                </div>
            )}
            {(card as any).bgText && (
                <div className="absolute top-[4%] left-[5%] z-0 pointer-events-none">
                    <span className="text-white opacity-60 text-[56px] font-semibold tracking-wider leading-none">{(card as any).bgText}</span>
                </div>
            )}
            {(card as any).newscard && (
                <div className="absolute right-[-5%] bottom-[-5%] w-[108%] h-[108%] z-20 group-hover:-translate-y-1 group-hover:scale-[1.02] transition-all duration-700">
                    <Image src={(card as any).newscard} alt="News" fill className="object-contain object-bottom-right" />
                </div>
            )}
            {(card as any).ridecard && (
                <div className="absolute inset-0 z-20 overflow-hidden rounded-t-[20px]">
                    <Image src={(card as any).ridecard} alt="Ride" fill className="object-cover object-center" />
                </div>
            )}
            {(card as any).ecommercecard && (
                <div className="absolute inset-0 z-20 overflow-hidden rounded-t-[20px]">
                    <Image src={(card as any).ecommercecard} alt="Ecommerce" fill className="object-cover object-center" />
                </div>
            )}
            {(card as any).securitycard && (
                <div className="absolute inset-0 z-20 overflow-hidden rounded-t-[20px] p-8">
                    <Image src={(card as any).securitycard} alt="Security" fill className="object-contain" />
                </div>
            )}
            {(card as any).architecturecard && (
                <div className="absolute inset-0 z-20 overflow-hidden rounded-t-[20px] p-4">
                    <Image src={(card as any).architecturecard} alt="Architecture" fill className="object-contain" />
                </div>
            )}
            {(card as any).doctorcard && (
                <div className="absolute inset-0 z-20 overflow-hidden rounded-t-[20px] p-4">
                    <Image src={(card as any).doctorcard} alt="Doctor" fill className="object-contain" />
                </div>
            )}
            {(card as any).urbancard && (
                <div className="absolute inset-0 z-20 overflow-hidden rounded-t-[20px] p-4">
                    <Image src={(card as any).urbancard} alt="Urban" fill className="object-contain" />
                </div>
            )}
            {(card as any).foodcard && (
                <div className="absolute inset-0 z-20 overflow-hidden rounded-t-[20px] p-4">
                    <Image src={(card as any).foodcard} alt="Food" fill className="object-contain" />
                </div>
            )}
            {(card as any).eduprovacard && (
                <div className="absolute inset-0 z-20 overflow-hidden rounded-t-[20px]">
                    <Image src={(card as any).eduprovacard} alt="EduProva Platform Mockup" fill className="object-contain object-center" />
                </div>
            )}
        </div>
    );
}

// ─── Mobile: Text section (bottom half) ───────────────────────────────────────
function MobileTextSection({ card }: { card: typeof cardsData[number] }) {
    return (
        <div className="bg-white w-full rounded-b-[20px] px-8 pt-7 pb-8 flex flex-col">
            {card.logoImage ? (
                <div className="relative w-[180px] h-[46px] mb-4">
                    <Image src={card.logoImage} alt="Logo" fill className="object-contain object-left" />
                </div>
            ) : (
                <h2 className="text-[22px] font-bold tracking-tight text-black leading-tight mb-3">
                    {(card as any).title}
                </h2>
            )}

            <h3 className="text-[15px] font-semibold text-black mb-3 leading-snug tracking-tight">
                &ldquo;{card.quote}&rdquo;
            </h3>

            <p className="text-[#4B5563] text-[13px] leading-[1.65] font-medium mb-5">
                {card.desc}
            </p>

            <div className="flex flex-col gap-3 mb-5">
                {card.metrics.map((m, idx) => (
                    <div key={idx} className="flex flex-col">
                        {m.val !== "text-only" && (
                            <span className="text-[32px] font-bold text-black leading-none tracking-tight mb-[2px] flex items-center">
                                {m.val.startsWith("icon-") ? renderMetricValue(m.val) : m.val}
                            </span>
                        )}
                        <span className={`text-black text-[13px] font-semibold leading-snug ${(m.val === "text-only" || m.val.startsWith("icon-")) ? "mt-2" : ""}`}>
                            {m.label}
                        </span>
                    </div>
                ))}
            </div>

            <div>
                {(card as any).href ? (
                    <Link href={(card as any).href} className="flex items-center group relative h-12 w-fit cursor-pointer overflow-hidden transition-all duration-700 rounded-[34px_34px_0px_34px] hover:rounded-[34px_34px_34px_0px]">
                        {/* LEFT ICON CIRCLE */}
                        <div className="absolute left-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-20 transition-all duration-700 ease-in-out group-hover:left-[calc(100%-48px)] group-hover:bg-linear-to-r group-hover:from-[#3799FA] group-hover:to-[#9961FB] group-hover:scale-105">
                            <FaChevronRight className="w-4 h-4 text-[#3799FA] transition-all duration-700 ease-in-out group-hover:text-white" />
                        </div>
                        {/* MAIN BUTTON BODY */}
                        <div className="pl-14 pr-8 h-full flex items-center text-white font-bold text-[15px] shadow-[0_8px_18px_rgba(55,153,250,0.25)] transition-all duration-700 ease-in-out bg-linear-to-r from-[#3799FA] to-[#9961FB] group-hover:from-white group-hover:to-white group-hover:text-black group-hover:pl-6 group-hover:pr-14 rounded-[34px_34px_0px_34px] group-hover:rounded-[34px_34px_34px_0px]">
                            {card.buttonText}
                        </div>
                    </Link>
                ) : (
                    <button suppressHydrationWarning className="flex items-center group relative h-12 w-fit cursor-pointer overflow-hidden transition-all duration-700 rounded-[34px_34px_0px_34px] hover:rounded-[34px_34px_34px_0px]">
                        {/* LEFT ICON CIRCLE */}
                        <div className="absolute left-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-20 transition-all duration-700 ease-in-out group-hover:left-[calc(100%-48px)] group-hover:bg-linear-to-r group-hover:from-[#3799FA] group-hover:to-[#9961FB] group-hover:scale-105">
                            <FaChevronRight className="w-4 h-4 text-[#3799FA] transition-all duration-700 ease-in-out group-hover:text-white" />
                        </div>
                        {/* MAIN BUTTON BODY */}
                        <div className="pl-14 pr-8 h-full flex items-center text-white font-bold text-[15px] shadow-[0_8px_18px_rgba(55,153,250,0.25)] transition-all duration-700 ease-in-out bg-linear-to-r from-[#3799FA] to-[#9961FB] group-hover:from-white group-hover:to-white group-hover:text-black group-hover:pl-6 group-hover:pr-14 rounded-[34px_34px_0px_34px] group-hover:rounded-[34px_34px_34px_0px]">
                            {card.buttonText}
                        </div>
                    </button>
                )}
            </div>
        </div>
    );
}

// ─── Main section ─────────────────────────────────────────────────────────────
export default function CardsSection() {
    const desktopRef = useRef<HTMLDivElement>(null);
    const mobileRef = useRef<HTMLDivElement>(null);
    const { industry, solution } = useFilter();

    // Filter logic
    const filteredCards = cardsData.filter(card => {
        const tagLower = card.tag.toLowerCase();
        const descLower = card.desc.toLowerCase();
        const combined = tagLower + " " + descLower;

        // Industry filter
        if (industry) {
            const keyword = (industryTagMap[industry] ?? "").toLowerCase();
            if (!combined.includes(keyword)) return false;
        }

        // Solution filter
        if (solution) {
            const keywords = (solutionTagMap[solution] ?? []).map(k => k.toLowerCase());
            if (!keywords.some(k => combined.includes(k))) return false;
        }

        return true;
    });

    // Desktop GSAP — left/right slide per row
    useGSAP(() => {
        const rows = gsap.utils.toArray<HTMLElement>(".card-row");
        rows.forEach((row) => {
            const leftBox = row.querySelector(".box-left");
            const rightBox = row.querySelector(".box-right");
            if (!leftBox || !rightBox) return;

            gsap.from(leftBox, {
                x: -120, opacity: 0, duration: 0.8, ease: "power2.inOut",
                scrollTrigger: { trigger: row, start: "top bottom-=80", end: "bottom top+=80", toggleActions: "play reverse play reverse" },
            });
            gsap.from(rightBox, {
                x: 120, opacity: 0, duration: 0.8, ease: "power2.inOut",
                scrollTrigger: { trigger: row, start: "top bottom-=80", end: "bottom top+=80", toggleActions: "play reverse play reverse" },
            });
        });
        ScrollTrigger.refresh();
    }, { dependencies: [filteredCards], scope: desktopRef });

    // Mobile GSAP — alternating left / right per card
    useGSAP(() => {
        const cards = gsap.utils.toArray<HTMLElement>(".mobile-card-item");
        cards.forEach((card, i) => {
            gsap.from(card, {
                y: 50,
                opacity: 0,
                duration: 0.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top bottom-=30",
                    toggleActions: "play none none none",
                    once: true
                },
            });
        });
        ScrollTrigger.refresh();
    }, { dependencies: [filteredCards], scope: mobileRef });

    return (
        <section className={`w-full bg-[#020617] pt-10 lg:pt-[20px] pb-20 px-4 md:px-8 xl:px-0 ${poppins.className} overflow-x-hidden`}>

            {/* ── Desktop layout (lg+) ──────────────────────────────── */}
            <div ref={desktopRef} className="hidden lg:flex max-w-[1489px] mx-auto flex-col gap-12 lg:gap-16">
                {filteredCards.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-24 text-center">
                        <div className="text-6xl mb-6">🔍</div>
                        <h3 className="text-white text-[24px] font-bold mb-3">No products found</h3>
                        <p className="text-[#9ca3af] text-[16px]">Try adjusting your filters to see more results.</p>
                    </div>
                ) : (
                    filteredCards.map((card) => (
                        <div key={card.id} className="card-row flex flex-row w-full gap-6 xl:gap-8 justify-between">
                            <div className={`box-left flex ${card.reverse ? "w-[610px]" : "w-[879px]"} shadow-[0_10px_40px_rgba(0,0,0,0.4)] rounded-[16px]`}>
                                {card.reverse ? <ImageBox card={card} /> : <TextBox card={card} />}
                            </div>
                            <div className={`box-right flex ${card.reverse ? "w-[879px]" : "w-[610px]"} shadow-[0_10px_40px_rgba(0,0,0,0.4)] rounded-[16px]`}>
                                {card.reverse ? <TextBox card={card} /> : <ImageBox card={card} />}
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* ── Mobile / tablet (< lg): stacked cards + GSAP scroll anims ── */}
            <div ref={mobileRef} className="lg:hidden flex flex-col gap-7">
                {filteredCards.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                        <div className="text-5xl mb-5">🔍</div>
                        <h3 className="text-white text-[20px] font-bold mb-2">No products found</h3>
                        <p className="text-[#9ca3af] text-[14px]">Try adjusting your filters.</p>
                    </div>
                ) : (
                    filteredCards.map((card) => (
                        <div
                            key={card.id}
                            className="mobile-card-item w-full rounded-[20px] overflow-hidden shadow-[0_10px_36px_rgba(0,0,0,0.5)]"
                        >
                            <MobileImageSection card={card} />
                            <MobileTextSection card={card} />
                        </div>
                    ))
                )}
            </div>
        </section>
    );
}
