"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Briefcase, ChevronDown, SlidersHorizontal, Check } from "lucide-react";
import { Poppins } from "next/font/google";
import { useFilter } from "../context/FilterContext";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"]
});

// ─── Dropdown data ──────────────────────────────────────────────────────────
const industryOptions = [
    { value: "", label: "All Industries" },
    { value: "ai-tech", label: "AI & Tech Skill" },
    { value: "media", label: "Media & Content" },
    { value: "mobility", label: "Mobility & Transport" },
    { value: "retail", label: "Retail & Commerce" },
    { value: "safety", label: "Safety & Navigation" },
    { value: "architecture", label: "Design & Architecture" },
    { value: "healthcare", label: "Health Care" },
    { value: "on-demand", label: "On-Demand Services" },
    { value: "food", label: "Food & Delivery" },
];

const solutionOptions = [
    { value: "", label: "All Solutions" },
    { value: "mobile", label: "Mobile App" },
    { value: "web", label: "Web Platform" },
    { value: "ai", label: "AI Integration" },
    { value: "marketplace", label: "Marketplace" },
];

// ─── Custom Dropdown ─────────────────────────────────────────────────────────
interface DropdownProps {
    options: { value: string; label: string }[];
    value: string;
    onChange: (v: string) => void;
    placeholder: string;
    isDark?: boolean;
}

function CustomDropdown({ options, value, onChange, placeholder, isDark = false }: DropdownProps) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const selected = options.find(o => o.value === value);

    return (
        <div ref={ref} className="relative w-full lg:w-[220px] xl:w-[250px]">
            {/* Trigger */}
            <button
                suppressHydrationWarning
                onClick={() => setOpen(prev => !prev)}
                className={`
                    w-full flex items-center justify-between gap-2
                    px-4 py-[10px] rounded-full
                    text-[13px] lg:text-[14px] font-medium
                    border transition-all duration-200 outline-none
                    ${isDark
                        ? "bg-white/5 border-white/20 text-white/80 hover:bg-white/10 hover:border-white/40"
                        : "bg-white border-gray-200 text-gray-600 hover:border-[#8b5cf6]/60 shadow-sm"
                    }
                    ${open
                        ? isDark
                            ? "border-white/50 bg-white/10"
                            : "border-[#8b5cf6] ring-2 ring-[#8b5cf6]/20"
                        : ""
                    }
                `}
            >
                <span className={selected?.value ? (isDark ? "text-white" : "text-gray-900 font-semibold") : ""}>
                    {selected?.label ?? placeholder}
                </span>
                <ChevronDown
                    size={14}
                    strokeWidth={2.5}
                    className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""} ${isDark ? "text-white/50" : "text-gray-400"}`}
                />
            </button>

            {/* Dropdown panel */}
            {open && (
                <div className={`
                    absolute top-[calc(100%+8px)] left-0 z-9999 w-full
                    rounded-[16px] shadow-[0_16px_40px_rgba(0,0,0,0.22)]
                    border backdrop-blur-xl
                    overflow-y-auto filter-dropdown-scroll
                    ${isDark ? "bg-[#0d1b30] border-white/10" : "bg-white border-gray-100"}
                `}
                    style={{ maxHeight: "260px" }}
                >
                    {options.map((opt, i) => {
                        const isSelected = opt.value === value;
                        return (
                            <button
                                key={i}
                                suppressHydrationWarning
                                onClick={() => { onChange(opt.value); setOpen(false); }}
                                className={`
                                    w-full flex items-center justify-between gap-2
                                    px-4 py-[11px] text-left text-[13px] font-medium
                                    transition-colors duration-150
                                    ${isSelected
                                        ? isDark
                                            ? "bg-[#6366f1]/20 text-white"
                                            : "bg-linear-to-r from-[#6366f1]/10 to-[#a855f7]/10 text-[#6366f1]"
                                        : isDark
                                            ? "text-white/70 hover:bg-white/5 hover:text-white"
                                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                    }
                                `}
                            >
                                <span>{opt.label}</span>
                                {isSelected && (
                                    <Check size={13} strokeWidth={3}
                                        className={isDark ? "text-[#8b5cf6]" : "text-[#6366f1]"}
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function HeroSection() {
    const { industry, solution, setIndustry, setSolution } = useFilter();

    return (
        <section className={`relative z-50 w-full bg-[#020617] flex flex-col overflow-x-clip overflow-y-visible ${poppins.className}`}>
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/products-images/hero-bg.png"
                    alt="Hero Background"
                    fill
                    className="object-cover opacity-90"
                    priority
                />
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#020617]/50 mix-blend-multiply pointer-events-none" />
            </div>

            {/* ─── Main Hero Content ─────────────────────────────────────────── */}
            <main className="relative z-10 grow flex flex-col justify-start items-center pt-[120px] sm:pt-[140px] lg:pt-[160px] pb-[30px] lg:pb-[40px] px-5 sm:px-6 text-center">

                <div className="flex flex-col items-center justify-start w-full max-w-[1281px] mx-auto">

                    {/* Badge */}
                    <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
                        <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 border border-white/20 rounded-md bg-white/4 backdrop-blur-sm">
                            <Briefcase size={15} className="text-[#E2E8F0]" />
                        </div>
                        <span className="text-[#E2E8F0] text-[14px] sm:text-[16px] lg:text-[18px] tracking-[0.14em] font-medium uppercase">
                            Our Products
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="font-bold text-white text-center text-[30px] leading-[1.2] sm:text-[44px] md:text-[56px] lg:text-[72px] lg:leading-[1.1] w-full flex flex-col justify-center mx-auto tracking-wide mb-0">
                        Building Smart Digital<br />Products for the Future
                    </h1>

                    {/* Subtitle */}
                    <p className="text-[#D1D5DB] text-center text-[14px] sm:text-[16px] mt-[20px] sm:mt-[28px] lg:mt-[50px] leading-[1.7] md:text-[20px] lg:text-[22px] w-full max-w-[600px] lg:max-w-[900px] mx-auto tracking-wide">
                        We craft digital products that deliver seamless experiences, strong performance,
                        and measurable business value.
                    </p>
                </div>

                {/* ─── Modern Filter Bar ─────────────────────────────────────── */}
                <div className="mt-[36px] sm:mt-[50px] lg:mt-[120px] xl:mt-[200px] w-full max-w-[1281px] mx-auto shadow-[0_20px_40px_rgba(0,0,0,0.5)]
                    rounded-[16px] sm:rounded-full
                    bg-[#0d1b2e] lg:bg-[#f2f2f2]
                    flex flex-col lg:flex-row items-stretch lg:items-center
                    px-5 lg:px-6 py-5 lg:py-0 lg:h-[70px]
                    justify-between lg:pr-[12px]
                    border border-white/10 lg:border-0">

                    {/* Filter By label */}
                    <div className="flex items-center gap-3 w-full lg:w-auto shrink-0 lg:pl-2 pb-4 lg:pb-0 border-b border-white/10 lg:border-b-0">
                        <SlidersHorizontal size={18} strokeWidth={2.5} className="text-white lg:text-gray-800 opacity-80" />
                        <span className="font-bold text-[15px] xl:text-[18px] text-white lg:text-gray-800 mr-2 xl:mr-10">Filter by:</span>
                    </div>

                    <div className="flex-1 flex flex-col lg:flex-row items-stretch lg:items-center justify-center w-full gap-4 lg:gap-3 xl:gap-8 mt-4 lg:mt-0">

                        {/* Industries dropdown */}
                        <div className="flex flex-row items-center gap-3 lg:gap-4 w-full lg:w-auto">
                            <span className="text-white lg:text-black font-extrabold text-[14px] xl:text-[16px] whitespace-nowrap w-[90px] lg:w-auto">
                                Industries
                            </span>
                            {/* Dark on mobile, light on desktop */}
                            <div className="flex-1 lg:hidden">
                                <CustomDropdown
                                    options={industryOptions}
                                    value={industry}
                                    onChange={setIndustry}
                                    placeholder="All Industries"
                                    isDark={true}
                                />
                            </div>
                            <div className="hidden lg:flex flex-1">
                                <CustomDropdown
                                    options={industryOptions}
                                    value={industry}
                                    onChange={setIndustry}
                                    placeholder="All Industries"
                                    isDark={false}
                                />
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="hidden lg:block w-[1.5px] h-[34px] bg-gray-300 mx-1 xl:mx-4"></div>

                        {/* Solution dropdown */}
                        <div className="flex flex-row items-center gap-3 lg:gap-4 w-full lg:w-auto">
                            <span className="text-white lg:text-black font-extrabold text-[14px] xl:text-[16px] whitespace-nowrap w-[90px] lg:w-auto">
                                Solution
                            </span>
                            <div className="flex-1 lg:hidden">
                                <CustomDropdown
                                    options={solutionOptions}
                                    value={solution}
                                    onChange={setSolution}
                                    placeholder="All Solutions"
                                    isDark={true}
                                />
                            </div>
                            <div className="hidden lg:flex flex-1">
                                <CustomDropdown
                                    options={solutionOptions}
                                    value={solution}
                                    onChange={setSolution}
                                    placeholder="All Solutions"
                                    isDark={false}
                                />
                            </div>
                        </div>

                        {/* Clear filters button — only show when something is selected */}
                        {(industry || solution) && (
                            <button
                                suppressHydrationWarning
                                onClick={() => { setIndustry(""); setSolution(""); }}
                                className="shrink-0 text-[13px] font-semibold text-[#8b5cf6] lg:text-[#6366f1] hover:underline transition-all whitespace-nowrap px-2"
                            >
                                Clear All
                            </button>
                        )}
                    </div>
                </div>
            </main>
        </section>
    );
}
